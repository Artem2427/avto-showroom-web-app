import { Button, Container } from '@mui/material';
import styled from 'styled-components';

export const StyledContainer = styled(Container).attrs(() => ({
	maxWidth: 'xl',
	sx: { display: 'flex', alignItems: 'center', flexDirection: 'column', mt: 5 },
}))``;

export const StyledLogOutButton = styled(Button).attrs(() => ({
	color: 'error',
	sx: {
		mb: 5,
		width: 'max-content',
		display: 'flex',
		alignSelf: 'flex-end',
		border: '2px solid',
		fontWeight: 600,
		'&:hover': {
			border: '2px solid',
		},
	},
	variant: 'outlined',
}))``;
