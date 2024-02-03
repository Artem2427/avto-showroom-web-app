import { TableCell, Paper } from '@mui/material';
import styled from 'styled-components';

import Palette from '@/palette';

export const Th = styled(TableCell).attrs(() => ({
	sx: {
		textAlign: 'left',
	},
}))``;

export const Search = styled(Paper).attrs(() => ({
	sx: {
		margin: '0 0 10px auto',
		p: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		width: { xs: 200, sm: 300, md: 350 },
		height: 30,
	},
	component: 'form',
}))``;

export const Title = styled.h1`
	width: fit-content;
	margin: 0;
	font-size: 35px;
	font-weight: 500;
	color: ${Palette.orange};
	@media (max-width: 768px) {
		font-size: 32px;
	}
`;
