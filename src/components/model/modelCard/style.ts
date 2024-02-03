import { Delete, Edit } from '@mui/icons-material';
import { Card } from '@mui/material';
import styled from 'styled-components';

import Palette from '@/palette';

export const IconDelete = styled(Delete).attrs(() => ({
	sx: {
		marginLeft: '5px',
		cursor: 'pointer',
		transition: 'all 0.5s',
		'&:hover': { color: Palette.orange },
	},
}))``;

export const IconEdit = styled(Edit).attrs(() => ({
	sx: {
		cursor: 'pointer',
		transition: 'all 0.5s',
		'&:hover': { color: Palette.orange },
	},
}))``;

export const CardComponent = styled(Card).attrs(() => ({
	sx: {
		minWidth: '250px',
		margin: '10px 10px',
	},
}))``;

export const TypeText = styled.span`
	font-size: 18px;
	font-weight: 400;
	color: ${Palette.black};
`;

export const TitleCard = styled.div`
	width: fit-content;
	margin: 0 auto 5px 0;
	color: ${Palette.black};
	font-size: 23px;
	font-weight: 500;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const FlexContainer = styled.div`
	display: flex;
	align-items: center;
	font-size: 25px;
	margin-bottom: 12px;
	:last-child {
		margin-bottom: 5px;
	}
`;

export const TypeItem = styled.p`
	margin: 0 15px 0 0;
	font-size: 14px;
	font-weight: 500;
	color: ${Palette.greyMiddle};
`;

export const LinktoEngiene = styled(TypeItem)`
	margin: 0 0 0 auto;
	font-size: 18px;
	transition: all 0.5s;
	color: ${Palette.orange};
	cursor: pointer;
	:hover {
		color: ${Palette.orangeDark};
	}
`;
