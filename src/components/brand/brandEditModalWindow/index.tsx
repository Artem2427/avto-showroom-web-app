import React, { useState, useEffect } from 'react';

import { Modal } from '@mui/material';

import {
	lettersRegExp,
	telephoneNumberRegExp,
} from '@/constants/regularExpressions';
import { carService } from '@/services/CarService';
import { PropTypesEditBrand } from '@/type/brand';

import UploadButtons from '../brandUploadButton';

import {
	InputFlexContainer,
	ButtonComponent,
	ErrorMassage,
	AlertMessage,
	ActionName,
	Container,
	Input,
	Icon,
	Form,
} from './style';

const EditModalWindow: React.FC<PropTypesEditBrand> = ({
	setOpenNotification,
	setOpenEditModal,
	setNotification,
	openEditModal,
	serverRequest,
	setData,
	data,
}) => {
	const [file, setFile] = useState<any>(null);
	const [editedBrand, setEditedBrand] = useState({
		phone: '',
		name: '',
	});

	const [error, setError] = useState({
		phone: '',
		name: '',
	});

	const handleClose = () => {
		setOpenEditModal(false);
	};

	useEffect(() => {
		setEditedBrand((prev) => ({
			...prev,
			phone: data.phone,
			name: data.name,
			id: data.id,
		}));
	}, [data]);

	const phoneValidate = ({
		target: { value },
	}: React.FocusEvent<HTMLInputElement>) => {
		const isValueValid = telephoneNumberRegExp.test(String(value));

		setError((prev) => ({
			...prev,
			phone: !isValueValid ? 'incorrect phone' : '',
		}));

		setEditedBrand((prev) => ({ ...prev, phone: value }));
	};

	const nameValidate = ({
		target: { value },
	}: React.FocusEvent<HTMLInputElement>) => {
		const isValueValid = lettersRegExp.test(String(value));

		setError((prev) => ({
			...prev,
			name: !value || !isValueValid ? 'incorrect name' : '',
		}));

		setEditedBrand((prev) => ({ ...prev, name: value }));
	};

	const chandgeValue = ({
		target: { value, name },
	}: React.ChangeEvent<HTMLInputElement>) => {
		setEditedBrand((prev) => ({ ...prev, [name]: value }));
	};

	const editBrand = async () => {
		if (error.phone === '' && error.name === '') {
			const brand = new FormData();
			brand.append('name', editedBrand.name);
			brand.append('phone', editedBrand.phone);
			brand.append('file', file);
			await carService.editBrand(data.id, brand);
			serverRequest();
			setEditedBrand((prev) => ({ ...prev, phone: '', name: '' }));
			setFile(null);
			handleClose();
			setNotification((prev) => ({
				...prev,
				severity: 'success',
				text: 'brand successfully changed',
			}));
			setOpenNotification(true);
		}
	};

	const deleteImage = () => {
		setData((prev) => ({ ...prev, logo: '' }));
		setFile(null);
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
					<ActionName>Edit brand</ActionName>
					{file && <AlertMessage>Picture added!</AlertMessage>}
					<ErrorMassage>{error.name && error.name}</ErrorMassage>
					<InputFlexContainer>
						<Input
							label="name brand"
							name="name"
							onBlur={nameValidate}
							onChange={chandgeValue}
							type="text"
							value={editedBrand.name}
						/>
						{(data.logo || file) && <Icon onClick={deleteImage} />}
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
						value={editedBrand.phone}
					/>
					<ButtonComponent color="inherit" onClick={editBrand}>
						Edit
					</ButtonComponent>
				</Form>
			</Container>
		</Modal>
	);
};

export default EditModalWindow;
