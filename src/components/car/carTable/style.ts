import { Clear, Edit, CameraAlt, MobiledataOff } from '@mui/icons-material';
import { TableCell } from '@mui/material';
import styled from 'styled-components';

import Palette from '@/palette';

export const Td = styled(TableCell).attrs(() => ({
	sx: {
		textAlign: 'left',
	},
}))``;

export const ActionCell = styled(Td).attrs(() => ({
	sx: {
		width: '12%',
		textAlign: 'center',
	},
}))``;

export const IconFlex = styled.div`
	display: flex;
	justify-content: space-around;
`;

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
		cursor: 'pointer',
		transition: 'all 0.5s',
		'&:hover': {
			color: Palette.orange,
		},
	},
}))``;

export const IconCamera = styled(CameraAlt).attrs(() => ({
	sx: {
		cursor: 'pointer',
		transition: 'all 0.5s',
		'&:hover': {
			color: Palette.orange,
		},
	},
}))``;

export const IconSorting = styled(MobiledataOff).attrs(() => ({
	sx: {
		cursor: 'pointer',
		transition: 'all 0.5s',
		'&:hover': {
			color: Palette.orange,
		},
	},
}))``;

export const FlexContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
`;
