import React, { useCallback, useEffect, useState } from 'react';

import { CardMedia, Modal, Card } from '@mui/material';

import Palette from '@/palette';
import { carService } from '@/services/CarService';
import { CarImages, PropCarImage } from '@/type/car';

import UploadButton from '../carUploadButton';

import {
	ActionsComponent,
	ButtonComponent,
	FlexContainer,
	CardDesktop,
	CardMobile,
	Container,
} from './style';

const ImageModalWindow: React.FC<PropCarImage> = ({
	setOpenNotification,
	setOpenImageModal,
	setNotification,
	openImageModal,
	id,
}) => {
	const [data, setData] = useState({ images: [''], mainImage: 0 });
	const screenWidth: number = window.screen.width;

	const handleClose = () => {
		setOpenImageModal(false);
	};

	const requestImages = useCallback(async () => {
		id &&
			(await carService.getAllCarImage(id).then(function (value: CarImages) {
				setData(value);
			}));
	}, [id]);

	useEffect(() => {
		requestImages();
	}, [requestImages]);

	const deleteImage = async (url: string) => {
		await carService.deleteCarImage(id, url);
		requestImages();
	};

	const selectMainImage = async (number: number) => {
		const image = { mainImage: number + 1 };
		await carService.chengeMainImage(id, image);
		requestImages();
	};

	return (
		<Modal
			aria-describedby="modal-modal-description"
			aria-labelledby="modal-modal-title"
			onClose={handleClose}
			open={openImageModal}
		>
			<Container>
				{!(data.images.length >= 8) && (
					<UploadButton
						id={id}
						requestImages={requestImages}
						setNotification={setNotification}
						setOpenNotification={setOpenNotification}
					/>
				)}
				<FlexContainer>
					{data.images.map((image, index) => (
						<Card
							key={index}
							style={screenWidth > 700 ? CardDesktop : CardMobile}
						>
							<CardMedia
								alt="image"
								component="img"
								height="160"
								image={image}
								sx={
									data.mainImage === index + 1
										? { borderBottom: `4px solid ${Palette.orange}` }
										: { border: '0' }
								}
							/>
							<ActionsComponent>
								<ButtonComponent onClick={() => selectMainImage(index)}>
									primary
								</ButtonComponent>
								<ButtonComponent onClick={() => deleteImage(image)}>
									delete
								</ButtonComponent>
							</ActionsComponent>
						</Card>
					))}
				</FlexContainer>
			</Container>
		</Modal>
	);
};

export default ImageModalWindow;
