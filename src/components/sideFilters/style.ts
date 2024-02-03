import {
	AccordionDetails,
	Box,
	ToggleButton,
	ToggleButtonGroup,
	Checkbox,
	Select,
} from '@mui/material';
import styled from 'styled-components';

import Palette from '@/palette';

export const StyledAccordionDetails = styled(AccordionDetails).attrs(() => ({
	sx: {
		pr: 1,
		maxHeight: 320,
		background: Palette.greyDark,
		overflowY: 'scroll',
		'&::-webkit-scrollbar': {
			width: '7px',
		},
		'&::-webkit-scrollbar-track': {
			background: Palette.black,
		},
		'&::-webkit-scrollbar-thumb': {
			background: Palette.orange,
			borderRadius: '2px',
		},
	},
}))``;

export const StyledBox = styled(Box).attrs(() => ({
	sx: {
		zIndex: 10,
		width: { xs: '100vw', sm: 350, md: 260 },
		background: Palette.black,
	},
}))``;

export const StyledToggleButton = styled(ToggleButton).attrs(() => ({
	sx: {
		color: Palette.light,
		background: Palette.blackLight,
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		'&.Mui-selected': {
			background: Palette.orange,
			'&:hover': {
				background: Palette.orangeDark,
			},
		},
	},
}))``;

export const StyledToggleButtonGroup = styled(ToggleButtonGroup).attrs(() => ({
	sx: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gridGap: 10,
	},
}))``;

export const StyledCheckbox = styled(Checkbox).attrs(() => ({
	sx: {
		color: Palette.light,
		'&.Mui-checked': {
			color: Palette.orange,
		},
	},
}))``;

export const StyledSelect = styled(Select).attrs(() => ({
	MenuProps: { disableScrollLock: true },
	inputProps: {
		sx: {
			color: Palette.light,
			pl: 1,
		},
	},
	sx: {
		'& svg.MuiSelect-iconStandard': {
			color: Palette.light,
		},
		mr: 1,
		'&:after': {
			borderColor: Palette.orange,
		},
	},
	variant: 'standard',
}))``;
