import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';

import Palette from '@/palette';

export const ButtonComponent = styled(Button).attrs(() => ({
	sx: {
		height: '30px',
		marginBottom: '10px',
		background: Palette.orange,
		transition: 'all 0.5s',
		'&:hover': {
			backgroundColor: Palette.orangeDark,
		},
	},
	component: 'label',
	variant: 'contained',
}))``;

export const StackContainer = styled(Stack).attrs(() => ({
	sx: {
		justifyContent: 'flex-end',
	},
	alignItems: 'center',
	direction: 'row',
}))``;
