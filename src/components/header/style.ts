import { AppBar, Box, Button, Typography } from '@mui/material';
import styled from 'styled-components';

import Palette from '@/palette';

export const StyledAppBar = styled(AppBar)`
	&.MuiPaper-root.MuiAppBar-root {
		background: ${Palette.black}};
	};
	overflow: hidden;
`;

export const StyledTypography = styled(Typography).attrs(() => ({
	variant: 'subtitle2',
	align: 'left',
	sx: {
		display: { xs: 'none', sm: 'block', md: 'block' },
		color: Palette.light,
		ml: 1,
		fontWeight: 300,
		maxWidth: '120px',
		textOverflow: 'ellipsis',
		overflow: 'hidden',
	},
}))``;

export const StyledBox = styled(Box).attrs(() => ({
	sx: { flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 2 },
}))``;

export const StyledButton = styled(Button).attrs(() => ({
	sx: { mr: 2, color: Palette.light, display: 'block' },
}))``;

export const StyledLoginButton = styled(Button).attrs(() => ({
	sx: {
		display: { xs: 'none', md: 'block' },
		color: Palette.orange,
		borderColor: Palette.orange,
		'&:hover': {
			color: Palette.orangeLight,
			borderColor: Palette.orangeLight,
		},
	},
	variant: 'outlined',
}))``;

export const StyledSingInButton = styled(Button).attrs(() => ({
	sx: {
		color: { xs: Palette.orangeLight, md: Palette.light },
	},
	variant: 'text',
}))``;

export const StyledButtonTypography = styled(Typography).attrs(() => ({
	noWrap: true,
	sx: { fontSize: { xs: '12px', sm: '14px', md: '16px' } },
}))``;

export const StyledUserMenuBox = styled(Box).attrs(() => ({
	sx: {
		flexGrow: 1,
		textAlign: 'end',
	},
}))``;

export const StyledAuthorizationBox = styled(Box).attrs(() => ({
	sx: {
		display: 'flex',
		flexGrow: { xs: 1, md: 0 },
		justifyContent: 'flex-end',
	},
}))``;
