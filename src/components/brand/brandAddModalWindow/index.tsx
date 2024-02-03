import React, { useState, useEffect } from 'react';

import { Modal } from '@mui/material';

import {
	telephoneNumberRegExp,
	lettersRegExp,
	modelsRegExp,
} from '@/constants/regularExpressions';
import { carService } from '@/services/CarService';
import { PropAddBrandModal, NewBrand } from '@/type/brand';

import UploadButtons from '../brandUploadButton';

import {
	InputFlexContainer,
	ButtonComponent,
	FlexContainer,
	ErrorMassage,
	AlertMessage,
	AddedModels,
	ModelButton,
	ActionName,
	ModelInput,
	Container,
	IconImage,
	Input,
	Form,
	Text,
} from './style';

const BrandModalWindow: React.FC<PropAddBrandModal> = ({
	setOpenNotification,
	setNotification,
	serverRequest,
	handleClose,
	open,
}) => {
	const [file, setFile] = useState<null | File>(null);
	const [model, setModel] = useState('');
	const [newBrand, setNewBrand] = useState<NewBrand>({
		phone: '',
		name: '',
		models: [],
		file: null,
	});
	const [error, setError] = useState({
		phone: '',
		name: '',
		models: '',
	});

	const changeModal = (e: React.ChangeEvent<HTMLInputElement>) => {
		setModel(e.target.value);
	};

	useEffect(() => {
		setNewBrand((prev) => ({
			...prev,
			file: file,
		}));
	}, [file]);

	const phoneValidate = ({
		target: { value },
	}: React.FocusEvent<HTMLInputElement>) => {
		const isValueValid = telephoneNumberRegExp.test(String(value));

		setError((prev) => ({
			...prev,
			phone: !isValueValid ? 'incorrect phone' : '',
		}));

		setNewBrand((prev) => ({ ...prev, phone: value }));
	};

	const nameValidate = ({
		target: { value },
	}: React.FocusEvent<HTMLInputElement>) => {
		const isValueValid = lettersRegExp.test(String(value));

		setError((prev) => ({
			...prev,
			name: !value || !isValueValid ? 'incorrect name' : '',
		}));
	};

	const modelsValidate = () => {
		const isValueValid = modelsRegExp.test(String(model));

		setError((prev) => ({
			...prev,
			models: !isValueValid ? 'incorrect models' : '',
		}));
	};

	const addModel = () => {
		const isFirstAdd = newBrand.models[0] === '';

		isFirstAdd
			? setNewBrand((prev) => ({ ...prev, models: [model] }))
			: newBrand.models.push(model);

		setModel('');
	};

	const chandgeValue = ({
		target: { value, name },
	}: React.ChangeEvent<HTMLInputElement>) => {
		setNewBrand((prev) => ({ ...prev, [name]: value }));
	};

	const addNewBrand = async () => {
		if (error.name === '' && error.phone === '') {
			const brand = new FormData();
			brand.append('name', newBrand.name);
			brand.append('phone', newBrand.phone);
			for (let i = 0; i < newBrand.models.length; i++) {
				brand.append('models[]', newBrand.models[i]);
			}
			file && brand.append('file', file);
			await carService.addBrand(brand);
			setNewBrand((prev) => ({
				...prev,
				phone: '',
				name: '',
				models: [],
				file: null,
			}));
			setModel('');
			serverRequest();
			handleClose();
			setNotification((prev) => ({
				...prev,
				severity: 'success',
				text: 'brand created successfully',
			}));
			setOpenNotification(true);
		}
	};
	const deleteImage = () => {
		setFile(null);
	};

	const deleteModel = (modelName: string) => {
		const array = newBrand.models.filter(
			(model: string) => model !== modelName
		);
		setNewBrand((prev) => ({
			...prev,
			models: array,
		}));
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
					<ActionName>Add brand to database</ActionName>
					{file && <AlertMessage>Picture added!</AlertMessage>}
					<ErrorMassage>{error.name && error.name}</ErrorMassage>
					<InputFlexContainer>
						<Input
							label="name brand"
							name="name"
							onBlur={nameValidate}
							onChange={chandgeValue}
							type="text"
							value={newBrand.name}
						/>
						{file && (
							<div onClick={deleteImage}>
								<IconImage onClick={deleteImage} />
							</div>
						)}
						{!file && (
							<UploadButtons
								setFile={setFile}
								setNotification={setNotification}
								setOpenNotification={setOpenNotification}
							/>
						)}
					</InputFlexContainer>
					<ErrorMassage>{error.phone && error.phone}</ErrorMassage>
					<Input
						label="phone"
						name="phone"
						onBlur={phoneValidate}
						onChange={chandgeValue}
						type="text"
						value={newBrand.phone}
					/>
					<ErrorMassage>{error.models && error.models}</ErrorMassage>
					<FlexContainer>
						<ModelInput
							label="brand models"
							name="models"
							onChange={changeModal}
							type="text"
							value={model}
						/>
						<ModelButton
							onClick={() => {
								addModel();
								modelsValidate();
							}}
						>
							Add
						</ModelButton>
					</FlexContainer>
					{newBrand.models[0] && (
						<AddedModels>
							added models:
							{newBrand.models.map((model: string, index: number) => (
								<Text key={index} onClick={() => deleteModel(model)}>
									{model}
								</Text>
							))}
						</AddedModels>
					)}

					<ButtonComponent onClick={addNewBrand}>Add brand</ButtonComponent>
				</Form>
			</Container>
		</Modal>
	);
};

export default BrandModalWindow;
