import React, { FC } from 'react';

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

import Palette from '@/palette';
import { CarType } from '@/type';

import { StyledCharacteristicsBox, StyledList } from './style';

type Props = {
	car: CarType | null;
};

const CarCharacteristics: FC<Props> = ({ car }) => {
	const CHARACTERICTICS = [
		{
			label: 'transmission',
			value: car?.transmission.transmission,
		},
		{
			label: 'fuel type',
			value: car?.engine.fuel.fuelType,
		},
		{
			label: 'body type',
			value: car?.bodyType.body,
		},
		{
			label: 'drive',
			value: car?.drive.typeOfDrive,
		},
		{
			label: 'model of engine',
			value: car?.engine.modelName,
		},
		{
			label: 'seats',
			value: car?.seats,
		},
		{
			label: 'race',
			value: car?.race,
		},
		{
			label: 'year',
			value: car && new Date(car.createYear).getFullYear(),
		},
	];

	return (
		<StyledCharacteristicsBox>
			<StyledList>
				{CHARACTERICTICS.map((el, index) => (
					<ListItem key={index}>
						<ListItemIcon sx={{ color: Palette.orange }}>
							<FiberManualRecordIcon />
						</ListItemIcon>
						<ListItemText
							primary={el.label + ':'}
							primaryTypographyProps={{ variant: 'h6' }}
						/>
					</ListItem>
				))}
			</StyledList>
			<StyledList>
				{CHARACTERICTICS.map((el, index) => (
					<ListItem key={index}>
						<ListItemText
							primary={el.value}
							primaryTypographyProps={{ variant: 'h6', align: 'right' }}
						/>
					</ListItem>
				))}
			</StyledList>
		</StyledCharacteristicsBox>
	);
};

export default CarCharacteristics;
