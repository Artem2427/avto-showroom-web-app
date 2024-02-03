import React, { useState, useEffect } from 'react';

import { Modal } from '@mui/material';

import { lettersNumbersRegExp } from '@/constants/regularExpressions';
import { carService } from '@/services/CarService';
import { PropEditModel } from '@/type/model';

import {
	ButtonComponent,
	ErrorMassage,
	ActionName,
	Container,
	Input,
	Form,
} from './style';

const EditModalWindow: React.FC<PropEditModel> = ({
	setOpenEditModal,
	openEditModal,
	serverRequest,
	name,
	id,
}) => {
	const [editedModel, setEditedModel] = useState({
		name: '',
	});
	const [error, setError] = useState({
		color: '',
		hex: '',
	});

	const handleClose = () => {
		setOpenEditModal(false);
	};

	useEffect(() => {
		setEditedModel({ name: name });
	}, [name]);

	const nameValidate = ({
		target: { value },
	}: React.FocusEvent<HTMLInputElement>) => {
		const isValueValid = lettersNumbersRegExp.test(String(value));

		setError((prev) => ({
			...prev,
			color: !value || !isValueValid ? 'incorrect name' : '',
		}));
		setEditedModel((prev) => ({ ...prev, name: value }));
	};

	const chandgeValue = ({
		target: { value },
	}: React.ChangeEvent<HTMLInputElement>) => {
		setEditedModel((prev) => ({ ...prev, name: value }));
	};

	const editModel = async () => {
		if (error.color === '' && error.hex === '') {
			await carService.editModel(id, editedModel);
			serverRequest();
			handleClose();
			setEditedModel({ name: '' });
		}
	};

	return (
		<Modal
			aria-describedby="modal-modal-description"
			aria-labelledby="modal-modal-title"
			onClose={handleClose}
			open={openEditModal}
		>
			<Container>
				<Form>
					<ActionName>Edit model</ActionName>
					<ErrorMassage>{error.color && error.color}</ErrorMassage>
					<Input
						label="name"
						name="name"
						onBlur={nameValidate}
						onChange={chandgeValue}
						type="text"
						value={editedModel.name}
					/>
					<ErrorMassage>{error.hex && error.hex}</ErrorMassage>
					<ButtonComponent onClick={editModel}>Edit</ButtonComponent>
				</Form>
			</Container>
		</Modal>
	);
};

export default EditModalWindow;
