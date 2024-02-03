import { Paper } from '@mui/material';
import styled from 'styled-components';

export const StyleSearch = styled(Paper).attrs(() => ({
	sx: {
		p: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		height: '30px',
	},
	component: 'form',
}))``;

export const Container = styled.div`
	width: fit-content;
	margin: 10px 0 0 10px;
`;
