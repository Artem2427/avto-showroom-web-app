import { Button } from '@mui/material';
import styled from 'styled-components';

import Palette from '@/palette';

export const ButtonComponent = styled(Button).attrs(() => ({
	sx: {
		display: 'block',
		width: 'fit-content',
		margin: '0 0 10px auto',
		background: Palette.orange,
		transition: 'all 0.5s',
		color: 'white',
		'&:hover': {
			backgroundColor: Palette.orangeDark,
		},
	},
	component: 'label',
	variant: 'contained',
}))``;

export const Title = styled.h1`
	width: fit-content;
	margin: 0;
	color: #131313;
	font-size: 35px;
	font-weight: 500;
	color: ${Palette.orange};
	@media (max-width: 768px) {
		font-size: 32px;
	}
`;
