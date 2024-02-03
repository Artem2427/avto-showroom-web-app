import React, { FC, useState } from 'react';

import { Container, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

import Pages from '@/constants/pages';
import { useAppSelector } from '@/hooks';
import { authService } from '@/services/AuthService';
import { HeaderItem, Roles } from '@/type';

import BurgerMenu from '../burgerMenu';
import Logo from '../logo';

import UserMenu from './UserMenu';
import {
	StyledAppBar,
	StyledAuthorizationBox,
	StyledBox,
	StyledButton,
	StyledButtonTypography,
	StyledLoginButton,
	StyledSingInButton,
} from './style';

const Header: FC = () => {
	const user = useAppSelector((state) => state.user.obj);
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

	const PAGES: HeaderItem[] = [
		{
			path: Pages.CATALOG,
			name: 'CATALOG',
			isShow: true,
		},
		{
			path: Pages.ADMIN_PANEL,
			name: 'ADMIN PANEL',
			isShow: user?.role === Roles.admin,
		},
	];

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<StyledAppBar position="sticky">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Logo flexGrowValue={0} md="flex" xs="none" />
					<BurgerMenu
						PAGES={PAGES}
						anchorElNav={anchorElNav}
						handleCloseNavMenu={handleCloseNavMenu}
						setAnchorElNav={setAnchorElNav}
					/>
					<Logo flexGrowValue={1} md="none" xs="flex" />
					<StyledBox>
						{PAGES.map((page, index) => {
							if (page.name === 'ADMIN PANEL') {
								if (user?.role !== Roles.admin) return;
							}
							return (
								<Link key={index} to={page.path}>
									<StyledButton>{page.name}</StyledButton>
								</Link>
							);
						})}
					</StyledBox>

					{user && authService.isLogin() ? (
						<UserMenu />
					) : (
						<StyledAuthorizationBox>
							<Link to={Pages.AUTORIZATION}>
								<StyledLoginButton>
									<StyledButtonTypography>Log in</StyledButtonTypography>
								</StyledLoginButton>
							</Link>
							<Link to={Pages.REGISTRATION}>
								<StyledSingInButton>
									<StyledButtonTypography>Sing in</StyledButtonTypography>
								</StyledSingInButton>
							</Link>
						</StyledAuthorizationBox>
					)}
				</Toolbar>
			</Container>
		</StyledAppBar>
	);
};

export default Header;
