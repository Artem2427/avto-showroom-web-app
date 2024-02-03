import React, { useState, useEffect } from 'react';

import { Modal } from '@mui/material';

import {
	lettersNumbersRegExp,
	positiveNumbersRegExp,
} from '@/constants/regularExpressions';
import { carService } from '@/services/CarService';
import { PropCarEdit } from '@/type/car';

import {
	ButtonComponent,
	ErrorMassage,
	ActionName,
	Container,
	Input,
	Form,
} from './style';

const EditModalWindow: React.FC<PropCarEdit> = ({
	setOpenNotification,
	setOpenEditModal,
	setNotification,
	openEditModal,
	serverRequest,
	data,
}) => {
	const [editedCar, setEditedCar] = useState({
		price: 0,
		currency: '',
		race: 0,
		createYear: '',
		name: '',
		availableCar: 0,
		seats: 0,
	});

	const [error, setError] = useState({
		price: '',
		currency: '',
		race: '',
		createYear: '',
		name: '',
		availableCar: '',
		seats: '',
	});

	const handleClose = () => {
		setOpenEditModal(false);
	};

	useEffect(() => {
		setEditedCar((prev) => ({
			...prev,
			price: data.price,
			currency: data.currency,
			race: data.race,
			createYear: data.createYear,
			name: data.name,
			availableCar: data.availableCar,
			seats: data.seats,
		}));
	}, [data]);

	const textValidate = ({
		target: { value, name },
	}: React.FocusEvent<HTMLInputElement>) => {
		const isValueValid = lettersNumbersRegExp.test(String(value));

		setError((prev) => ({
			...prev,
			[name]:
				!value || !isValueValid ? 'the field is filled with an error' : '',
		}));

		setEditedCar((prev) => ({ ...prev, [name]: value }));
	};

	const numberValidate = ({
		target: { value, name },
	}: React.FocusEvent<HTMLInputElement>) => {
		const isValueValid = positiveNumbersRegExp.test(String(value));

		setError((prev) => ({
			...prev,
			[name]:
				!value || !isValueValid ? 'the field is filled with an error' : '',
		}));

		setEditedCar((prev) => ({ ...prev, [name]: Number(value) }));
	};

	const chandgeValue = ({
		target: { value, name },
	}: React.ChangeEvent<HTMLInputElement>) => {
		setEditedCar((prev) => ({ ...prev, [name]: value }));
	};

	const editCar = async () => {
		if (
			error.price === '' &&
			error.currency === '' &&
			error.race === '' &&
			error.name === '' &&
			error.availableCar === '' &&
			error.seats === ''
		) {
			await carService.editCar(data.id, editedCar);
			serverRequest();
			handleClose();
			setNotification((prev) => ({
				...prev,
				severity: 'success',
				text: 'car successfully changed',
			}));
			setOpenNotification(true);
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
					<ActionName>Edit car</ActionName>
					<ErrorMassage>{error.name && error.name}</ErrorMassage>
					<Input
						label="name"
						name="name"
						onBlur={textValidate}
						onChange={chandgeValue}
						type="text"
						value={editedCar.name}
					/>
					<ErrorMassage>
						{error.availableCar && error.availableCar}
					</ErrorMassage>
					<Input
						label="available car"
						name="availableCar"
						onBlur={numberValidate}
						onChange={chandgeValue}
						type="text"
						value={editedCar.availableCar}
					/>
					<ErrorMassage>{error.price && error.price}</ErrorMassage>
					<Input
						label="price"
						name="price"
						onBlur={numberValidate}
						onChange={chandgeValue}
						type="text"
						value={editedCar.price}
					/>
					<ErrorMassage>{error.race && error.race}</ErrorMassage>
					<Input
						label="race"
						name="race"
						onBlur={numberValidate}
						onChange={chandgeValue}
						type="text"
						value={editedCar.race}
					/>
					<ErrorMassage>{error.seats && error.seats}</ErrorMassage>
					<Input
						label="seats"
						name="seats"
						onBlur={numberValidate}
						onChange={chandgeValue}
						type="text"
						value={editedCar.seats}
					/>
					<ButtonComponent color="inherit" onClick={editCar}>
						Edit
					</ButtonComponent>
				</Form>
			</Container>
		</Modal>
	);
};

export default EditModalWindow;
