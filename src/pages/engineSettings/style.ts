import { Add } from '@mui/icons-material';
import styled from 'styled-components';

import Palette from '@/palette';

export const IconAdd = styled(Add).attrs(() => ({
	sx: {
		fontSize: '100px',
		transition: 'all 0.5s',
		color: Palette.greyMiddle,
		cursor: 'pointer',
		'&:hover': { color: Palette.orange },
	},
}))``;

export const Title = styled.h1`
	width: fit-content;
	margin: 20px auto;
	color: #131313;
	font-size: 35px;
	font-weight: 500;
	color: #ff6600;
	@media (max-width: 768px) {
		font-size: 32px;
	}
`;

export const FlexContainer = styled.div`
	display: flex;
	align-items: center;
	width: 90%;
	margin: 20px auto;
	flex-wrap: wrap;
`;
