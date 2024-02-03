import { CardActions, Button, Box } from '@mui/material';
import styled from 'styled-components';

import Palette from '@/palette';
import { ImageCard } from '@/type';

export const Container = styled(Box).attrs(() => ({
	sx: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '60%',
		height: 'fit-content',
		maxHeight: '70%',
		bgcolor: 'background.paper',
		boxShadow: 24,
		p: 4,
		overflow: 'auto',
		paddingTop: '15px',
	},
}))``;

export const CardDesktop: ImageCard = {
	width: '48%',
	margin: '5px 0 5px 0',
};

export const CardMobile: ImageCard = {
	width: '100%',
	margin: '5px 0 5px 0',
};

export const ActionsComponent = styled(CardActions).attrs(() => ({
	sx: {
		display: 'flex',
		justifyContent: 'space-around',
		flexWrap: 'wrap',
	},
}))``;

export const ButtonComponent = styled(Button).attrs(() => ({
	sx: {
		color: Palette.greyDark,
		transition: 'all 0.5s',
		'&:hover': {
			color: Palette.orange,
		},
	},
	size: 'small',
}))``;

export const FlexContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	width: 100%;
	@media (max-width: 600px) {
		justify-content: space-between;
	}
`;
