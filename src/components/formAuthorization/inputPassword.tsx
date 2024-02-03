import React from 'react';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { InputAdornment, FormControl, InputLabel, Input } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import { StatePasswordInput, PropPasswordInput } from '@/type';

const PasswordInput: React.FC<PropPasswordInput> = ({ passwordValidate }) => {
	const [values, setValues] = React.useState<StatePasswordInput>({
		password: '',
		showPassword: false,
	});

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};

	const handleChange =
		(prop: keyof StatePasswordInput) =>
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setValues({ ...values, [prop]: event.target.value });
		};

	return (
		<FormControl sx={{ m: 1, width: '70%' }} variant="standard">
			<InputLabel color="warning" htmlFor="standard-adornment-password">
				password
			</InputLabel>
			<Input
				color="warning"
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							aria-label="toggle password visibility"
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
						>
							{values.showPassword ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				}
				id="standard-adornment-password"
				onBlur={passwordValidate}
				onChange={handleChange('password')}
				type={values.showPassword ? 'text' : 'password'}
				value={values.password}
			/>
		</FormControl>
	);
};

export default PasswordInput;
