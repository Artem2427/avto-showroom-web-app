import React from 'react';

import AboutUs from '../../components/aboutUs';
import CardCarousel from '../../components/cardCarousel';
import Faq from '../../components/faq';
import ImgCarousel from '../../components/imgCarousel';

const Home = () => {
	return (
		<>
			<ImgCarousel />
			<AboutUs />
			<CardCarousel />
			<Faq />
		</>
	);
};
export default Home;
