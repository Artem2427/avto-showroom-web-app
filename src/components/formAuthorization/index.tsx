import React, { useState, FocusEvent } from 'react';

import { useNavigate } from 'react-router-dom';

import { emailRegExp } from '@/constants/regularExpressions';
import { userService } from '@/services/UserService';

import Pages from '../../constants/pages';
import { useAppDispatch } from '../../hooks';
import { authService } from '../../services/AuthService';
import { storageService } from '../../services/StorageService';
import { addUser } from '../../store/userSlice';
import AlertNotification from '../alert';

import PasswordInput from './inputPassword';
import {
	ButtonComponent,
	InputComponent,
	ErrorMassage,
	Container,
	Span,
	Form,
	Text,
} from './style';

const FormAuthorization = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [userData, setUserData] = useState({ email: '', password: '' });
	const [error, setError] = useState({ emailError: '', passwordError: '' });
	const [alert, setAlert] = useState('');
	const [openAlert, setOpenAlert] = useState(false);

	const handleOpenAlert = () => {
		setOpenAlert(true);
	};

	const passwordValidate = ({
		target: { value },
	}: FocusEvent<HTMLInputElement>) => {
		setError((prev) => ({
			...prev,
			passwordError: !value ? 'password field cannot be empty' : '',
		}));
		setUserData((prev) => ({ ...prev, password: value }));
	};

	const emailValidate = ({
		target: { value },
	}: FocusEvent<HTMLInputElement>) => {
		const isValueValid = emailRegExp.test(String(value));

		setError((prev) => ({
			...prev,
			emailError: !value || !isValueValid ? 'incorrect email' : '',
		}));
		setUserData((prev) => ({ ...prev, email: value }));
	};

	const handleLogin = async () => {
		if (
			error.emailError === '' &&
			error.passwordError === '' &&
			userData.email !== '' &&
			userData.password !== ''
		) {
			await authService
				.login(userData)
				.then((response) => {
					userService.getMe().then((res) => dispatch(addUser(res)));
					const obj = Object.values(response).toString();
					storageService.set('access_token', obj);
					navigate(Pages.CATALOG);
				})
				.catch((err) => {
					handleOpenAlert();
					setAlert(err.response.data.message);
				});
		}
	};

	return (
		<Form>
			<AlertNotification
				alert={alert}
				openAlert={openAlert}
				setOpenAlert={setOpenAlert}
				severity="error"
			/>
			<Container>
				<Text>
					Enter your<Span>email</Span>
				</Text>
				<ErrorMassage>{error.emailError && error.emailError}</ErrorMassage>
				<InputComponent
					label="email"
					name="email"
					onBlur={emailValidate}
					type="text"
				/>
			</Container>
			<Container>
				<Text>
					Enter your <Span>password</Span>
				</Text>
				<ErrorMassage>
					{error.passwordError && error.passwordError}
				</ErrorMassage>
				<PasswordInput passwordValidate={passwordValidate} />
			</Container>
			<ButtonComponent onClick={handleLogin}>Login</ButtonComponent>
		</Form>
	);
};

export default FormAuthorization;
