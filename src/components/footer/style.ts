import { Container, Box, Button, Typography, IconButton } from '@mui/material';
import styled from 'styled-components';

import Palette from '../../palette';

export const StyledFooter = styled.footer`
	background: ${Palette.black};
`;

export const StyledContainer = styled(Container).attrs(() => ({
	maxWidth: 'xl',
	sx: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'space-between',
		color: Palette.light,
		height: 200,
	},
}))``;

export const StyledNavContainer = styled(Box).attrs(() => ({
	sx: {
		display: 'flex',
		alignItems: 'center',
		ml: { xs: 0, md: 2 },
		justifyContent: 'center',
	},
}))``;

export const StyledBox = styled(Box).attrs(() => ({
	sx: { display: 'flex', flexDirection: { xs: 'column', md: 'row' } },
}))``;

export const StyledButton = styled(Button).attrs(() => ({
	sx: {
		color: Palette.light,
		flexGrow: 0,
		display: 'block',
		fontWeight: '500',
	},
}))``;

export const StyledTypography = styled(Typography).attrs(() => ({
	noWrap: true,
	sx: {
		flexGrow: { xs: 0, md: 1 },
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
}))``;

export const StyledIconButton = styled(IconButton).attrs(() => ({
	sx: { color: Palette.orangeLight, textDecoration: 'none' },
}))``;

export const StyledMainBox = styled(Box).attrs(() => ({
	sx: {
		display: 'flex',
		flexDirection: { xs: 'column', md: 'row' },
		alignItems: { xs: 'center', md: 'space-between' },
	},
}))``;

export const StyledLinksBox = styled(Box).attrs(() => ({
	sx: {
		display: 'flex',
		flexDirection: 'row',
		alignSelf: { xs: 'center', md: 'flex-end' },
	},
}))``;
