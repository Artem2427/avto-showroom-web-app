import React from 'react';

import { Telegram, Instagram, Facebook, Twitter } from '@mui/icons-material';
import { Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

import { useAppSelector } from '@/hooks';

import Pages from '../../constants/pages';
import { HeaderItem, Roles } from '../../type';
import Logo from '../logo';

import {
	StyledFooter,
	StyledContainer,
	StyledNavContainer,
	StyledButton,
	StyledTypography,
	StyledIconButton,
	StyledBox,
	StyledMainBox,
	StyledLinksBox,
} from './style';

const Footer = () => {
	const user = useAppSelector((state) => state.user.obj);
	const PAGES: HeaderItem[] = [
		{
			path: Pages.CATALOG,
			name: 'CATALOG',
			isShow: true,
		},
		{
			path: Pages.PROFILE,
			name: 'PROFILE',
			isShow: Boolean(user),
		},
		{
			path: Pages.ADMIN_PANEL,
			name: 'ADMIN PANEL',
			isShow: user?.role === Roles.admin,
		},
	];

	return (
		<StyledFooter>
			<StyledContainer>
				<StyledMainBox>
					<StyledBox>
						<Logo flexGrowValue={0} md={'flex'} xs={'flex'} />
						<StyledNavContainer>
							{PAGES.map(
								(page, index) =>
									page.isShow && (
										<Link key={index} to={page.path}>
											<StyledButton>{page.name}</StyledButton>
										</Link>
									)
							)}
						</StyledNavContainer>
					</StyledBox>
					<StyledTypography>
						©2022 Cars Motors. All Rights Reserved.
					</StyledTypography>
				</StyledMainBox>
				<StyledLinksBox>
					<MuiLink href="https://web.telegram.org/" target="_blank">
						<StyledIconButton>
							<Telegram />
						</StyledIconButton>
					</MuiLink>
					<MuiLink href="https://www.instagram.com/" target="_blank">
						<StyledIconButton>
							<Instagram />
						</StyledIconButton>
					</MuiLink>
					<MuiLink href="https://m.facebook.com/" target="_blank">
						<StyledIconButton>
							<Facebook />
						</StyledIconButton>
					</MuiLink>
					<MuiLink href="https://twitter.com/" target="_blank">
						<StyledIconButton color="inherit">
							<Twitter />
						</StyledIconButton>
					</MuiLink>
				</StyledLinksBox>
			</StyledContainer>
		</StyledFooter>
	);
};

export default Footer;
