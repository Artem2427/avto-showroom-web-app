import React from 'react';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import ScrollToTop from './components/scrollToTop';
import Router from './router';
import store from './store/index';

const App: React.FC = () => {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<Provider store={store}>
				<BrowserRouter>
					<ScrollToTop />
					<Router />
				</BrowserRouter>
			</Provider>
		</LocalizationProvider>
	);
};

export default App;
