import { Select } from '@mui/material';
import styled from 'styled-components';

import Palette from '@/palette';

export const StyledSelect = styled(Select).attrs(() => ({
	MenuProps: { disableScrollLock: true },
	inputProps: {
		sx: {
			color: Palette.light,
			pl: 1,
		},
	},
	sx: {
		width: '120px',
		'& svg.MuiSelect-iconStandard': {
			color: Palette.light,
		},
		mr: 1,
		'&:after': {
			borderColor: Palette.light,
		},
	},
	variant: 'standard',
}))``;
