import { Box, Typography, Icon, Stack } from '@mui/material';
import styled from 'styled-components';

import Palette from '@/palette';

export const StyledInStockBox = styled(Box).attrs(() => ({
	sx: {
		mt: 2,
		color: Palette.light,
		border: `2px solid ${Palette.light}`,
		width: 'fit-content',
		p: 1,
		borderRadius: '8px',
		opacity: 0.5,
	},
}))``;

export const StyledTypography = styled(Typography).attrs(() => ({
	variant: 'h4',
}))``;

export const StyledHotPrice = styled(Typography).attrs(() => ({
	variant: 'h6',
	color: Palette.light,
	sx: { alignSelf: 'center' },
}))``;

export const StyledIcon = styled(Icon).attrs(() => ({
	sx: {
		ml: 1,
		width: 40,
		display: 'flex',
		alignItems: 'center',
	},
}))``;

export const StyledH4 = styled(Typography).attrs(() => ({
	sx: { color: Palette.light, mt: 1 },
	variant: 'h4',
}))``;

export const StyledMainInfo = styled(Stack).attrs(() => ({
	alignItems: 'center',
	direction: 'row',
	sx: {
		color: Palette.light,
		mt: 2,
	},
}))``;
