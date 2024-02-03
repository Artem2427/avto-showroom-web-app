import React, { useState, useCallback, useEffect } from 'react';

import { Backdrop, CircularProgress, AlertColor } from '@mui/material';

import AlertNotification from '@/components/alert';
import CarTable from '@/components/car/carTable';
import { DEFAULT_NOTIFICATION_STATE } from '@/constants';
import Palette from '@/palette';
import { carService } from '@/services/CarService';

import CarAddModalWindow from '../carAddModalWindow';
import SearchInput from '../carSearchInput';

import { ButtonComponent, Flex } from './style';

const CarSettings = () => {
	const [openNotification, setOpenNotification] = useState(false);
	const [notification, setNotification] = useState(DEFAULT_NOTIFICATION_STATE);
	const [isLoading, setIsLoading] = useState(true);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [searchTerm, setSearchTerm] = useState('');
	const [sortingTerm, setSortingTerm] = useState('');
	const [direction, setDirection] = useState('descend');
	const [isDescend, setIsDescend] = useState(true);
	const [cars, setCars] = useState([
		{
			name: '',
			createYear: '',
			model: '',
			body: '',
			color: '',
			transmission: '',
			availableCar: '',
			actions: '',
			id: '',
			price: '',
			currency: '',
			race: '',
			seats: '',
		},
	]);

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
	};

	const serverRequest = useCallback(async () => {
		await carService
			.getAllCars(page, rowsPerPage, searchTerm, sortingTerm, direction)
			.then(function (value: any) {
				setCars(value.cars);
				setIsLoading(false);
			});
	}, [page, rowsPerPage, searchTerm, sortingTerm, direction]);

	useEffect(() => {
		serverRequest();
	}, [serverRequest]);

	useEffect(() => {
		setDirection(isDescend ? 'descend' : 'ascend');
	}, [isDescend]);

	return (
		<>
			<Flex>
				<AlertNotification
					alert={notification.text}
					openAlert={openNotification}
					setOpenAlert={setOpenNotification}
					severity={notification.severity as AlertColor}
				/>
				<ButtonComponent onClick={handleOpen}>Add new</ButtonComponent>
				<SearchInput setSearchTerm={setSearchTerm} value={searchTerm} />
			</Flex>
			{isLoading ? (
				<Backdrop
					open={true}
					sx={{
						color: Palette.orange,
						zIndex: (theme) => theme.zIndex.drawer + 1,
					}}
				>
					<CircularProgress color="inherit" />
				</Backdrop>
			) : (
				<CarTable
					cars={cars}
					isDescend={isDescend}
					page={page}
					rowsPerPage={rowsPerPage}
					serverRequest={serverRequest}
					setIsDescend={setIsDescend}
					setNotification={setNotification}
					setOpenNotification={setOpenNotification}
					setPage={setPage}
					setRowsPerPage={setRowsPerPage}
					setSortingTerm={setSortingTerm}
				/>
			)}
			<CarAddModalWindow
				handleClose={handleClose}
				open={open}
				serverRequest={serverRequest}
				setNotification={setNotification}
				setOpenNotification={setOpenNotification}
			/>
		</>
	);
};

export default CarSettings;
