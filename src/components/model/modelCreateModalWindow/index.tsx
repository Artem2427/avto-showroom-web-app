import React, { useState } from 'react';

import { Modal } from '@mui/material';

import { lettersRegExp } from '@/constants/regularExpressions';
import { carService } from '@/services/CarService';
import { PropCreateModel } from '@/type/model';

import {
	ButtonComponent,
	ErrorMassage,
	ActionName,
	Container,
	Input,
	Form,
} from './style';

const CreateModelModalWindow: React.FC<PropCreateModel> = ({
	setOpenCreateModal,
	openCreateModal,
	serverRequest,
	id,
}) => {
	const [newModel, setNewModel] = useState({
		name: '',
	});
	const [error, setError] = useState({
		name: '',
	});

	const nameValidate = ({
		target: { value },
	}: React.FocusEvent<HTMLInputElement>) => {
		const isValueValid = lettersRegExp.test(String(value));

		setError((prev) => ({
			...prev,
			color: !value || !isValueValid ? 'incorrect model' : '',
		}));
		setNewModel((prev) => ({ ...prev, name: value }));
	};

	const chandgeName = ({
		target: { value },
	}: React.ChangeEvent<HTMLInputElement>) => {
		setNewModel((prev) => ({ ...prev, name: value }));
	};

	const handleClose = () => {
		setOpenCreateModal(false);
	};

	const addModel = async () => {
		if (error.name === '') {
			await carService.addModel(id, newModel);
			serverRequest();
			handleClose();
			setNewModel({ name: '' });
		}
	};

	return (
		<Modal
			aria-describedby="modal-modal-description"
			aria-labelledby="modal-modal-title"
			onClose={handleClose}
			open={openCreateModal}
		>
			<Container>
				<Form>
					<ActionName>Create model</ActionName>
					<ErrorMassage>{error.name && error.name}</ErrorMassage>
					<Input
						label="model name"
						name="model"
						onBlur={nameValidate}
						onChange={chandgeName}
						type="text"
						value={newModel.name}
					/>
					<ButtonComponent onClick={addModel}>Create</ButtonComponent>
				</Form>
			</Container>
		</Modal>
	);
};

export default CreateModelModalWindow;
