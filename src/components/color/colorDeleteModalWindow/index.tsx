import React from 'react';

import {
	DialogContentText,
	DialogActions,
	DialogTitle,
	Dialog,
} from '@mui/material';

import { carService } from '@/services/CarService';
import { PropColorDelete } from '@/type/color';

import { ButtonComponent } from './style';

const DeleteModalWindow: React.FC<PropColorDelete> = ({
	setOpenNotification,
	setOpenDeleteModal,
	setNotification,
	openDeleteModal,
	id,
	serverRequest,
}) => {
	const handleCloseAlert = () => {
		setOpenDeleteModal(false);
	};

	const confirmDeletion = async () => {
		await carService.deleteСolor(id);
		serverRequest();
		setOpenDeleteModal(false);
		setNotification((prev) => ({
			...prev,
			severity: 'success',
			text: 'color removed successfully',
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
				Are you sure you want to delete this color?
			</DialogContentText>
			<DialogActions sx={{ justifyContent: 'flex-end' }}>
				<ButtonComponent onClick={handleCloseAlert}>сancel</ButtonComponent>
				<ButtonComponent onClick={confirmDeletion}>delete</ButtonComponent>
			</DialogActions>
		</Dialog>
	);
};

export default DeleteModalWindow;
