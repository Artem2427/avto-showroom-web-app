import React, { FC, Dispatch, SetStateAction, SyntheticEvent } from 'react';

import { AlertColor } from '@mui/material';

import { StyledMuiAlert, StyledSnackbar } from './style';

type Props = {
	severity: AlertColor;
	alert: string;
	openAlert: boolean;
	setOpenAlert: Dispatch<SetStateAction<boolean>>;
};

const AlertNotification: FC<Props> = ({
	severity,
	alert,
	openAlert,
	setOpenAlert,
}) => {
	const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpenAlert(false);
	};

	return (
		<StyledSnackbar
			autoHideDuration={3000}
			onClose={handleClose}
			open={openAlert}
		>
			<StyledMuiAlert onClose={handleClose} severity={severity}>
				{alert}
			</StyledMuiAlert>
		</StyledSnackbar>
	);
};

export default AlertNotification;
