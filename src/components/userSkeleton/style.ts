import { Button, Box, Typography } from '@mui/material';
import styled from 'styled-components';

import Palette from '@/palette';

export const StyledBox = styled(Box).attrs(() => ({
	sx: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
}))``;

export const StyledSaveButton = styled(Button).attrs(() => ({
	sx: {
		mt: 1,
		background: Palette.orange,
		'&:hover': {
			backgroundColor: Palette.orangeDark,
		},
	},
	variant: 'contained',
}))``;

export const StyledCancelButton = styled(Button).attrs(() => ({
	sx: {
		mt: 1,
		ml: 2,
		color: Palette.orange,
		'&:hover': {
			color: Palette.orangeDark,
			background: Palette.grey,
		},
	},
}))``;

export const StyledLoader = styled(Box).attrs(() => ({
	sx: {
		width: 240,
		height: 240,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
}))``;

export const StyledH5 = styled(Typography).attrs(() => ({
	align: 'center',
	noWrap: true,
	sx: {
		textOverflow: 'ellipsis',
		overflow: 'hidden',
		width: '100%',
		fontWeight: 500,
	},
	variant: 'h5',
}))``;

export const StyledSubtitle = styled(Typography).attrs(() => ({
	align: 'center',
	sx: { textOverflow: 'ellipsis', overflow: 'hidden', width: '100%' },
	variant: 'subtitle1',
}))``;

export const StyledButton = styled(Button).attrs(() => ({
	component: 'label',
	sx: {
		mt: 1,
		color: Palette.orange,
		'&:hover': {
			color: Palette.orangeDark,
			background: Palette.grey,
		},
	},
	variant: 'text',
}))``;
