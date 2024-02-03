import React, { useState, useCallback, useEffect } from 'react';

import { InputLabel, MenuItem, Select, Modal } from '@mui/material';

import {
	lettersNumbersRegExp,
	numbersDotsRegExp,
} from '@/constants/regularExpressions';
import { carService } from '@/services/CarService';
import { Fuels, PropEngineCreate, NewEngine } from '@/type/engine';

import {
	SelectContainer,
	ButtonComponent,
	FlexContainer,
	ErrorMassage,
	ActionName,
	Container,
	Input,
	Form,
} from './style';

const CreateEngineModalWindow: React.FC<PropEngineCreate> = ({
	setOpenCreateModal,
	openCreateModal,
	serverRequest,
	data,
}) => {
	const [fuels, setFuels] = useState<Fuels>([
		{ createdAt: '', updatedAt: '', fuelType: '', id: '' },
	]);
	const [newEngine, setNewEngine] = useState<NewEngine>({
		volume: '',
		capacity: '',
		modelName: '',
		wasteCity: '',
		wasteOutOfCity: '',
		averageConsumption: '',
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

	const serverRequestFuel = useCallback(async () => {
		carService.getAllFuels().then(function (value: any) {
			setFuels(value);
		});
	}, []);

	useEffect(() => {
		serverRequestFuel();
	}, [serverRequestFuel]);

	const textValidate = ({
		target: { value, name },
	}: React.FocusEvent<HTMLInputElement>) => {
		const isValueValid = lettersNumbersRegExp.test(String(value));

		setError((prev) => ({
			...prev,
			[name]:
				!value || !isValueValid ? 'the field is filled with an error' : '',
		}));

		setNewEngine((prev) => ({ ...prev, [name]: value }));
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

		setNewEngine((prev) => ({ ...prev, [name]: Number(value) }));
	};

	const chandgeValue = ({
		target: { value, name },
	}: React.ChangeEvent<HTMLInputElement>) => {
		setNewEngine((prev) => ({ ...prev, [name]: value }));
	};
	const handleClose = () => {
		setOpenCreateModal(false);
	};

	const addNewEngine = async () => {
		if (
			error.capacity === '' &&
			error.modelName === '' &&
			error.wasteCity === '' &&
			error.wasteOutOfCity === '' &&
			error.averageConsumption === ''
		) {
			await carService.addEngine(newEngine);
			serverRequest();
			handleClose();
			setNewEngine({
				volume: '',
				capacity: '',
				modelName: '',
				wasteCity: '',
				wasteOutOfCity: '',
				averageConsumption: '',
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
			open={openCreateModal}
		>
			<Container>
				<Form>
					<ActionName>Add engine to database</ActionName>
					<ErrorMassage>{error.volume && error.volume}</ErrorMassage>
					<Input
						autoComplete="off"
						label="volume"
						name="volume"
						onBlur={numberValidate}
						onChange={chandgeValue}
						onFocus={(event) => {
							event.target.select();
						}}
						type="number"
						value={newEngine.volume}
					/>
					<ErrorMassage>{error.capacity && error.capacity}</ErrorMassage>
					<Input
						autoComplete="off"
						label="capacity"
						name="capacity"
						onBlur={numberValidate}
						onChange={chandgeValue}
						onFocus={(event) => {
							event.target.select();
						}}
						type="number"
						value={newEngine.capacity}
					/>
					<ErrorMassage>{error.modelName && error.modelName}</ErrorMassage>
					<Input
						autoComplete="off"
						label="model name"
						name="modelName"
						onBlur={textValidate}
						onChange={chandgeValue}
						type="text"
						value={newEngine.modelName}
					/>
					<ErrorMassage>{error.wasteCity && error.wasteCity}</ErrorMassage>
					<Input
						autoComplete="off"
						label="waste city"
						name="wasteCity"
						onBlur={numberValidate}
						onChange={chandgeValue}
						onFocus={(event) => {
							event.target.select();
						}}
						type="number"
						value={newEngine.wasteCity}
					/>
					<ErrorMassage>
						{error.wasteOutOfCity && error.wasteOutOfCity}
					</ErrorMassage>
					<Input
						autoComplete="off"
						label="waste out of city"
						name="wasteOutOfCity"
						onBlur={numberValidate}
						onChange={chandgeValue}
						onFocus={(event) => {
							event.target.select();
						}}
						type="number"
						value={newEngine.wasteOutOfCity}
					/>
					<ErrorMassage>
						{error.averageConsumption && error.averageConsumption}
					</ErrorMassage>
					<Input
						autoComplete="off"
						label="average consumption"
						name="averageConsumption"
						onBlur={numberValidate}
						onChange={chandgeValue}
						onFocus={(event) => {
							event.target.select();
						}}
						type="number"
						value={newEngine.averageConsumption}
					/>
					<FlexContainer>
						<SelectContainer fullWidth>
							<InputLabel id="demo-simple-select-label">fuel</InputLabel>
							<Select
								id="demo-simple-select"
								label="fuel"
								labelId="demo-simple-select-label"
								onChange={(event) =>
									setNewEngine((prev) => ({
										...prev,
										fuelId: event.target.value,
									}))
								}
								value={newEngine.fuelId}
							>
								{fuels.map((fuel: any, index: number) => (
									<MenuItem key={index} value={fuel.id}>
										{fuel.fuelType}
									</MenuItem>
								))}
							</Select>
						</SelectContainer>
						<ButtonComponent onClick={addNewEngine}>Add engine</ButtonComponent>
					</FlexContainer>
				</Form>
			</Container>
		</Modal>
	);
};

export default CreateEngineModalWindow;
