import React, { FC, ReactNode } from 'react';

import { Navigate } from 'react-router-dom';

import { useAppSelector } from '@/hooks';
import { authService } from '@/services/AuthService';
import { Roles } from '@/type';

const PrivateRoute = ({ children, path }: {children: any, path?: string}) => {
	const user = useAppSelector((state) => state.user.obj);

	if (user) {
		if (authService.isLogin()) {
			switch (path) {
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
