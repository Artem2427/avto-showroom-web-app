import React from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

import { Question } from '@/type';

import { Title, PQuestion, PAnswer, StyledContainer } from './style';

const Faq = () => {
	const question = [
		{
			question: 'When is the best time to buy a car?',
			answer:
				'It is believed that the best time to buy a car is the end of theprevious year and the beginning of the new year. During this period,as a rule, salons reduce transport prices by 10-20%. This is done toincrease sales and make room for new cars.',
			id: 1,
			isHidden: false,
		},
		{
			question: 'Do you have used cars?',
			answer:
				'We only sell new cars from official brands. With license and all accompanying papers. Buying a car from us you can not worry about its quality',
			id: 2,
			isHidden: false,
		},
		{
			question: 'What is included in the price of the car?',
			answer:
				'The purchase procedure includes in the price not only the price for the car, but also the state duty, registration of an insurance policy, the purchase of an additional set of tools, a fire extinguisher, a first aid kit, etc. Such costs can amount to about 15% of the cost of the car.',
			id: 3,
			isHidden: false,
		},
		{
			question: 'Do you have discounts or promotions?',
			answer:
				'We have seasonal discounts for cars of a certain brand. We also have a system of discounts for regular customers and gold card holders. Sometimes the brands themselves provide discounts on their cars.',
			id: 4,
			isHidden: false,
		},
	];

	return (
		<StyledContainer>
			<Title>FAQ</Title>
			{question.map((element: Question, index: number) => (
				<Accordion key={index}>
					<AccordionSummary
						aria-controls="panel1a-content"
						expandIcon={<ExpandMoreIcon />}
						id="panel1a-header"
					>
						<PQuestion>{element.question}</PQuestion>
					</AccordionSummary>
					<AccordionDetails>
						<PAnswer>{element.answer}</PAnswer>
					</AccordionDetails>
				</Accordion>
			))}
		</StyledContainer>
	);
};
export default Faq;
