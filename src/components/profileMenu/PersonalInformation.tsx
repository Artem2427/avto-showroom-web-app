import React, { useEffect, useState, ChangeEvent } from 'react';

import { Grid, Stack, AlertColor } from '@mui/material';

import { DEFAULT_USER_OBJ } from '@/constants';
import {
	emailRegExp,
	lettersRegExp,
	telephoneNumberRegExp,
} from '@/constants/regularExpressions';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { userService } from '@/services/UserService';
import { addUser } from '@/store/userSlice';
import { DataUserType } from '@/type';

import AlertNotification from '../alert';

import { StyledButton, StyledCancelButton, Input } from './style';

const PersonalInformation = () => {
	const dispatch = useAppDispatch();
	const user = useAppSelector((state) => state.user.obj);
	const [isAbleEdited, setAbleEdited] = useState(false);
	const [errors, setErrors] = useState<DataUserType>(DEFAULT_USER_OBJ);
	const [openAlert, setOpenAlert] = useState(false);
	const [severity, setSeverity] = useState('success');
	const [alert, setAlert] = useState('');
	const [userData, setUserData] = useState(
		user
			? {
					firstName: user.firstName,
					lastName: user.lastName,
					phone: user.phone,
					email: user.email,
			  }
			: DEFAULT_USER_OBJ
	);

	const handleErrors = (idValid: boolean, field: string, error: string) => {
		setErrors((prev) => ({
			...prev,
			[field]: idValid ? '' : error,
		}));
	};

	const handleEditState = () => {
		setAbleEdited(!isAbleEdited);
	};

	const handleUserInformation = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setUserData((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
		validateFields(event.target.name, event.target.value);
	};

	const handleCancel = () => {
		handleEditState();
		setErrors(DEFAULT_USER_OBJ);
		setUserData(
			user
				? {
						firstName: user.firstName,
						lastName: user.lastName,
						phone: user.phone,
						email: user.email,
				  }
				: DEFAULT_USER_OBJ
		);
	};

	const validateFields = (field: string, value: string): void => {
		switch (field) {
			case 'phone':
				handleErrors(telephoneNumberRegExp.test(value), field, 'phone');
				break;

			case 'firstName':
				handleErrors(lettersRegExp.test(value), field, 'first name');
				break;

			case 'lastName':
				handleErrors(lettersRegExp.test(value), field, 'last name');
				break;

			case 'email':
				handleErrors(emailRegExp.test(value), field, 'email');
				break;

			default:
				break;
		}
	};

	const isValid = (): boolean => !Object.values(errors).some((el) => el !== '');

	const handleSave = async () => {
		if (isValid()) {
			handleEditState();
			await userService
				.updateData(userData)
				.then(() => {
					setSeverity('success');
					setAlert('Information is update');
				})
				.catch((err) => {
					setSeverity('error');
					setAlert(err.response.data.message);
				})
				.finally(() => {
					setOpenAlert(true);
				});
			await userService.getMe().then((res) => dispatch(addUser(res)));
		}
	};

	useEffect(() => {
		setUserData(
			user
				? {
						firstName: user.firstName,
						lastName: user.lastName,
						phone: user.phone,
						email: user.email,
				  }
				: DEFAULT_USER_OBJ
		);
	}, [user]);

	return (
		<>
			<AlertNotification
				alert={alert}
				openAlert={openAlert}
				setOpenAlert={setOpenAlert}
				severity={severity as AlertColor}
			/>
			<Grid container spacing={2}>
				<Grid item md={6} sm={6} xs={12}>
					<Input
						InputProps={{
							readOnly: !isAbleEdited,
						}}
						error={Boolean(errors.firstName)}
						helperText={errors.firstName ? 'Incorrect ' + errors.firstName : ''}
						label={'First name'}
						name={'firstName'}
						onChange={handleUserInformation}
						placeholder={'First name' || 'not specified'}
						value={userData.firstName || ''}
					/>
				</Grid>
				<Grid item md={6} sm={6} xs={12}>
					<Input
						InputProps={{
							readOnly: !isAbleEdited,
						}}
						error={Boolean(errors.lastName)}
						helperText={errors.lastName ? 'Incorrect ' + errors.lastName : ''}
						label={'Last name'}
						name={'lastName'}
						onChange={handleUserInformation}
						placeholder={'Last name' || 'not specified'}
						value={userData.lastName || ''}
					/>
				</Grid>
				<Grid item md={6} sm={6} xs={12}>
					<Input
						InputProps={{
							readOnly: !isAbleEdited,
						}}
						error={Boolean(errors.email)}
						helperText={errors.email ? 'Incorrect ' + errors.email : ''}
						label={'Email'}
						name={'email'}
						onChange={handleUserInformation}
						placeholder={'Email' || 'not specified'}
						value={userData.email || ''}
					/>
				</Grid>
				<Grid item md={6} sm={6} xs={12}>
					<Input
						InputProps={{
							readOnly: !isAbleEdited,
						}}
						error={Boolean(errors.phone)}
						helperText={errors.phone ? 'Incorrect ' + errors.phone : ''}
						label={'Phone'}
						name={'phone'}
						onChange={handleUserInformation}
						placeholder={'Phone' || 'not specified'}
						value={userData.phone || ''}
					/>
				</Grid>
			</Grid>
			{!isAbleEdited ? (
				<StyledButton onClick={handleEditState}>Edit information</StyledButton>
			) : (
				<Stack direction="row">
					<StyledButton disabled={!isValid()} onClick={handleSave}>
						Save
					</StyledButton>
					<StyledCancelButton onClick={handleCancel}>Cancel</StyledCancelButton>
				</Stack>
			)}
		</>
	);
};

export default PersonalInformation;
