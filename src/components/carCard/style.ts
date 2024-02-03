import { Stack, Typography } from '@mui/material';
import styled from 'styled-components';

import Palette from '@/palette';

export const TypeText = styled.span`
	color: ${Palette.orange};
	font-size: 16px;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	color: ${Palette.greyMiddle};
`;

export const FlexContainer = styled.div`
	display: flex;
	align-items: center;
	font-size: 20px;
	margin-bottom: 12px;
`;

export const LastDiv = styled.div`
	display: flex;
	align-items: center;
	font-size: 20px;
	margin-left: -4px;
`;

export const TypeItem = styled.p`
	margin: 0 15px 0 10px;
	font-size: 16px;
`;

export const Icon = styled.div`
	position: absolute;
	top: 10px;
	right: 10px;
	font-size: 30px;
	color: white;
`;

export const StyledStack = styled(Stack).attrs(() => ({
	alignItems: 'center',
	justifyContent: 'center',
	direction: 'row',
	sx: {
		background: Palette.orange,
		position: 'absolute',
		color: Palette.light,
		p: 0.5,
	},
}))``;

export const MediaStyle = {
	height: '15em',
};

export const StyledTypography = styled(Typography).attrs(() => ({
	gutterBottom: true,
	variant: 'subtitle1',
	sx: { textDecoration: 'none', color: Palette.black },
}))``;
