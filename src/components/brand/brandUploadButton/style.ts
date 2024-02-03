import PhotoCamera from '@mui/icons-material/PhotoCamera';
import styled from 'styled-components';

import Palette from '@/palette';

export const IconCamera = styled(PhotoCamera).attrs(() => ({
	sx: {
		marginLeft: '10px',
		cursor: 'pointer',
		color: Palette.greyDark,
		transition: 'all 0.5s',
		'&:hover': {
			color: Palette.orange,
		},
	},
	fontSize: 'large',
}))``;
