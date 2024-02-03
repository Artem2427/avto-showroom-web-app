import React, { FC, ChangeEvent, useState } from 'react';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { InputAdornment, IconButton } from '@mui/material';

import { Input } from './style';

type Props = {
	field: string;
	label: string;
	isSubmited: boolean;
	handlePasswords: (
		field: string,
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	error: string;
	password: string;
};

const PasswordInput: FC<Props> = ({
	field,
	label,
	isSubmited,
	handlePasswords,
	error,
	password,
}) => {
	const [showPassword, setShowPassword] = useState(false);
	const handleClickShowPassword = () => setShowPassword(!showPassword);
	const handleMouseDownPassword = () => setShowPassword(!showPassword);

	return (
		<Input
			InputProps={{
				endAdornment: (
					<InputAdornment position="end">
						<IconButton
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
						>
							{showPassword ? <Visibility /> : <VisibilityOff />}
						</IconButton>
					</InputAdornment>
				),
			}}
			error={isSubmited ? Boolean(error) : false}
			helperText={error ? error : ''}
			label={label}
			onChange={(event) => handlePasswords(field, event)}
			required
			type={showPassword ? 'text' : 'password'}
			value={password}
		/>
	);
};

export default PasswordInput;
