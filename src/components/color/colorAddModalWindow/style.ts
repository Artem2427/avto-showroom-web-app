import { Box, TextField, Button } from '@mui/material';
import styled from 'styled-components';

import Palette from '@/palette';

export const Container = styled(Box).attrs(() => ({
	sx: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '60%',
		maxHeight: '70%',
		bgcolor: 'background.paper',
		boxShadow: 24,
		p: 4,
		overflow: 'auto',
		padding: '10px 30px',
	},
}))``;

export const Input = styled(TextField).attrs(() => ({
	sx: {
		width: '100%',
		margin: '0 auto 20px auto',
		'& label.Mui-focused': {
			color: Palette.orange,
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: Palette.orange,
		},
	},
	variant: 'standard',
}))``;

export const ButtonComponent = styled(Button).attrs(() => ({
	sx: {
		margin: '15px 0 0 auto',
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

export const Form = styled.div`
	display: flex;
	width: 95%;
	margin: 0 auto;
	flex-direction: column;
	margin: 0 auto 10px auto;
	justify-content: space-between;
	align-items: baseline;
	@media (max-width: 1024px) {
		width: 80%;
	}
	@media (max-width: 768px) {
		width: 95%;
	}
`;

export const ActionName = styled.p`
	width: fit-content;
	margin: 10px auto;
	font-size: 20px;
	font-weight: 500;
`;

export const ErrorMassage = styled.div`
	margin: 0 auto;
	font-size: 14px;
	font-weight: 400;
	color: ${Palette.error};
	text-align: center;
`;
