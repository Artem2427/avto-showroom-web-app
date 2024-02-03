import styled from 'styled-components';

import Palette from '@/palette';

export const Flex = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 30px auto;
	flex-wrap: wrap;
`;

export const ContainerInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 30px 0 0 auto;
	flex-wrap: wrap;
`;

export const ContainerWhyUs = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const DivAchievements = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 20px;
`;

export const DivFlexColumn = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	align-items: center;
`;

export const Title = styled.h1`
	font-size: 40px;
	margin-bottom: 20px;
	padding: 10px;
	font-weight: 500;
`;

export const MainTitle = styled.h1`
	font-size: 50px;
	margin-top: 30px;
	padding: 10px;
	font-weight: 500;
`;

export const Letter = styled.span`
	color: ${Palette.orange};
`;

export const Text = styled.p`
	max-width: 500px;
	font-size: 18px;
	margin-right: 30px;
	font-weight: 400;
	margin-bottom: 20px;
	padding: 0 20px;
	line-height: 23px;
`;

export const SpanAbout = styled.span`
	display: block;
	width: fit-content;
	font-size: 25px;
	color: #ff6600;
	font-weight: 400;
`;

export const SpanWhyUs = styled(SpanAbout)`
	align-self: flex-start;
	margin-bottom: 20px;
	padding: 0 20px;
`;

export const TextAchievements = styled.p`
	font-size: 18px;
	margin: 5px 0;
	font-weight: 400;
	text-align: center;
`;

export const Img = styled.img`
	width: 140%;
	margin-top: 30px;
	position: relative;
	left: 30%;
`;

export const DivPage = styled.div`
	width: 50%;
	overflow: hidden;
	@media (max-width: 1060px) {
		width: 100%;
	}
`;
