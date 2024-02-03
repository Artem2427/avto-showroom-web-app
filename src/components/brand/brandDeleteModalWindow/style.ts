import { Button } from '@mui/material';
import styled from 'styled-components';

import Palette from '@/palette';

export const ButtonComponent = styled(Button).attrs(() => ({
	sx: {
		color: Palette.orange,
		transition: 'all 0.5s',
		'&:hover': {
			color: Palette.orangeDark,
			background: '0',
		},
	},
}))``;
