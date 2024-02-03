import React, { FC } from 'react';

import { IconButton, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

import Pages from '@/constants/pages';
import { useAppSelector } from '@/hooks';

import { StyledTypography, StyledUserMenuBox } from './style';

const UserMenu: FC = () => {
	const user = useAppSelector((state) => state.user.obj);

	return (
		<StyledUserMenuBox>
			<Link to={Pages.PROFILE}>
				<IconButton sx={{ p: 0 }}>
					<Avatar
						alt={`${user?.firstName} ${user?.lastName}`}
						src={user?.avatar}
					/>
					<StyledTypography>
						{`${user?.firstName} ${user?.lastName}`}
					</StyledTypography>
				</IconButton>
			</Link>
		</StyledUserMenuBox>
	);
};

export default UserMenu;
