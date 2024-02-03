import InboxIcon from '@mui/icons-material/Inbox';
import { CircularProgress, Stack, Box, Typography } from '@mui/material';
import styled from 'styled-components';

import Palette from '@/palette';

export const StyledStack = styled(Stack).attrs(() => ({
	spacing: 2,
	sx: { color: 'black', alignItems: 'center', m: 5 },
}))``;

export const StyledCircularProgress = styled(CircularProgress).attrs(() => ({
	sx: {
		m: '30vh 50%',
		color: Palette.orange,
	},
}))``;

export const StyledEmptyBox = styled(Box).attrs(() => ({
	sx: {
		m: '30vh auto',
		fontSize: '90px',
		color: Palette.greyMiddle,
		textAlign: 'center',
	},
}))``;

export const StyledTypography = styled(Typography).attrs(() => ({
	noWrap: true,
	variant: 'h5',
}))``;

export const StyledInboxIcon = styled(InboxIcon).attrs(() => ({
	sx: { fontSize: '90px' },
}))``;
