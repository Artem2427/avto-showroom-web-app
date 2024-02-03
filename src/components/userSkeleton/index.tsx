import React, { useState, useCallback, ChangeEvent } from 'react';

import { Avatar, Stack, CircularProgress } from '@mui/material';

import { VALID_IMAGE_EXTENSIONS } from '@/constants';
import { userService } from '@/services/UserService';
import { addUser } from '@/store/userSlice';

import { useAppDispatch, useAppSelector } from '../../hooks';
import AlertNotification from '../alert';

import {
	StyledButton,
	StyledCancelButton,
	StyledBox,
	StyledLoader,
	StyledH5,
	StyledSubtitle,
	StyledSaveButton,
} from './style';

const UserSkeleton = () => {
	const dispatch = useAppDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const user = useAppSelector((state) => state.user.obj);
	const [isAbleEdited, setIsAbleEdited] = useState(true);
	const [file, setFile] = useState<File | null>(null);
	const [uploadImg, setUploadImg] = useState<string | null>(null);
	const [openAlert, setOpenAlert] = useState(false);
	const [alert, setAlert] = useState('');
	const formData = new FormData();

	const base64Img = useCallback(
		(file: File | null) => {
			const reader = new FileReader();
			file && reader.readAsDataURL(file);
			reader.onload = function () {
				setIsAbleEdited(!isAbleEdited);
				setUploadImg(String(reader.result));
			};
		},
		[isAbleEdited]
	);

	const handleUploadFile = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && validateFile(event.target.files)) {
			setFile(event.target.files[0]);
			base64Img(event.target.files[0]);
		} else {
			setOpenAlert(true);
			setAlert('Not valid image extension');
		}
	};

	const validateFile = (files: FileList): boolean => {
		const fileExtension = files[0].type.split('/')[1];
		if (files.length > 0) {
			return VALID_IMAGE_EXTENSIONS.includes(fileExtension);
		}
		return false;
	};

	const handleSaveAvatar = async () => {
		setIsLoading(true);
		file && formData.append('file', file);
		await userService.updateAvatar(formData).catch((err) => {
			setOpenAlert(true);
			setAlert(err.response.data.message);
			handleCancel();
		});
		await userService.getMe().then((res) => {
			dispatch(addUser(res));
			setUploadImg(null);
			setIsLoading(false);
		});
		setIsAbleEdited(!isAbleEdited);
	};

	const handleCancel = () => {
		setFile(null);
		setUploadImg(null);
		setIsAbleEdited(!isAbleEdited);
	};

	return (
		<StyledBox>
			<AlertNotification
				alert={alert}
				openAlert={openAlert}
				setOpenAlert={setOpenAlert}
				severity="error"
			/>
			{isLoading ? (
				<StyledLoader>
					<CircularProgress />
				</StyledLoader>
			) : (
				<Avatar
					alt={`${user?.firstName} ${user?.lastName}`}
					src={uploadImg ? uploadImg : user?.avatar}
					sx={{ width: 240, height: 240 }}
				/>
			)}

			<StyledH5>{`${user?.firstName} ${user?.lastName}`}</StyledH5>
			<StyledSubtitle>{user?.email}</StyledSubtitle>
			{isAbleEdited ? (
				<StyledButton>
					Upload avatar
					<input
						accept="image/png,image/jpeg,image/jpg,image/webp,image/jfif,image/pjpeg"
						hidden
						onChange={handleUploadFile}
						type="file"
					/>
				</StyledButton>
			) : (
				<Stack direction="row">
					<StyledSaveButton onClick={handleSaveAvatar}>Save</StyledSaveButton>
					<StyledCancelButton onClick={handleCancel}>Cancel</StyledCancelButton>
				</Stack>
			)}
		</StyledBox>
	);
};

export default UserSkeleton;
