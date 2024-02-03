import React, { useCallback, useEffect, useState } from 'react';

import { CircularProgress, Container } from '@mui/material';
import { useParams } from 'react-router-dom';

import FeedbackForm from '@/components/feedbackForm';
import MainCarInfo from '@/components/mainCarInfo';
import Palette from '@/palette';
import { catalogService } from '@/services/CatalogService';
import { CarType } from '@/type';

import {
	StyledFormHead,
	StyledGrid,
	StyledGridItem,
	StyledSpan,
	StyledBackdrop,
} from './style';

const CarArticle = () => {
	const { carId } = useParams();
	const [car, setCar] = useState<CarType | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const fetchImages = useCallback(async () => {
		if (carId)
			await catalogService.getCar(carId).then((response) => {
				setCar(response);
				setIsLoading(false);
			});
	}, [carId]);

	useEffect(() => {
		setIsLoading(true);
		fetchImages();
	}, [fetchImages]);

	return (
		<>
			<StyledBackdrop open={isLoading}>
				<CircularProgress />
			</StyledBackdrop>
			<StyledGrid>
				<StyledGridItem color={Palette.backgroundColor} md={6}>
					<Container maxWidth="xl">
						<MainCarInfo car={car} />
					</Container>
				</StyledGridItem>
				<StyledGridItem color={Palette.light} md={6}>
					<Container maxWidth="xl">
						<StyledFormHead>
							<StyledSpan>FILL </StyledSpan>IN YOUR DETAILS
						</StyledFormHead>
						<FeedbackForm />
					</Container>
				</StyledGridItem>
			</StyledGrid>
		</>
	);
};

export default CarArticle;
