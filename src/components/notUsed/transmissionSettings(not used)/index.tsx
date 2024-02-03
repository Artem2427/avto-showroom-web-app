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

const TransmissionSettings = () => {
	const [newTransmissionType, setNewTransmissionType] = useState({
		transmission: '',
	});

	const [error, setError] = useState({
		transmission: '',
	});

	const transmissionValidate = ({
		target: { value },
	}: React.FocusEvent<HTMLInputElement>) => {
		const isValueValid = lettersRegExp.test(String(value));

		setError((prev) => ({
			...prev,
			transmission: !value || !isValueValid ? 'incorrect type of drive' : '',
		}));
		setNewTransmissionType(
			isValueValid
				? (prev) => ({ ...prev, transmission: value })
				: (prev) => ({ ...prev, transmission: '' })
		);
	};

	return (
		<>
			<Title>Transmission settings</Title>
			<Form>
				<ActionName>Add type of transmission to database</ActionName>
				<ErrorMassage>{error.transmission && error.transmission}</ErrorMassage>
				<TextField
					label="type of transmission"
					onBlur={transmissionValidate}
					sx={InputStyle}
					type="text"
					variant="standard"
				/>
				<Button
					color="inherit"
					onClick={async () =>
						await carService.addTransmissionType(newTransmissionType)
					}
					sx={ButtonStyle}
					variant="contained"
				>
					Add type of transmission
				</Button>
			</Form>
		</>
	);
};

export default TransmissionSettings;
