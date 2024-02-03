import React, { useState } from 'react';

import { Checkbox, FormControlLabel, AlertColor } from '@mui/material';

import { DEFAULT_ERRORS_FEEDBACK, DEFAULT_FEEDBACK_FORM } from '@/constants';
import {
	lettersRegExp,
	telephoneNumberRegExp,
} from '@/constants/regularExpressions';
import { catalogService } from '@/services/CatalogService';

import AlertNotification from '../alert';

import {
	StyledButton,
	StyledFormControl,
	StyledFormGroup,
	StyledTextArea,
	StyledTextField,
} from './style';

const FeedbackForm = () => {
	const [openAlert, setOpenAlert] = useState(false);
	const [alert, setAlert] = useState('');
	const [severity, setSeverity] = useState<AlertColor>('error');
	const [isSubmited, setIsSubmited] = useState(false);
	const [feedback, setFeedback] = useState(DEFAULT_FEEDBACK_FORM);
	const [errors, setErrors] = useState(DEFAULT_ERRORS_FEEDBACK);

	const handleOpenAlert = () => {
		setOpenAlert(true);
	};

	const handleErrors = (field: string, value: string) => {
		setErrors((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	const validateFields = () => {
		const nameValidation = lettersRegExp.test(feedback.name);
		const telefoneValidation = telephoneNumberRegExp.test(feedback.phone);

		nameValidation ? handleErrors('name', '') : handleErrors('name', 'name');
		telefoneValidation
			? handleErrors('phone', '')
			: handleErrors('phone', 'phone');

		return nameValidation && telefoneValidation;
	};

	const handleChangeFeedbackData = (
		field: string,
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFeedback((prev) => ({ ...prev, [field]: event.target.value }));
	};

	const handleSubmit = () => {
		setIsSubmited(true);

		if (errors.isAgreedPolicy) {
			if (validateFields()) {
				catalogService
					.feedback(feedback)
					.then(() => {
						setSeverity('success');
						setAlert('We have recorded your message');
					})
					.catch((err) => {
						setSeverity('error');
						setAlert(err.response.data.message);
					})
					.finally(() => {
						handleOpenAlert();
						setFeedback(DEFAULT_FEEDBACK_FORM);
						setErrors(DEFAULT_ERRORS_FEEDBACK);
					});
			} else {
				setSeverity('error');
				handleOpenAlert();
				setAlert('Fill in name or phone field correct');
			}
		} else {
			setSeverity('error');
			handleOpenAlert();
			setAlert('Agree with the privacy policy');
		}
	};

	return (
		<StyledFormControl>
			<StyledFormGroup>
				<AlertNotification
					alert={alert}
					openAlert={openAlert}
					setOpenAlert={setOpenAlert}
					severity={severity}
				/>
				<StyledTextField
					error={isSubmited ? Boolean(errors.name) : false}
					helperText={errors.name ? 'Incorrect ' + errors.name : ''}
					label="Name"
					onChange={(event) => handleChangeFeedbackData('name', event)}
					placeholder="Name"
					value={feedback.name}
				/>
				<StyledTextField
					error={isSubmited ? Boolean(errors.phone) : false}
					helperText={errors.phone ? 'Incorrect ' + errors.phone : ''}
					label="Phone"
					onChange={(event) => handleChangeFeedbackData('phone', event)}
					placeholder="Phone"
					value={feedback.phone}
				/>
				<StyledTextArea
					label="Message"
					onChange={(event) => handleChangeFeedbackData('comment', event)}
					placeholder="Message"
					value={feedback.comment}
				/>
				<FormControlLabel
					checked={errors.isAgreedPolicy}
					control={<Checkbox color="warning" name="privacyPolicy" />}
					label="I agree with the privacy policy"
					onChange={() =>
						setErrors((prev) => ({
							...prev,
							isAgreedPolicy: !prev.isAgreedPolicy,
						}))
					}
				/>
				<StyledButton onClick={handleSubmit}>Send Data</StyledButton>
			</StyledFormGroup>
		</StyledFormControl>
	);
};

export default FeedbackForm;
