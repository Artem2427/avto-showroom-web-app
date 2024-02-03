import React from 'react';

import {
	TextAchievements,
	DivAchievements,
	ContainerWhyUs,
	DivFlexColumn,
	ContainerInfo,
	MainTitle,
	Container,
	SpanAbout,
	SpanWhyUs,
	DivPage,
	Letter,
	Title,
	Flex,
	Img,
	Text,
} from './style';

const AboutUs = () => {
	return (
		<>
			<Flex>
				<MainTitle>
					<Letter>S</Letter>peed <Letter>M</Letter>otors
				</MainTitle>
				<ContainerInfo>
					<Text>
						A Ukrainian, dynamically developing company that meets the trends
						and keeps pace with the times is developing in the international
						market. Today we are one of the three largest Ukrainian companies
						selling cars.
					</Text>
					<Text>
						Executive and economy class, the middle price segment and the
						current equipment of all cars - your choice will certainly be
						optimal! Buying a car from us is as easy as two times two.
					</Text>
					<DivAchievements>
						<DivFlexColumn>
							<SpanAbout>11</SpanAbout>
							<TextAchievements>years of work</TextAchievements>
						</DivFlexColumn>
						<DivFlexColumn>
							<SpanAbout>568</SpanAbout>
							<TextAchievements>happy clients</TextAchievements>
						</DivFlexColumn>
						<DivFlexColumn>
							<SpanAbout>112+</SpanAbout>
							<TextAchievements>car in stock</TextAchievements>
						</DivFlexColumn>
						<DivFlexColumn>
							<SpanAbout>24</SpanAbout>
							<TextAchievements>valuable employee</TextAchievements>
						</DivFlexColumn>
					</DivAchievements>
				</ContainerInfo>
			</Flex>
			<Container>
				<ContainerWhyUs>
					<Title>Why us?</Title>
					<DivFlexColumn>
						<div>
							<SpanWhyUs>Support at all stages</SpanWhyUs>
							<Text>
								We will help with the choice of a car, its purchase and the
								enjoyment of travel. 24/7 support line
							</Text>
						</div>
						<div>
							<SpanWhyUs>Reliable cars</SpanWhyUs>
							<Text>
								Our cars have all the certificates and go through multi-stage
								checks to make sure they are in good working order.
							</Text>
						</div>
						<div>
							<SpanWhyUs>Best price guarantee</SpanWhyUs>
							<Text>
								We sell cars at an attractive price. Most often the price is
								below the market average.
							</Text>
						</div>
					</DivFlexColumn>
				</ContainerWhyUs>
				<DivPage>
					<Img alt="car" src="/img/car.png" />
				</DivPage>
			</Container>
		</>
	);
};

export default AboutUs;
