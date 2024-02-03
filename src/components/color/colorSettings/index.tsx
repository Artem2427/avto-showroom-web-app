import React, { useCallback, useEffect, useState } from 'react';

import { Backdrop, CircularProgress, AlertColor } from '@mui/material';

import AlertNotification from '@/components/alert';
import ColorAddModalWindow from '@/components/color/colorAddModalWindow';
import ColorTable from '@/components/color/colorTable';
import { DEFAULT_NOTIFICATION_STATE } from '@/constants';
import Palette from '@/palette';
import { carService } from '@/services/CarService';
import { Colors } from '@/type/color';

import { ButtonComponent } from './style';

const ColorSettings = () => {
	const [openNotification, setOpenNotification] = useState(false);
	const [notification, setNotification] = useState(DEFAULT_NOTIFICATION_STATE);
	const [isLoading, setIsLoading] = useState(true);
	const [colors, setColors] = useState({
		colors: [{ color: '', hex: '', createdAt: '', id: '', actions: '' }],
	});
	const [open, setOpen] = useState(false);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
	};

	const serverRequest = useCallback(() => {
		carService
			.getAllColorsTable(page, rowsPerPage)
			.then(function (value: Colors) {
				setColors(value);
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
			<ButtonComponent onClick={handleOpen}>Add new</ButtonComponent>
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
				<ColorTable
					colors={colors.colors}
					page={page}
					rowsPerPage={rowsPerPage}
					serverRequest={serverRequest}
					setNotification={setNotification}
					setOpenNotification={setOpenNotification}
					setPage={setPage}
					setRowsPerPage={setRowsPerPage}
				/>
			)}
			<ColorAddModalWindow
				handleClose={handleClose}
				open={open}
				serverRequest={serverRequest}
				setNotification={setNotification}
				setOpenNotification={setOpenNotification}
			/>
		</>
	);
};

export default ColorSettings;
