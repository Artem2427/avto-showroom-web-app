import React from 'react';

import {
	DialogContentText,
	DialogActions,
	DialogTitle,
	Dialog,
} from '@mui/material';

import { carService } from '@/services/CarService';
import { PropCarDelete } from '@/type/car';

import { ButtonComponent } from './style';

const DeleteModalWindow: React.FC<PropCarDelete> = ({
	setOpenNotification,
	setOpenDeleteModal,
	setNotification,
	openDeleteModal,
	serverRequest,
	id,
}) => {
	const handleCloseAlert = () => {
		setOpenDeleteModal(false);
	};
	const confirmDeletion = async () => {
		await carService.deleteCar(id);
		serverRequest();
		setOpenDeleteModal(false);
		setNotification((prev) => ({
			...prev,
			severity: 'success',
			text: 'car successfully removed',
		}));
		setOpenNotification(true);
	};

	return (
		<Dialog
			aria-describedby="alert-dialog-description"
			aria-labelledby="alert-dialog-title"
			onClose={handleCloseAlert}
			open={openDeleteModal}
		>
			<DialogTitle id="alert-dialog-title" sx={{ paddingBottom: '0' }}>
				Delete
			</DialogTitle>
			<DialogContentText
				id="alert-dialog-description"
				sx={{ padding: '10px 10px 10px 24px' }}
			>
				Are you sure you want to delete this car?
			</DialogContentText>
			<DialogActions sx={{ justifyContent: 'flex-end' }}>
				<ButtonComponent onClick={handleCloseAlert}>сancel</ButtonComponent>
				<ButtonComponent onClick={confirmDeletion}>delete</ButtonComponent>
			</DialogActions>
		</Dialog>
	);
};

export default DeleteModalWindow;
