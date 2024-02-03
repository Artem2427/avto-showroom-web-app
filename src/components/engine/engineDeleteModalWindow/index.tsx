import React from 'react';

import {
	DialogContentText,
	DialogActions,
	DialogTitle,
	Dialog,
} from '@mui/material';

import { carService } from '@/services/CarService';
import { PropEngineDelete } from '@/type/engine';

import { ButtonComponent } from './style';

const DeleteModalWindow: React.FC<PropEngineDelete> = ({
	setOpenDeleteModal,
	openDeleteModal,
	serverRequest,
	id,
}) => {
	const handleCloseAlert = () => {
		setOpenDeleteModal(false);
	};

	const confirmDeletion = async () => {
		await carService.deleteEngine(id);
		serverRequest();
		setOpenDeleteModal(false);
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
				Are you sure you want to delete this engine?
			</DialogContentText>
			<DialogActions sx={{ justifyContent: 'flex-end' }}>
				<ButtonComponent onClick={handleCloseAlert}>сancel</ButtonComponent>
				<ButtonComponent onClick={confirmDeletion}>delete</ButtonComponent>
			</DialogActions>
		</Dialog>
	);
};

export default DeleteModalWindow;
