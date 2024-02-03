import React, { useState, useCallback, useEffect } from 'react';

import { Backdrop, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';

import EngineCard from '@/components/engine/engineCard';
import CreateEngineModalWindow from '@/components/engine/engineCreateModalWindow';
import DeleteModalWindow from '@/components/engine/engineDeleteModalWindow';
import EditModalWindow from '@/components/engine/engineEditModalWindow';
import Palette from '@/palette';
import { carService } from '@/services/CarService';
import { Engine } from '@/type/engine';

import { FlexContainer, Title, IconAdd } from './style';

const EngineSettings = () => {
	const [isLoading, setIsLoading] = useState(true);
	const { id, nameModel } = useParams();
	const [fuels, setFuels] = useState([]);
	const [data, setData] = useState({
		engineId: '',
		modelId: id,
		modelName: '',
		fuels: fuels,
		volume: 0,
		capacity: 0,
		wasteCity: 0,
		wasteOutOfCity: 0,
		averageConsumption: 0,
	});
	const [engines, setEngines] = useState([
		{
			volume: 0,
			capacity: 0,
			modelName: '',
			wasteCity: 0,
			wasteOutOfCity: 0,
			averageConsumption: 0,
			modelId: '',
			fuelId: '',
			createdAt: '',
			updatedAt: '',
			name: '',
			id: '',
		},
	]);

	const serverRequest = useCallback(() => {
		carService.getAllEngines(id).then(function (value: any) {
			setEngines(value);
			setIsLoading(false);
		});
		carService.getAllFuels().then(function (value: any) {
			setFuels(value);
		});
	}, [id]);

	useEffect(() => {
		serverRequest();
	}, [serverRequest]);

	const [openCreateModal, setOpenCreateModal] = useState(false);
	const openCreateModelWindow = () => {
		setOpenCreateModal(true);
	};

	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const openDeleteModalWinow = () => {
		setOpenDeleteModal(true);
	};

	const [openEditModal, setOpenEditModal] = useState(false);
	const openEditModalWinow = () => setOpenEditModal(true);

	const changeData = (engine: Engine) => {
		setData((prev) => ({
			...prev,
			engineId: engine.id,
			volume: engine.volume,
			capacity: engine.capacity,
			wasteCity: engine.wasteCity,
			wasteOutOfCity: engine.wasteOutOfCity,
			averageConsumption: engine.averageConsumption,
			modelName: engine.modelName,
		}));
	};

	return (
		<>
			<Title>{nameModel} engine</Title>
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
					{engines.map((engine) => (
						<div
							key={engine.modelName}
							onClick={() => changeData(engine)}
							onFocus={() => changeData(engine)}
						>
							<EngineCard
								averageConsumption={engine.averageConsumption}
								capacity={engine.capacity}
								modelName={engine.modelName}
								openDeleteModalWinow={openDeleteModalWinow}
								openEditModalWindow={openEditModalWinow}
								volume={engine.volume}
								wasteCity={engine.wasteCity}
								wasteOutOfCity={engine.wasteOutOfCity}
							/>
						</div>
					))}
					<IconAdd onClick={openCreateModelWindow} />
				</FlexContainer>
			)}
			<CreateEngineModalWindow
				data={data}
				openCreateModal={openCreateModal}
				serverRequest={serverRequest}
				setOpenCreateModal={setOpenCreateModal}
			/>
			<DeleteModalWindow
				id={data.engineId}
				openDeleteModal={openDeleteModal}
				serverRequest={serverRequest}
				setOpenDeleteModal={setOpenDeleteModal}
			/>
			<EditModalWindow
				data={data}
				openEditModal={openEditModal}
				serverRequest={serverRequest}
				setOpenEditModal={setOpenEditModal}
			/>
		</>
	);
};

export default EngineSettings;
