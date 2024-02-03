import React, { FC } from 'react';

import { Menu as MenuIcon } from '@mui/icons-material';
import { MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { HeaderItem } from '../../type';

import {
	StyledBox,
	StyledIconButton,
	StyledMenu,
	StyledTypography,
} from './style';

type Props = {
	PAGES: HeaderItem[];
	anchorElNav: null | HTMLElement;
	setAnchorElNav: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
	handleCloseNavMenu: () => void;
};

const BurgerMenu: FC<Props> = ({
	PAGES,
	anchorElNav,
	setAnchorElNav,
	handleCloseNavMenu,
}) => {
	const navigate = useNavigate();

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	return (
		<StyledBox>
			<StyledIconButton onClick={handleOpenNavMenu}>
				<MenuIcon />
			</StyledIconButton>
			<StyledMenu
				anchorEl={anchorElNav}
				disableScrollLock
				keepMounted
				onClose={handleCloseNavMenu}
				open={Boolean(anchorElNav)}
			>
				{PAGES.map((page, index) => (
					<MenuItem
						key={index}
						onClick={() => {
							handleCloseNavMenu();
							navigate(page.path);
						}}
					>
						<StyledTypography>{page.name}</StyledTypography>
					</MenuItem>
				))}
			</StyledMenu>
		</StyledBox>
	);
};

export default BurgerMenu;
