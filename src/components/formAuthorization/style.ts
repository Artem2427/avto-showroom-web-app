import { TextField, Button } from '@mui/material';
import styled from 'styled-components';

import Palette from '@/palette';

export const ButtonComponent = styled(Button).attrs(() => ({
	sx: {
		margin: '25px auto',
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

export const InputComponent = styled(TextField).attrs(() => ({
	sx: {
		width: '70%',
		'& label.Mui-focused': {
			color: Palette.orange,
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: Palette.orange,
		},
	},
	variant: 'standard',
}))``;

export const Form = styled.div`
	display: flex;
	width: 60%;
	padding: 30px 10px;
	margin: 20px auto;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	border: 1px solid ${Palette.greyMiddle};
	@media (max-width: 1024px) {
		width: 80%;
	}
	@media (max-width: 768px) {
		width: 95%;
	}
`;

export const Text = styled.div`
	font-size: 15px;
	margin: 15px 0;
	font-weight: 400;
	text-align: center;
`;

export const Span = styled(Text)`
	margin: 0 5px;
	display: inline-block;
	color: #ff6600;
`;

export const Container = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	flex-direction: column;
`;

export const ErrorMassage = styled.div`
	font-size: 14px;
	font-weight: 400;
	color: red;
	text-align: center;
`;
