import { TabList } from '@mui/lab';
import { Box, Button, FormControl, Typography, TextField } from '@mui/material';
import styled from 'styled-components';

import Palette from '@/palette';

export const Input = styled(TextField).attrs(() => ({
	sx: {
		width: '100%',
	},
	color: 'warning',
}))``;

export const StyledButton = styled(Button).attrs(() => ({
	sx: {
		mt: 2,
		background: Palette.orange,
		'&:hover': {
			backgroundColor: Palette.orangeDark,
		},
	},
	variant: 'contained',
}))``;

export const StyledCancelButton = styled(Button).attrs(() => ({
	sx: {
		mt: 3,
		ml: 2,
		color: Palette.orange,
		'&:hover': {
			color: Palette.orangeDark,
			background: Palette.grey,
		},
	},
}))``;

export const StyledTypography = styled(Typography).attrs(() => ({
	sx: {
		textOverflow: 'ellipsis',
		overflow: 'hidden',
		width: '100%',
	},
}))``;

export const StyledBox = styled(Box).attrs(() => ({
	sx: {
		border: `3px solid ${Palette.light}`,
		p: 1,
		borderRadius: 3,
	},
}))``;

export const StyledFormControl = styled(FormControl).attrs(() => ({
	sx: { display: 'flex', gap: 2 },
}))``;

export const StyledTabList = styled(TabList).attrs(() => ({
	sx: {
		width: '95%',
		'& .MuiTab-root.Mui-selected': {
			color: Palette.orange,
		},
		'& .MuiTabs-indicator': {
			backgroundColor: Palette.orange,
		},
	},
	variant: 'scrollable',
	scrollButtons: 'auto',
}))``;
