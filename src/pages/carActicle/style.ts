import { Grid, Typography, Backdrop } from '@mui/material';
import styled from 'styled-components';

import Palette from '@/palette';

export const StyledGrid = styled(Grid).attrs(() => ({
	columns: { xs: 2, md: 12 },
	container: true,
}))``;

export const StyledGridItem = styled(Grid).attrs(({ md, color }) => ({
	pt: 3,
	item: true,
	md: md,
	xs: 12,
	sx: { background: color, color: Palette.black },
}))``;

export const StyledSpan = styled.span`
	color: ${Palette.orange};
`;

export const StyledFormHead = styled(Typography).attrs(() => ({
	align: 'center',
	variant: 'h4',
	sx: { mt: 5, fontWeight: 700 },
}))``;

export const StyledBackdrop = styled(Backdrop).attrs(() => ({
	sx: {
		color: Palette.orange,
		zIndex: (theme) => theme.zIndex.drawer + 1,
	},
}))``;
