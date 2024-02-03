import { Box, List } from '@mui/material';
import styled from 'styled-components';

import Palette from '@/palette';

export const StyledCharacteristicsBox = styled(Box).attrs(() => ({
	sx: {
		display: 'flex',
		background: 'rgb(19, 19, 19, 0.5)',
		color: Palette.light,
		fontWeight: 800,
		mt: 4,
		mb: 4,
	},
}))``;

export const StyledList = styled(List).attrs(() => ({
	sx: {
		width: '50%',
	},
}))``;
