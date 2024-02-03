import React, { useState, useEffect } from 'react';

import { InputLabel, MenuItem, Select, Modal } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { CURRENCY } from '@/constants';
import {
	positiveNumbersRegExp,
	lettersNumbersRegExp,
} from '@/constants/regularExpressions';
import { carService } from '@/services/CarService';
import { CarSelectedValue, INewCar, PropCarAdd } from '@/type/car';

import CarAddSelect from '../carAddSelect';

import {
	SelectComponent,
	ButtonComponent,
	FlexContainer,
	DateComponent,
	BoxComponent,
	ErrorMassage,
	ActionName,
	Container,
	Input,
	Form,
} from './style';

const CarAddModalWindow: React.FC<PropCarAdd> = ({
	setOpenNotification,
	setNotification,
	serverRequest,
	handleClose,
	open,
}) => {
	const defaultDate = new Date();
	const [selectedDate, setSelectedDate] = useState<Date | null>(defaultDate);
	const [data, setData] = useState({
		brands: [{ name: '', id: '' }],
		models: [{ name: '', id: '' }],
		engines: [
			{
				engineId: '',
				modelName: '',
			},
		],
		bodyTypes: [{ body: '', id: '' }],
		drives: [{ typeOfDrive: '', id: '' }],
		colors: [{ color: '', id: '' }],
		transmissions: [{ transmission: '', id: '' }],
	});
	const [selectedValue, setSelectedValue] = useState({
		brandId: '',
		modelId: '',
		engineId: '',
		bodyTypeId: '',
		driveId: '',
		colorId: '',
		transmissionId: '',
		currencyId: '',
	});
	const [newCar, setNewCar] = useState<INewCar>({
		price: 0,
		currency: selectedValue.currencyId,
		race: 0,
		createYear: defaultDate,
		name: '',
		availableCar: 0,
		seats: 0,
		brandId: selectedValue.brandId,
		modelId: selectedValue.modelId,
		bodyTypeId: selectedValue.bodyTypeId,
		driveId: selectedValue.driveId,
		colorId: selectedValue.colorId,
		transmissionId: selectedValue.transmissionId,
		engineId: selectedValue.engineId,
	});

	useEffect(() => {
		setNewCar((prev) => ({
			...prev,
			currency: selectedValue.currencyId,
			brandId: selectedValue.brandId,
			modelId: selectedValue.modelId,
			bodyTypeId: selectedValue.bodyTypeId,
			driveId: selectedValue.driveId,
			colorId: selectedValue.colorId,
			transmissionId: selectedValue.transmissionId,
			engineId: selectedValue.engineId,
		}));
	}, [selectedValue]);

	const [error, setError] = useState({
		price: '',
		currency: '',
		race: '',
		name: '',
		availableCar: '',
		seats: '',
	});

	useEffect(() => {
		setNewCar((prev) => ({
			...prev,
			createYear: selectedDate,
		}));
	}, [selectedDate]);

	const textValidate = ({
		target: { value, name },
	}: React.FocusEvent<HTMLInputElement>) => {
		const isValueValid = lettersNumbersRegExp.test(String(value));

		setError((prev) => ({
			...prev,
			[name]:
				!value || !isValueValid ? 'the field is filled with an error' : '',
		}));

		setNewCar((prev) => ({ ...prev, [name]: value }));
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

		setNewCar((prev) => ({ ...prev, [name]: Number(value) }));
	};

	const addNewCar = async () => {
		if (
			error.price === '' &&
			error.currency === '' &&
			error.race === '' &&
			error.name === '' &&
			error.availableCar === '' &&
			error.seats === ''
		) {
			await carService.addNewCar(newCar);
			serverRequest();
			setNewCar((prev) => ({
				...prev,
				price: 0,
				race: 0,
				createYear: defaultDate,
				name: '',
				availableCar: 0,
				seats: 0,
			}));
			setSelectedValue((prev) => ({
				...prev,
				brandId: '',
				modelId: '',
				engineId: '',
				bodyTypeId: '',
				driveId: '',
				colorId: '',
				transmissionId: '',
				currencyId: '',
			}));
			setSelectedDate(defaultDate);
			handleClose();
			setNotification((prev) => ({
				...prev,
				severity: 'success',
				text: 'car added successfully',
			}));
			setOpenNotification(true);
		}
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
					<ActionName>Add car to database</ActionName>
					<ErrorMassage>{error.name && error.name}</ErrorMassage>
					<Input label="name" name="name" onBlur={textValidate} type="text" />
					<ErrorMassage>
						{error.availableCar && error.availableCar}
					</ErrorMassage>
					<Input
						label="available car"
						name="availableCar"
						onBlur={numberValidate}
						type="text"
					/>
					<ErrorMassage>{error.price && error.price}</ErrorMassage>
					<FlexContainer>
						<Input
							label="price"
							name="price"
							onBlur={numberValidate}
							type="text"
						/>
						<BoxComponent>
							<SelectComponent fullWidth>
								<InputLabel id="demo-simple-select-label">currency</InputLabel>
								<Select
									id="demo-simple-select"
									label="currency"
									labelId="demo-simple-select-label"
									onChange={(event) =>
										setSelectedValue((prev: CarSelectedValue) => ({
											...prev,
											currencyId: event.target.value,
										}))
									}
									value={selectedValue.currencyId}
								>
									{CURRENCY.map((value, index) => (
										<MenuItem key={index} value={value}>
											{value}
										</MenuItem>
									))}
								</Select>
							</SelectComponent>
						</BoxComponent>
					</FlexContainer>
					<ErrorMassage>{error.race && error.race}</ErrorMassage>
					<FlexContainer>
						<Input
							label="race"
							name="race"
							onBlur={numberValidate}
							type="text"
						/>
						<DatePicker
							label="create year"
							onChange={(newValue: Date | null) => {
								setSelectedDate(newValue);
							}}
							renderInput={(params) => <DateComponent {...params} />}
							value={selectedDate}
							views={['year']}
						/>
					</FlexContainer>
					<ErrorMassage>{error.seats && error.seats}</ErrorMassage>
					<FlexContainer>
						<Input
							label="seats"
							name="seats"
							onBlur={numberValidate}
							type="text"
						/>
						<BoxComponent>
							<SelectComponent fullWidth>
								<InputLabel id="demo-simple-select-label">body type</InputLabel>
								<Select
									id="demo-simple-select"
									label="bodyType"
									labelId="demo-simple-select-label"
									onChange={(event) =>
										setSelectedValue((prev: CarSelectedValue) => ({
											...prev,
											bodyTypeId: event.target.value,
										}))
									}
									value={selectedValue.bodyTypeId}
								>
									{data.bodyTypes.map((bodyType: any, index: number) => (
										<MenuItem key={index} value={bodyType.id}>
											{bodyType.body}
										</MenuItem>
									))}
								</Select>
							</SelectComponent>
						</BoxComponent>
					</FlexContainer>
					<CarAddSelect
						data={data}
						selectedValue={selectedValue}
						setData={setData}
						setSelectedValue={setSelectedValue}
					/>
					<ButtonComponent onClick={addNewCar}>Add car</ButtonComponent>
				</Form>
			</Container>
		</Modal>
	);
};

export default CarAddModalWindow;
