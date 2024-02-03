import React, { useState } from 'react';

import { Modal } from '@mui/material';

import { lettersRegExp, hexRegExp } from '@/constants/regularExpressions';
import { carService } from '@/services/CarService';
import { PropAddColorModal } from '@/type/color';

import {
	ButtonComponent,
	ErrorMassage,
	ActionName,
	Container,
	Input,
	Form,
} from './style';

const ColorModalWindow: React.FC<PropAddColorModal> = ({
	setOpenNotification,
	setNotification,
	serverRequest,
	handleClose,
	open,
}) => {
	const [newColor, setNewColor] = useState({
		color: '',
		hex: '',
	});

	const [error, setError] = useState({
		color: '',
		hex: '',
	});

	const colorValidate = ({
		target: { value },
	}: React.FocusEvent<HTMLInputElement>) => {
		const isValueValid = lettersRegExp.test(String(value));

		setError((prev) => ({
			...prev,
			color: !value || !isValueValid ? 'incorrect color' : '',
		}));
		setNewColor((prev) => ({ ...prev, color: value }));
	};

	const hexValidate = ({
		target: { value },
	}: React.FocusEvent<HTMLInputElement>) => {
		const isValueValid = hexRegExp.test(String(value));

		setError((prev) => ({
			...prev,
			hex: !value || !isValueValid ? 'incorrect hex' : '',
		}));
		setNewColor((prev) => ({ ...prev, hex: value }));
	};

	const chandgeValue = ({
		target: { value, name },
	}: React.ChangeEvent<HTMLInputElement>) => {
		setNewColor((prev) => ({ ...prev, [name]: value }));
	};

	const addNewColor = async () => {
		if (error.color === '' && error.hex === '') {
			await carService.addColor(newColor);
			serverRequest();
			handleClose();
		}
		setNewColor((prev) => ({ ...prev, color: '', hex: '' }));
		setNotification((prev) => ({
			...prev,
			severity: 'success',
			text: 'color added successfully',
		}));
		setOpenNotification(true);
	};

	return (
		<Modal
			aria-describedby="modal-modal-description"
			aria-labelledby="modal-modal-title"
			onClose={handleClose}
			open={open}
		>
			<Container>
				<Form>
					<ActionName>Add color to database</ActionName>
					<ErrorMassage>{error.color && error.color}</ErrorMassage>
					<Input
						label="color name"
						name="color"
						onBlur={colorValidate}
						onChange={chandgeValue}
						type="text"
						value={newColor.color}
					/>
					<ErrorMassage>{error.hex && error.hex}</ErrorMassage>
					<Input
						label="color hex"
						name="hex"
						onBlur={hexValidate}
						onChange={chandgeValue}
						type="text"
						value={newColor.hex}
					/>
					<ButtonComponent onClick={addNewColor}>Add</ButtonComponent>
				</Form>
			</Container>
		</Modal>
	);
};

export default ColorModalWindow;
