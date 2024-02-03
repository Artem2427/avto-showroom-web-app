import { Input, Button, Box, Slider, Typography } from '@mui/material';
import styled from 'styled-components';

import Palette from '@/palette';

export const StyledInput = styled(Input).attrs(() => ({
	size: 'small',
	sx: {
		color: Palette.light,
		'&.Mui-disabled': {
			cursor: 'not-allowed',
		},
		mr: 1,
		pl: 1,
	},
}))``;
export const StyledBox = styled(Box).attrs(() => ({
	sx: { display: 'flex', alignItems: 'center' },
}))``;
export const StyledButton = styled(Button).attrs(() => ({
	sx: {
		color: Palette.light,
		borderColor: Palette.light,
		'&.Mui-disabled': {
			cursor: 'not-allowed',
		},
	},
	variant: 'outlined',
}))``;
export const StyledSlider = styled(Slider).attrs(() => ({
	sx: {
		color: Palette.orange,
		width: '92%',
		'&.Mui-disabled': {
			cursor: 'not-allowed',
		},
	},
}))``;
export const StyledTypography = styled(Typography).attrs(() => ({
	variant: 'h3',
	sx: { mr: 1 },
}))``;
