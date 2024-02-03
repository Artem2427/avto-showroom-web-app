import React, { useState, FocusEvent } from 'react';

import { useNavigate } from 'react-router-dom';

import Pages from '@/constants/pages';
import {
	lettersRegExp,
	emailRegExp,
	passwordRegExp,
} from '@/constants/regularExpressions';
import { authService } from '@/services/AuthService';

import AlertNotification from '../alert';

import InputConfirmation from './inputConfirmation';
import PasswordInput from './inputPassword';
import {
	ButtonComponent,
	ErrorMassage,
	Container,
	Form,
	Input,
	Span,
	Text,
} from './style';

const FormRegistration = () => {
	const navigate = useNavigate();
	const [openAlert, setOpenAlert] = useState(false);
	const [alert, setAlert] = useState('');
	const [newUser, setNewUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		role: 'guest',
	});

	const [error, setError] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmationPassword: '',
	});

	const nameValidate = ({
		target: { value, name },
	}: React.FocusEvent<HTMLInputElement>) => {
		const isValueValid = lettersRegExp.test(String(value));

		setError((prev) => ({
			...prev,
			[name]:
				!value || !isValueValid
					? 'this field cannot be empty, contain numbers and extraneous characters'
					: '',
		}));

		setNewUser((prev) => ({ ...prev, [name]: value }));
	};

	const passwordValidate = ({
		target: { value },
	}: FocusEvent<HTMLInputElement>) => {
		const isValueValid = passwordRegExp.test(String(value));

		setError((prev) => ({
			...prev,
			password: !isValueValid
				? 'password must contain at least 8 characters, one capital letter, one number. It should also not contain extra characters'
				: '',
		}));
		setNewUser((prev) => ({ ...prev, password: value }));
	};

	const emailValidate = ({
		target: { value },
	}: FocusEvent<HTMLInputElement>) => {
		const isValueValid = emailRegExp.test(String(value));

		setError((prev) => ({
			...prev,
			email: !value || !isValueValid ? 'incorrect email' : '',
		}));
		setNewUser((prev) => ({ ...prev, email: value }));
	};

	const confirmationPasswordValidate = ({
		target: { value },
	}: FocusEvent<HTMLInputElement>) => {
		const isValueValid = value !== newUser.password;

		setError((prev) => ({
			...prev,
			confirmationPassword:
				!value || isValueValid ? 'your passwords must be the same' : '',
		}));
		setNewUser((prev) => ({ ...prev, password: value }));
	};

	const handleRegistration = async () => {
		if (
			error.firstName === '' &&
			error.lastName === '' &&
			error.email === '' &&
			error.password === '' &&
			error.confirmationPassword === '' &&
			newUser.firstName !== '' &&
			newUser.lastName !== '' &&
			newUser.email !== '' &&
			newUser.password !== ''
		) {
			await authService
				.registration(newUser)
				.then(() => {
					navigate(Pages.AUTORIZATION);
				})
				.catch((err) => {
					setOpenAlert(true);
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
					Enter your<Span>first name</Span>
				</Text>
				<ErrorMassage>{error.firstName && error.firstName}</ErrorMassage>
				<Input
					label="first name"
					name="firstName"
					onBlur={nameValidate}
					type="text"
				/>
			</Container>
			<Container>
				<Text>
					Enter your<Span>last name</Span>
				</Text>
				<ErrorMassage>{error.lastName && error.lastName}</ErrorMassage>
				<Input
					label="last name"
					name="lastName"
					onBlur={nameValidate}
					type="text"
				/>
			</Container>
			<Container>
				<Text>
					Enter your<Span>email</Span>
				</Text>
				<ErrorMassage>{error.email && error.email}</ErrorMassage>
				<Input label="email" name="email" onBlur={emailValidate} type="text" />
			</Container>
			<Container>
				<Text>
					Enter your <Span>password</Span>
				</Text>
				<ErrorMassage>{error.password && error.password}</ErrorMassage>
				<PasswordInput passwordValidate={passwordValidate} />
			</Container>
			<Container>
				<Text>
					Confirm the entered <Span>password</Span>
				</Text>
				<ErrorMassage>
					{error.confirmationPassword && error.confirmationPassword}
				</ErrorMassage>
				<InputConfirmation
					confirmationPasswordValidate={confirmationPasswordValidate}
				/>
			</Container>
			<ButtonComponent onClick={handleRegistration}>
				Registration
			</ButtonComponent>
		</Form>
	);
};

export default FormRegistration;
