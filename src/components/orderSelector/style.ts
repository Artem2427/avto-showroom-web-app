import { Select } from '@mui/material';
import styled from 'styled-components';

import Palette from '@/palette';

export const StyledSelect = styled(Select).attrs(() => ({
	MenuProps: { disableScrollLock: true },
	inputProps: {
		sx: { color: Palette.orange, pl: 1 },
	},
	sx: {
		width: '120px',
		fill: Palette.orange,
		mr: 1,
		'& svg.MuiSelect-iconStandard': {
			color: Palette.orange,
		},
		'&:after': {
			borderColor: Palette.orange,
		},
	},
	variant: 'standard',
}))``;
