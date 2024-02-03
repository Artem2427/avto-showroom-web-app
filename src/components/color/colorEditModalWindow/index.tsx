import React, { useState, useEffect } from 'react';

import { Modal } from '@mui/material';

import { lettersRegExp, hexRegExp } from '@/constants/regularExpressions';
import { carService } from '@/services/CarService';
import { PropEditColor } from '@/type/color';

import {
	ButtonComponent,
	ErrorMassage,
	ActionName,
	Container,
	Input,
	Form,
} from './style';

const EditModalWindow: React.FC<PropEditColor> = ({
	setOpenNotification,
	setOpenEditModal,
	setNotification,
	openEditModal,
	serverRequest,
	data,
}) => {
	const [editedColor, setEditedColor] = useState({
		color: '',
		hex: '',
	});

	const [error, setError] = useState({
		color: '',
		hex: '',
	});

	const handleClose = () => {
		setOpenEditModal(false);
	};

	useEffect(() => {
		setEditedColor((prev) => ({ ...prev, color: data.color, hex: data.hex }));
	}, [data]);

	const colorValidate = ({
		target: { value },
	}: React.FocusEvent<HTMLInputElement>) => {
		const isValueValid = lettersRegExp.test(String(value));

		setError((prev) => ({
			...prev,
			color: !value || !isValueValid ? 'incorrect color' : '',
		}));
		setEditedColor((prev) => ({ ...prev, color: value }));
	};

	const hexValidate = ({
		target: { value },
	}: React.FocusEvent<HTMLInputElement>) => {
		const isValueValid = hexRegExp.test(String(value));

		setError((prev) => ({
			...prev,
			hex: !value || !isValueValid ? 'incorrect hex' : '',
		}));
		setEditedColor((prev) => ({ ...prev, hex: value }));
	};

	const chandgeValue = ({
		target: { value, name },
	}: React.ChangeEvent<HTMLInputElement>) => {
		setEditedColor((prev) => ({ ...prev, [name]: value }));
	};

	const editColor = async () => {
		if (error.color === '' && error.hex === '') {
			await carService.editСolor(data.id, editedColor);
			serverRequest();
			handleClose();
			setNotification((prev) => ({
				...prev,
				severity: 'success',
				text: 'color changed successfully',
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
					<ActionName>Edit color</ActionName>
					<ErrorMassage>{error.color && error.color}</ErrorMassage>
					<Input
						label="color name"
						name="color"
						onBlur={colorValidate}
						onChange={chandgeValue}
						type="text"
						value={editedColor.color}
					/>
					<ErrorMassage>{error.hex && error.hex}</ErrorMassage>
					<Input
						label="color hex"
						name="hex"
						onBlur={hexValidate}
						onChange={chandgeValue}
						type="text"
						value={editedColor.hex}
					/>
					<ButtonComponent onClick={editColor}>Edit</ButtonComponent>
				</Form>
			</Container>
		</Modal>
	);
};

export default EditModalWindow;
