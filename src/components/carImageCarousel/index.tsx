import React, { FC, useEffect, useState } from 'react';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import './styles.css';

interface ImgProps {
	mainImage: number;
	images: string[];
}

const CarImageCarousel: FC<ImgProps> = ({ mainImage, images }) => {
	const [displayedImage, setDisplayedImage] = useState(images[mainImage]);

	const handleClick = (index: number) => {
		setDisplayedImage(images[index]);
	};

	useEffect(() => {
		setDisplayedImage(images[mainImage]);
	}, [mainImage, images]);

	return (
		<div
			className="swiper-container"
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start',
			}}
		>
			<img alt="car" src={displayedImage} />

			<Swiper
				className="swiper-js"
				modules={[Navigation, Pagination]}
				navigation
				pagination={{
					clickable: true,
				}}
				slidesPerView={3}
			>
				{images?.map((image, index) => (
					<SwiperSlide className="swiperjs-slide" key={index}>
						<img alt="car" onClick={() => handleClick(index)} src={image} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
export default CarImageCarousel;
