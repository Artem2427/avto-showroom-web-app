import React from 'react';

import { VALID_IMAGE_EXTENSIONS } from '@/constants';
import { carService } from '@/services/CarService';
import { PropFileCar } from '@/type/car';

import { StackContainer, ButtonComponent } from './style';

const UploadButton: React.FC<PropFileCar> = ({
	setOpenNotification,
	setNotification,
	requestImages,
	id,
}) => {
	const validateFile = (files: FileList): boolean => {
		const fileExtension = files[0].type.split('/')[1];
		if (files.length > 0) {
			return VALID_IMAGE_EXTENSIONS.includes(fileExtension);
		}
		return false;
	};

	const addImage = async (event: any) => {
		if (event.target.files && validateFile(event.target.files)) {
			const file = event.target.files[0];
			const selectedImage = new FormData();
			selectedImage.append('file', file);
			await carService.addNewImage(id, selectedImage);
			requestImages();
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
		<StackContainer spacing={2}>
			<ButtonComponent>
				Upload
				<input accept="image/*" hidden onChange={addImage} type="file" />
			</ButtonComponent>
		</StackContainer>
	);
};

export default UploadButton;
