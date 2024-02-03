import React from 'react';

import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import { VALID_IMAGE_EXTENSIONS } from '@/constants';
import { FilePropTypes } from '@/type';

import { IconCamera } from './style';

const UploadButtons: React.FC<FilePropTypes> = ({
	setOpenNotification,
	setNotification,
	setFile,
}) => {
	const validateFile = (files: FileList): boolean => {
		const fileExtension = files[0].type.split('/')[1];
		if (files.length > 0) {
			return VALID_IMAGE_EXTENSIONS.includes(fileExtension);
		}
		return false;
	};

	const fileSaving = (event: any) => {
		if (event.target.files && validateFile(event.target.files)) {
			setFile(event.target.files[0]);
		} else {
			setNotification((prev) => ({
				...prev,
				severity: 'error',
				text: 'Wrong file type selected',
			}));
			setOpenNotification(true);
		}
	};

	return (
		<Stack alignItems="center" direction="row" spacing={2}>
			<IconButton
				aria-label="upload picture"
				color="primary"
				component="label"
				sx={{ padding: '0' }}
			>
				<input accept="image/*" hidden onChange={fileSaving} type="file" />
				<IconCamera />
			</IconButton>
		</Stack>
	);
};

export default UploadButtons;
