import React from 'react';

import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Pages from '@/constants/pages';
import { useAppDispatch } from '@/hooks';
import { authService } from '@/services/AuthService';
import { addUser } from '@/store/userSlice';

import ProfileMenu from '../../components/profileMenu';
import UserSkeleton from '../../components/userSkeleton';

import { StyledContainer, StyledLogOutButton } from './style';

const Profile = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	return (
		<StyledContainer>
			<Grid container spacing={1}>
				<Grid item md={4} xs={12}>
					<UserSkeleton />
				</Grid>
				<Grid item md={8} xs={12}>
					<ProfileMenu />
				</Grid>
			</Grid>
			<StyledLogOutButton
				onClick={() => {
					authService.logout(dispatch);
					dispatch(addUser(null));
					navigate(Pages.HOME);
				}}
			>
				Log out
			</StyledLogOutButton>
		</StyledContainer>
	);
};
export default Profile;
