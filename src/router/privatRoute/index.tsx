import React from 'react';

import { Navigate } from 'react-router-dom';

import { useAppSelector } from '@/hooks';
import { authService } from '@/services/AuthService';
import { Roles } from '@/type';

const PrivateRoute = ({ children }: any) => {
	const user = useAppSelector((state) => state.user.obj);

	if (user) {
		if (authService.isLogin()) {
			switch (children.type.name) {
				case 'AdminPanel':
					if (user.role === Roles.admin) {
						return children;
					}
					break;
				case 'Profile':
					return children;

				default:
					break;
			}
		}
		return <Navigate to="/authorization" />;
	}
};

export default PrivateRoute;
