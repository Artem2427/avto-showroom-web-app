import { Button, FormControl, TextField, FormGroup } from '@mui/material';
import styled from 'styled-components';

import Palette from '@/palette';

export const StyledTextField = styled(TextField).attrs(() => ({
	required: true,
	color: 'warning',
}))``;

export const StyledTextArea = styled(TextField).attrs(() => ({
	multiline: true,
	rows: 7,
	color: 'warning',
}))``;

export const StyledButton = styled(Button).attrs(() => ({
	variant: 'contained',
	sx: {
		background: Palette.orange,
		'&:hover': {
			background: Palette.orangeDark,
		},
	},
}))``;

export const StyledFormControl = styled(FormControl).attrs(() => ({
	sx: { m: 3, width: '90%' },
}))``;

export const StyledFormGroup = styled(FormGroup).attrs(() => ({
	sx: { display: 'flex', gap: 3 },
}))``;
