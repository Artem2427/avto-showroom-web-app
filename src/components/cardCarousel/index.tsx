import React, { useEffect, useState } from 'react';

import { Container } from '@mui/material';
import { FreeMode, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import './styles.css';
import { catalogService } from '@/services/CatalogService';
import { CarType, Dir, Ordering } from '@/type';

import CardCar from '../carCard';

const CardCarousel = () => {
	const screenWidth: number = window.screen.width;
	const [cars, setCars] = useState<CarType[]>([]);
	const paginationRequest = {
		page: 1,
		pageSize: 10,
		searchTerm: '',
		dir: Dir.ascend,
		ordering: Ordering.createdAt,
	};

	const calculationNumberOfCards = () => {
		if (screenWidth > 2000) {
			return 6;
		} else if (screenWidth > 1400) {
			return 5;
		} else if (screenWidth > 1000) {
			return 4;
		} else if (screenWidth > 800) {
			return 3;
		} else if (screenWidth > 450) {
			return 2;
		} else if (screenWidth < 400) {
			return 1;
		}
	};

	useEffect(() => {
		catalogService.paginate(paginationRequest, []).then((response) => {
			setCars(response.cars && response.cars);
		});
		// eslint-disable-next-line
	}, [catalogService.paginate]);

	return (
		<Container maxWidth="xl">
			<h2 className="cardCarousel__title">Car park</h2>
			<Swiper
				freeMode={true}
				modules={[FreeMode, Pagination, Navigation]}
				navigation
				pagination={{
					clickable: true,
				}}
				slidesPerView={calculationNumberOfCards()}
				spaceBetween={10}
			>
				{cars.map((car, index) => (
					<SwiperSlide key={index}>
						<CardCar car={car} />
					</SwiperSlide>
				))}
			</Swiper>
		</Container>
	);
};
export default CardCarousel;
