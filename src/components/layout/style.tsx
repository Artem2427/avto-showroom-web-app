import { Backdrop } from '@mui/material';
import styled from 'styled-components';

import Palette from '@/palette';

export const Wrapper = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const StyledBackdrop = styled(Backdrop).attrs(() => ({
	sx: {
		color: Palette.orange,
		zIndex: (theme) => theme.zIndex.drawer + 1,
	},
}))``;
