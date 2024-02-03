import React from 'react';

import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { MobileStepper, Button, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
	{
		label: 'San Francisco – Oakland Bay Bridge, United States',
		imgPath:
			'https://images.pexels.com/photos/10054669/pexels-photo-10054669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		label: 'Bird',
		imgPath:
			'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		label: 'Bali, Indonesia',
		imgPath:
			'https://images.pexels.com/photos/12658204/pexels-photo-12658204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		label: 'Goč, Serbia',
		imgPath:
			'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
];

const ImgCarousel = () => {
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = images.length;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStepChange = (step: number) => {
		setActiveStep(step);
	};

	return (
		<Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
			<AutoPlaySwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				enableMouseEvents
				index={activeStep}
				onChangeIndex={handleStepChange}
			>
				{images.map((step, index) => (
					<div key={step.label}>
						{Math.abs(activeStep - index) <= 2 ? (
							<Box
								alt={step.label}
								component="img"
								src={step.imgPath}
								sx={{
									height: '50%',
									display: 'block',
									maxWidth: '100%',
									overflow: 'hidden',
									width: '100%',
								}}
							/>
						) : null}
					</div>
				))}
			</AutoPlaySwipeableViews>
			<MobileStepper
				activeStep={activeStep}
				backButton={
					<Button
						color="inherit"
						disabled={activeStep === 0}
						onClick={handleBack}
						size="large"
					>
						{theme.direction === 'rtl' ? (
							<KeyboardArrowRight />
						) : (
							<KeyboardArrowLeft />
						)}
						Back
					</Button>
				}
				nextButton={
					<Button
						color="inherit"
						disabled={activeStep === maxSteps - 1}
						onClick={handleNext}
						size="small"
					>
						Next
						{theme.direction === 'rtl' ? (
							<KeyboardArrowLeft />
						) : (
							<KeyboardArrowRight />
						)}
					</Button>
				}
				position="static"
				steps={maxSteps}
				style={{ background: '#ECECEC' }}
			/>
		</Box>
	);
};

export default ImgCarousel;
