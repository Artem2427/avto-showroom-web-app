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

const DriveSettings = () => {
	const [newDriveType, setNewDriveType] = useState({
		typeOfDrive: '',
	});

	const [error, setError] = useState({
		typeOfDrive: '',
	});

	const driveValidate = ({
		target: { value },
	}: React.FocusEvent<HTMLInputElement>) => {
		const isValueValid = lettersRegExp.test(String(value));

		setError((prev) => ({
			...prev,
			typeOfDrive: !value || !isValueValid ? 'incorrect type of drive' : '',
		}));
		setNewDriveType(
			isValueValid
				? (prev) => ({ ...prev, typeOfDrive: value })
				: (prev) => ({ ...prev, typeOfDrive: '' })
		);
	};

	return (
		<>
			<Title>Drive settings</Title>
			<Form>
				<ActionName>Add type of drive to database</ActionName>
				<ErrorMassage>{error.typeOfDrive && error.typeOfDrive}</ErrorMassage>
				<TextField
					label="type of drive"
					onBlur={driveValidate}
					sx={InputStyle}
					type="text"
					variant="standard"
				/>
				<Button
					color="inherit"
					onClick={async () => await carService.addDriveType(newDriveType)}
					sx={ButtonStyle}
					variant="contained"
				>
					Add type of drive
				</Button>
			</Form>
		</>
	);
};

export default DriveSettings;
