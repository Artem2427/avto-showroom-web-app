import React, { useState, useCallback, useEffect } from 'react';

import { Backdrop, CircularProgress, AlertColor } from '@mui/material';

import AlertNotification from '@/components/alert';
import BrandModalWindow from '@/components/brand/brandAddModalWindow';
import BrandTable from '@/components/brand/brandTable';
import { DEFAULT_NOTIFICATION_STATE } from '@/constants';
import Palette from '@/palette';
import { carService } from '@/services/CarService';
import { Brands } from '@/type/brand';

import { ButtonComponent } from './style';

const BrandSettings = () => {
	const [openNotification, setOpenNotification] = useState(false);
	const [notification, setNotification] = useState(DEFAULT_NOTIFICATION_STATE);
	const [isLoading, setIsLoading] = useState(true);
	const [brands, setBrands] = useState({
		brands: [
			{ name: '', phone: '', createdAt: '', id: '', actions: '', logo: '' },
		],
	});
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
	};

	const serverRequest = useCallback(() => {
		carService
			.getAllBrandsTable(page, rowsPerPage)
			.then(function (value: Brands) {
				setBrands(value);
				setIsLoading(false);
			});
	}, [page, rowsPerPage]);

	useEffect(() => {
		serverRequest();
	}, [serverRequest]);

	return (
		<>
			<AlertNotification
				alert={notification.text}
				openAlert={openNotification}
				setOpenAlert={setOpenNotification}
				severity={notification.severity as AlertColor}
			/>
			<ButtonComponent color="inherit" onClick={handleOpen}>
				Add new
			</ButtonComponent>
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
				<BrandTable
					brands={brands.brands}
					page={page}
					rowsPerPage={rowsPerPage}
					serverRequest={serverRequest}
					setNotification={setNotification}
					setOpenNotification={setOpenNotification}
					setPage={setPage}
					setRowsPerPage={setRowsPerPage}
				/>
			)}
			<BrandModalWindow
				handleClose={handleClose}
				open={open}
				serverRequest={serverRequest}
				setNotification={setNotification}
				setOpenNotification={setOpenNotification}
			/>
		</>
	);
};

export default BrandSettings;
