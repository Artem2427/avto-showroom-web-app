import React, { useState, useEffect, useCallback } from 'react';

import { InputLabel, MenuItem, Select, Modal } from '@mui/material';

import {
	lettersNumbersRegExp,
	numbersDotsRegExp,
} from '@/constants/regularExpressions';
import { carService } from '@/services/CarService';
import { PropEditEngine, Fuels, Fuel } from '@/type/engine';

import {
	ButtonComponent,
	SelectContainer,
	FlexContainer,
	ErrorMassage,
	ActionName,
	Container,
	Input,
	Form,
} from './style';

const EditModalWindow: React.FC<PropEditEngine> = ({
	setOpenEditModal,
	openEditModal,
	serverRequest,
	data,
}) => {
	const [fuels, setFuels] = useState<Fuels>([
		{ createdAt: '', updatedAt: '', fuelType: '', id: '' },
	]);
	const [editedEngine, setEditedEngine] = useState({
		volume: 0,
		capacity: 0,
		modelName: '',
		wasteCity: 0,
		wasteOutOfCity: 0,
		averageConsumption: 0,
		modelId: data.modelId,
		fuelId: '',
	});

	const [error, setError] = useState({
		volume: '',
		capacity: '',
		modelName: '',
		wasteCity: '',
		wasteOutOfCity: '',
		averageConsumption: '',
	});

	useEffect(() => {
		setEditedEngine((prev) => ({
			...prev,
			volume: data.volume,
			capacity: data.capacity,
			modelName: data.modelName,
			wasteCity: data.wasteCity,
			wasteOutOfCity: data.wasteOutOfCity,
			averageConsumption: data.averageConsumption,
		}));
	}, [data]);

	const serverRequestFuel = useCallback(async () => {
		carService.getAllFuels().then(function (value: any) {
			setFuels(value);
		});
	}, []);

	useEffect(() => {
		serverRequestFuel();
	}, [serverRequestFuel]);

	const handleClose = () => {
		setOpenEditModal(false);
	};

	const textValidate = ({
		target: { value, name },
	}: React.FocusEvent<HTMLInputElement>) => {
		const isValueValid = lettersNumbersRegExp.test(String(value));

		setError((prev) => ({
			...prev,
			[name]:
				!value || !isValueValid ? 'the field is filled with an error' : '',
		}));

		setEditedEngine((prev) => ({ ...prev, [name]: value }));
	};

	const numberValidate = ({
		target: { value, name },
	}: React.FocusEvent<HTMLInputElement>) => {
		const isValueValid = numbersDotsRegExp.test(String(value));

		setError((prev) => ({
			...prev,
			[name]:
				!value || !isValueValid ? 'the field is filled with an error' : '',
		}));

		setEditedEngine((prev) => ({ ...prev, [name]: Number(value) }));
	};

	const chandgeValue = ({
		target: { value, name },
	}: React.ChangeEvent<HTMLInputElement>) => {
		setEditedEngine((prev) => ({ ...prev, [name]: value }));
	};

	const editEngine = async () => {
		if (
			error.capacity === '' &&
			error.modelName === '' &&
			error.wasteCity === '' &&
			error.wasteOutOfCity === '' &&
			error.averageConsumption === ''
		) {
			await carService.editEngine(data.engineId, editedEngine);
			serverRequest();
			handleClose();
			setEditedEngine({
				volume: 0,
				capacity: 0,
				modelName: '',
				wasteCity: 0,
				wasteOutOfCity: 0,
				averageConsumption: 0,
				modelId: '',
				fuelId: '',
			});
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
					<ActionName>Edit engine</ActionName>
					<ErrorMassage>{error.volume && error.volume}</ErrorMassage>
					<Input
						label="volume"
						name="volume"
						onBlur={numberValidate}
						onChange={chandgeValue}
						onFocus={(event) => {
							event.target.select();
						}}
						type="number"
						value={editedEngine.volume}
					/>
					<ErrorMassage>{error.capacity && error.capacity}</ErrorMassage>
					<Input
						label="capacity"
						name="capacity"
						onBlur={numberValidate}
						onChange={chandgeValue}
						onFocus={(event) => {
							event.target.select();
						}}
						type="number"
						value={editedEngine.capacity}
					/>
					<ErrorMassage>{error.modelName && error.modelName}</ErrorMassage>
					<Input
						label="model name"
						name="modelName"
						onBlur={textValidate}
						onChange={chandgeValue}
						onFocus={(event) => {
							event.target.select();
						}}
						type="text"
						value={editedEngine.modelName}
					/>
					<ErrorMassage>{error.wasteCity && error.wasteCity}</ErrorMassage>
					<Input
						label="waste city"
						name="wasteCity"
						onBlur={numberValidate}
						onChange={chandgeValue}
						onFocus={(event) => {
							event.target.select();
						}}
						type="number"
						value={editedEngine.wasteCity}
					/>
					<ErrorMassage>
						{error.wasteOutOfCity && error.wasteOutOfCity}
					</ErrorMassage>
					<Input
						label="waste out of city"
						name="wasteOutOfCity"
						onBlur={numberValidate}
						onChange={chandgeValue}
						onFocus={(event) => {
							event.target.select();
						}}
						type="number"
						value={editedEngine.wasteOutOfCity}
					/>
					<ErrorMassage>
						{error.averageConsumption && error.averageConsumption}
					</ErrorMassage>
					<Input
						label="average consumption"
						name="averageConsumption"
						onBlur={numberValidate}
						onChange={chandgeValue}
						onFocus={(event) => {
							event.target.select();
						}}
						type="number"
						value={editedEngine.averageConsumption}
					/>
					<FlexContainer>
						<SelectContainer fullWidth>
							<InputLabel id="demo-simple-select-label">fuel</InputLabel>
							<Select
								id="demo-simple-select"
								label="fuel"
								labelId="demo-simple-select-label"
								onChange={(event) =>
									setEditedEngine((prev) => ({
										...prev,
										fuelId: event.target.value,
									}))
								}
								value={editedEngine.fuelId}
							>
								{fuels.map((fuel: Fuel, index: number) => (
									<MenuItem key={index} value={fuel.id}>
										{fuel.fuelType}
									</MenuItem>
								))}
							</Select>
						</SelectContainer>
						<ButtonComponent onClick={editEngine}>Edit</ButtonComponent>
					</FlexContainer>
				</Form>
			</Container>
		</Modal>
	);
};

export default EditModalWindow;
