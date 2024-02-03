import { Stack } from '@mui/material';
import styled from 'styled-components';

export const StyledStack = styled(Stack).attrs(() => ({
	direction: 'row',
	sx: {
		display: 'flex',
		flexWrap: 'wrap',
		gap: 1,
		zIndex: 20,
	},
}))``;
