import React, { useState, useCallback, useEffect } from 'react';

import { Backdrop, CircularProgress } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

import ModelCard from '@/components/model/modelCard';
import CreateModelModalWindow from '@/components/model/modelCreateModalWindow';
import DeleteModalWindow from '@/components/model/modelDeleteModalWindow';
import EditModalWindow from '@/components/model/modelEditModalWindow';
import Palette from '@/palette';
import { carService } from '@/services/CarService';

import { FlexContainer, Title, IconAdd } from './style';

const ModelSettings = () => {
	const [data, setData] = useState({ name: '', id: '' });
	const [isLoading, setIsLoading] = useState(true);
	const [models, setModels] = useState([
		{ name: '', id: '', createdAt: '', updatedAt: '' },
	]);
	const navigate = useNavigate();
	const { id, nameBrand } = useParams();
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const [openEditModal, setOpenEditModal] = useState(false);
	const [openCreateModal, setOpenCreateModal] = useState(false);

	const serverRequest = useCallback(() => {
		carService.getAllModels(id).then(function (value: any) {
			setModels(value);
			setIsLoading(false);
		});
	}, [id]);

	useEffect(() => {
		serverRequest();
	}, [serverRequest]);

	const openCreateModelWindow = () => {
		setOpenCreateModal(true);
	};

	const openModalWinow = () => {
		setOpenDeleteModal(true);
	};

	const handleOpen = () => setOpenEditModal(true);

	return (
		<>
			<Title>{nameBrand} models </Title>
			{isLoading ? (
				<Backdrop
					open={true}
					sx={{
						color: Palette.orange,
						zIndex: (theme) => theme.zIndex.drawer + 1,
					}}
				>
					<CircularProgress color="inherit" />
				</Backdrop>
			) : (
				<FlexContainer>
					{models.map((model) => (
						<ModelCard
							carCount="5"
							createdAt={model.createdAt}
							id={model.id}
							key={model.id}
							name={model.name}
							navigate={navigate}
							openDeleteModalWinow={openModalWinow}
							openEditModalWindow={handleOpen}
							setData={setData}
							updatedAt={model.updatedAt}
						/>
					))}
					<IconAdd onClick={openCreateModelWindow} />
				</FlexContainer>
			)}
			<CreateModelModalWindow
				id={id}
				openCreateModal={openCreateModal}
				serverRequest={serverRequest}
				setOpenCreateModal={setOpenCreateModal}
			/>
			<DeleteModalWindow
				id={data.id}
				openDeleteModal={openDeleteModal}
				serverRequest={serverRequest}
				setOpenDeleteModal={setOpenDeleteModal}
			/>
			<EditModalWindow
				id={data.id}
				name={data.name}
				openEditModal={openEditModal}
				serverRequest={serverRequest}
				setOpenEditModal={setOpenEditModal}
			/>
		</>
	);
};

export default ModelSettings;
