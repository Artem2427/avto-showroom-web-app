import { Delete, Edit } from '@mui/icons-material';
import { Card } from '@mui/material';
import styled from 'styled-components';

import Palette from '@/palette';

export const IconDelete = styled(Delete).attrs(() => ({
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
		marginLeft: '5px',
		marginRight: '10px',
		cursor: 'pointer',
		transition: 'all 0.5s',
		'&:hover': {
			color: Palette.orange,
		},
	},
}))``;

export const CardComponent = styled(Card).attrs(() => ({
	sx: {
		minWidth: '200px',
		margin: '10px 10px',
		'& .MuiCardContent-root:last-child': {
			paddingBottom: '10px',
		},
	},
}))``;

export const TypeText = styled.span`
	color: ${Palette.black};
	font-size: 18px;
	font-weight: 400;
`;

export const TitleCard = styled.div`
	width: fit-content;
	margin: 0 auto 0 0;
	color: ${Palette.black};
	font-size: 20px;
	font-weight: 500;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const FlexContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 25px;
	margin-bottom: 12px;
`;

export const TypeItem = styled.p`
	margin: 0 15px 5px 0;
	font-size: 14px;
	font-weight: 500;
	color: ${Palette.greyMiddle};
`;
