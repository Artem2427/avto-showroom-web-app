import React, { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { lettersRegExp } from '@/constants/regularExpressions';
import { carService } from '@/services/CarService';

import {
	Title,
	Form,
	ActionName,
	InputStyle,
	ButtonStyle,
	ErrorMassage,
} from './style';

const BodyTypeSettings = () => {
	const [newBodyType, setNewBodyType] = useState({
		body: '',
		icon: '',
	});

	const [error, setError] = useState({
		body: '',
		icon: '',
	});

	const bodyTypeValidate = ({
		target: { value },
	}: React.FocusEvent<HTMLInputElement>) => {
		const isValueValid = lettersRegExp.test(String(value));

		setError((prev) => ({
			...prev,
			body: !value || !isValueValid ? 'incorrect body type' : '',
		}));
		setNewBodyType(
			isValueValid
				? (prev) => ({ ...prev, body: value })
				: (prev) => ({ ...prev, body: '' })
		);
	};

	const iconValidate = ({
		target: { value },
	}: React.FocusEvent<HTMLInputElement>) => {
		const isValueValid = lettersRegExp.test(String(value));

		setError((prev) => ({
			...prev,
			icon: !value || !isValueValid ? 'incorrect icon' : '',
		}));
		setNewBodyType(
			isValueValid
				? (prev) => ({ ...prev, icon: value })
				: (prev) => ({ ...prev, icon: '' })
		);
	};

	return (
		<>
			<Title>Body type settings</Title>
			<Form>
				<ActionName>Add body type to database</ActionName>
				<ErrorMassage>{error.body && error.body}</ErrorMassage>
				<TextField
					label="body type"
					onBlur={bodyTypeValidate}
					sx={InputStyle}
					type="text"
					variant="standard"
				/>
				<ErrorMassage>{error.icon && error.icon}</ErrorMassage>
				<TextField
					label="body icon"
					onBlur={iconValidate}
					sx={InputStyle}
					type="text"
					variant="standard"
				/>
				<Button
					color="inherit"
					onClick={async () => await carService.addBodyType(newBodyType)}
					sx={ButtonStyle}
					variant="contained"
				>
					Add body type
				</Button>
			</Form>
		</>
	);
};

export default BodyTypeSettings;
