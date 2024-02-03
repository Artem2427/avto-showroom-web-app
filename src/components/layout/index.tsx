import React, { FC, ReactNode, useEffect, useState } from 'react';

import { CircularProgress } from '@mui/material';
import { useLocation } from 'react-router-dom';

import Pages from '@/constants/pages';
import { authService } from '@/services/AuthService';
import { userService } from '@/services/UserService';

import { useAppDispatch } from '../../hooks';
import { addUser } from '../../store/userSlice';
import Footer from '../footer';
import Header from '../header/';
import Main from '../main';

import { StyledBackdrop, Wrapper } from './style';

type Props = {
	children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
	const { pathname } = useLocation();
	const dispatch = useAppDispatch();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (pathname !== Pages.AUTORIZATION && authService.isLogin()) {
			setIsLoading(true);
			userService
				.getMe()
				.then((res) => {
					dispatch(addUser(res));
					setIsLoading(false);
				})
				.catch(() => dispatch(addUser(null)));
		}
	}, [dispatch, pathname]);

	return (
		<Wrapper>
			<StyledBackdrop open={isLoading}>
				<CircularProgress color="inherit" />
			</StyledBackdrop>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</Wrapper>
	);
};

export default Layout;
