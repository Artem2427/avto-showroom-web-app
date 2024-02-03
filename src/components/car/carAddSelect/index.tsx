import React, { useEffect, useCallback } from 'react';

import { InputLabel, MenuItem, Select } from '@mui/material';

import { carService } from '@/services/CarService';
import { CarSelectedValue, PropCarSelect, CarData } from '@/type/car';

import { FlexContainer, FormControlBox, Container } from './style';

const CarAddSelect: React.FC<PropCarSelect> = ({
	setSelectedValue,
	selectedValue,
	setData,
	data,
}) => {
	const serverRequest = useCallback(async () => {
		await carService.getAllTransmissions().then(function (value: any) {
			setData((prev: CarData) => ({ ...prev, transmissions: value }));
		});
		await carService.getAllColors().then(function (value: any) {
			setData((prev: CarData) => ({ ...prev, colors: value }));
		});
		await carService.getAllBodyTypes().then(function (value: any) {
			setData((prev: CarData) => ({ ...prev, bodyTypes: value }));
		});
		await carService.getAllDriveTypes().then(function (value: any) {
			setData((prev: CarData) => ({ ...prev, drives: value }));
		});
		await carService.getAllBrands().then(function (value: any) {
			setData((prev: CarData) => ({ ...prev, brands: value }));
		});

		if (selectedValue.brandId) {
			carService
				.getAllModels(selectedValue.brandId)
				.then(function (value: any) {
					setData((prev: CarData) => ({ ...prev, models: value }));
				});
		}
		if (selectedValue.modelId) {
			carService
				.getAllEngines(selectedValue.modelId)
				.then(function (value: any) {
					setData((prev: CarData) => ({ ...prev, engines: value }));
				});
		}
	}, [selectedValue.brandId, selectedValue.modelId, setData]);

	useEffect(() => {
		serverRequest();
	}, [serverRequest]);

	return (
		<>
			<FlexContainer>
				<Container>
					<FormControlBox color="warning" fullWidth size="small">
						<InputLabel id="demo-simple-select-label">brand</InputLabel>
						<Select
							id="demo-simple-select"
							label="brand"
							labelId="demo-simple-select-label"
							onChange={(event) =>
								setSelectedValue((prev: CarSelectedValue) => ({
									...prev,
									brandId: event.target.value,
								}))
							}
							value={selectedValue.brandId}
						>
							{data.brands.map((brand: any, index: number) => (
								<MenuItem key={index} value={brand.id}>
									{brand.name}
								</MenuItem>
							))}
						</Select>
					</FormControlBox>
				</Container>
				<Container>
					<FormControlBox color="warning" fullWidth size="small">
						<InputLabel id="demo-simple-select-label">model</InputLabel>
						<Select
							id="demo-simple-select"
							label="model"
							labelId="demo-simple-select-label"
							onChange={(event) =>
								setSelectedValue((prev: CarSelectedValue) => ({
									...prev,
									modelId: event.target.value,
								}))
							}
							value={selectedValue.modelId}
						>
							{data.models.map((model: any, index: number) => (
								<MenuItem key={index} value={model.id}>
									{model.name}
								</MenuItem>
							))}
						</Select>
					</FormControlBox>
				</Container>
				<Container>
					<FormControlBox color="warning" fullWidth size="small">
						<InputLabel id="demo-simple-select-label">engine</InputLabel>
						<Select
							id="demo-simple-select"
							label="engine"
							labelId="demo-simple-select-label"
							onChange={(event) =>
								setSelectedValue((prev: CarSelectedValue) => ({
									...prev,
									engineId: event.target.value,
								}))
							}
							value={selectedValue.engineId}
						>
							{data.engines.map((engine: any, index: number) => (
								<MenuItem key={index} value={engine.id}>
									{engine.modelName}
								</MenuItem>
							))}
						</Select>
					</FormControlBox>
				</Container>
			</FlexContainer>
			<FlexContainer>
				<Container>
					<FormControlBox color="warning" fullWidth size="small">
						<InputLabel id="demo-simple-select-label">color</InputLabel>
						<Select
							id="demo-simple-select"
							label="color"
							labelId="demo-simple-select-label"
							onChange={(event) =>
								setSelectedValue((prev: CarSelectedValue) => ({
									...prev,
									colorId: event.target.value,
								}))
							}
							value={selectedValue.colorId}
						>
							{data.colors.map((color: any, index: number) => (
								<MenuItem key={index} value={color.id}>
									{color.color}
								</MenuItem>
							))}
						</Select>
					</FormControlBox>
				</Container>
				<Container>
					<FormControlBox color="warning" fullWidth size="small">
						<InputLabel id="demo-simple-select-label">transmission</InputLabel>
						<Select
							id="demo-simple-select"
							label="transmission"
							labelId="demo-simple-select-label"
							onChange={(event) =>
								setSelectedValue((prev: CarSelectedValue) => ({
									...prev,
									transmissionId: event.target.value,
								}))
							}
							value={selectedValue.transmissionId}
						>
							{data.transmissions.map((transmission: any, index: number) => (
								<MenuItem key={index} value={transmission.id}>
									{transmission.transmission}
								</MenuItem>
							))}
						</Select>
					</FormControlBox>
				</Container>
				<Container>
					<FormControlBox color="warning" fullWidth size="small">
						<InputLabel id="demo-simple-select-label">drive</InputLabel>
						<Select
							id="demo-simple-select"
							label="drive"
							labelId="demo-simple-select-label"
							onChange={(event) =>
								setSelectedValue((prev: CarSelectedValue) => ({
									...prev,
									driveId: event.target.value,
								}))
							}
							value={selectedValue.driveId}
						>
							{data.drives.map((drive: any, index: number) => (
								<MenuItem key={index} value={drive.id}>
									{drive.typeOfDrive}
								</MenuItem>
							))}
						</Select>
					</FormControlBox>
				</Container>
			</FlexContainer>
		</>
	);
};
export default CarAddSelect;
