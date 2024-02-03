import { Container } from '@mui/material';
import styled from 'styled-components';

export const Title = styled.h1`
	display: block;
	width: fit-content;
	font-size: 30px;
	margin: 50px auto 30px auto;
`;

export const PQuestion = styled.p`
	font-size: 18px;
	font-weight: 400;
	line-height: 23px;
`;

export const PAnswer = styled(PQuestion)`
	font-weight: 400;
`;

export const StyledContainer = styled(Container).attrs(() => ({
	maxWidth: 'xl',
	sx: {
		mb: 7,
	},
}))``;
