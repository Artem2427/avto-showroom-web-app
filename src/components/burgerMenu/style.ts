import { Box, IconButton, Menu, Typography } from '@mui/material';
import styled from 'styled-components';

export const StyledBox = styled(Box).attrs(() => ({
	sx: { flexGrow: 1, display: { xs: 'flex', md: 'none' } },
}))``;
export const StyledIconButton = styled(IconButton).attrs(() => ({
	color: 'inherit',
	size: 'large',
}))``;
export const StyledMenu = styled(Menu).attrs(() => ({
	anchorOrigin: {
		vertical: 'bottom',
		horizontal: 'left',
	},
	sx: {
		display: { xs: 'block', md: 'none' },
		fontWeight: '500',
	},
	transformOrigin: {
		vertical: 'top',
		horizontal: 'left',
	},
}))``;
export const StyledTypography = styled(Typography).attrs(() => ({
	sx: {
		letterSpacing: '.1rem',
		color: 'inherit',
	},
	textAlign: 'center',
}))``;
