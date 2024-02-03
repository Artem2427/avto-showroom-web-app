import { Paper, InputBase } from '@mui/material';
import styled from 'styled-components';

export const StyledPaper = styled(Paper).attrs(() => ({
	component: 'form',
	sx: {
		p: 1,
		display: 'flex',
		alignItems: 'center',
		width: { xs: '100%', md: 300 },
		height: 30,
		my: 1,
	},
}))``;

export const StyledInputBase = styled(InputBase).attrs(() => ({
	sx: { ml: 1, flex: 1 },
}))``;
