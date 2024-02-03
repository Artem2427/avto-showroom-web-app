import React, { useState } from 'react';

import { Stack, AlertColor } from '@mui/material';

import {
	DEFAULT_PASSWORDS_STATE,
	DEFAULT_NOTIFICATION_STATE,
} from '@/constants';
import { passwordRegExp } from '@/constants/regularExpressions';
import { userService } from '@/services/UserService';
import { IPassword } from '@/type';

import AlertNotification from '../alert';
import PasswordInput from '../passwordInput';

import { StyledButton, StyledCancelButton, StyledFormControl } from './style';

const ChangePassword = () => {
	const [isSubmited, setIsSubmited] = useState(false);
	const [passwords, setPasswords] = useState(DEFAULT_PASSWORDS_STATE);
	const [errors, setErrors] = useState<IPassword>(DEFAULT_PASSWORDS_STATE);
	const [openNotification, setOpenNotification] = useState(false);
	const [notification, setNotification] = useState(DEFAULT_NOTIFICATION_STATE);

	const handlePasswords = (
		field: string,
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setPasswords((prev) => ({ ...prev, [field]: event.target.value }));
	};

	const handleCancel = () => {
		setErrors(DEFAULT_PASSWORDS_STATE);
		setPasswords(DEFAULT_PASSWORDS_STATE);
	};

	const validateFields = () => {
		const currentPasswordValidationMessage = passwordRegExp.test(
			passwords.currentPassword
		)
			? ''
			: 'Incorrect current password';
		const newPasswordValidationMessage = passwordRegExp.test(
			passwords.newPassword
		)
			? ''
			: 'Incorrect new password';
		const confirmPasswordValidationMessage =
			passwords.newPassword === passwords.confirmPassword
				? ''
				: 'Passwords do not match';

		setErrors((prev) => ({
			...prev,
			currentPassword: currentPasswordValidationMessage,
			newPassword: newPasswordValidationMessage,
			confirmPassword: confirmPasswordValidationMessage,
		}));

		return (
			!currentPasswordValidationMessage &&
			!newPasswordValidationMessage &&
			!confirmPasswordValidationMessage
		);
	};

	const handleSave = () => {
		setIsSubmited(true);
		if (validateFields()) {
			userService
				.changePassword(passwords)
				.then(() => {
					setNotification((prev) => ({
						...prev,
						severity: 'success',
						text: 'password changed successfully',
					}));
				})
				.catch((err) => {
					setNotification((prev) => ({
						...prev,
						severity: 'error',
						text: err.response.data.message,
					}));
				})
				.finally(() => {
					setErrors(DEFAULT_PASSWORDS_STATE);
					setPasswords(DEFAULT_PASSWORDS_STATE);
					setOpenNotification(true);
				});
		}
	};

	return (
		<StyledFormControl>
			<AlertNotification
				alert={notification.text}
				openAlert={openNotification}
				setOpenAlert={setOpenNotification}
				severity={notification.severity as AlertColor}
			/>
			<PasswordInput
				error={errors.currentPassword}
				field={'currentPassword'}
				handlePasswords={handlePasswords}
				isSubmited={isSubmited}
				label={'Current password'}
				password={passwords.currentPassword}
			/>
			<PasswordInput
				error={errors.newPassword}
				field={'newPassword'}
				handlePasswords={handlePasswords}
				isSubmited={isSubmited}
				label={'New password'}
				password={passwords.newPassword}
			/>
			<PasswordInput
				error={errors.confirmPassword}
				field={'confirmPassword'}
				handlePasswords={handlePasswords}
				isSubmited={isSubmited}
				label={'Confirm password'}
				password={passwords.confirmPassword}
			/>
			<Stack direction="row">
				<StyledButton onClick={handleSave}>Save</StyledButton>
				<StyledCancelButton onClick={handleCancel}>Cancel</StyledCancelButton>
			</Stack>
		</StyledFormControl>
	);
};

export default ChangePassword;
