import { FormControl, Box } from '@mui/material';
import styled from 'styled-components';

import Palette from '@/palette';

export const FormControlBox = styled(FormControl).attrs(() => ({
	sx: {
		'& label.Mui-focused': {
			color: Palette.orange,
		},
		'&:focus': {
			borderColor: Palette.orange,
		},
	},
}))``;

export const Container = styled(Box).attrs(() => ({
	sx: {
		margin: '10px 0',
		width: '30%',
		mimWidth: '120px',
	},
}))``;

export const FlexContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: baseline;
`;
