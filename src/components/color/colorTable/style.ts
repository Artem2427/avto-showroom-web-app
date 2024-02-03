import { Clear, Edit } from '@mui/icons-material';
import { TableCell } from '@mui/material';
import styled from 'styled-components';

import Palette from '@/palette';

export const Th = styled(TableCell).attrs(() => ({
	sx: {
		textAlign: 'left',
	},
}))``;

export const ActionCell = styled(TableCell).attrs(() => ({
	sx: {
		width: '15%',
		textAlign: 'center',
	},
}))``;

export const IconDelete = styled(Clear).attrs(() => ({
	sx: {
		cursor: 'pointer',
		transition: 'all 0.5s',
		'&:hover': {
			color: Palette.orange,
		},
	},
}))``;

export const IconEdit = styled(Edit).attrs(() => ({
	sx: {
		marginRight: '10px',
		cursor: 'pointer',
		transition: 'all 0.5s',
		'&:hover': {
			color: Palette.orange,
		},
	},
}))``;
