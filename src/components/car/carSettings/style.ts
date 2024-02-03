import { Button } from '@mui/material';
import styled from 'styled-components';

import Palette from '@/palette';

export const ButtonComponent = styled(Button).attrs(() => ({
	sx: {
		height: '30px',
		minWidth: '105px',
		background: Palette.orange,
		transition: 'all 0.5s',
		'&:hover': {
			backgroundColor: Palette.orangeDark,
		},
	},
	component: 'label',
	variant: 'contained',
}))``;

export const Flex = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin: 5px 0 10px 0;
	align-items: flex-end;
`;
