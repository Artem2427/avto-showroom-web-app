import React from 'react';

import { CardContent } from '@mui/material';

import { PropCardEngine } from '@/type/engine';

import {
	CardComponent,
	FlexContainer,
	IconDelete,
	TitleCard,
	Container,
	TypeText,
	TypeItem,
	IconEdit,
} from './style';

const EngineCard: React.FC<PropCardEngine> = ({
	openDeleteModalWinow,
	openEditModalWindow,
	averageConsumption,
	wasteOutOfCity,
	modelName,
	wasteCity,
	capacity,
	volume,
}) => {
	return (
		<CardComponent>
			<CardContent>
				<FlexContainer>
					<TitleCard>{modelName}</TitleCard>
					<IconEdit onClick={openEditModalWindow} />
					<IconDelete onClick={openDeleteModalWinow} />
				</FlexContainer>
				<Container>
					<TypeItem>
						volume: <TypeText>{volume}</TypeText>
					</TypeItem>
					<TypeItem>
						capacity: <TypeText>{capacity}</TypeText>
					</TypeItem>
					<TypeItem>
						in city: <TypeText>{wasteCity}</TypeText>
					</TypeItem>
					<TypeItem>
						out of city: <TypeText>{wasteOutOfCity}</TypeText>
					</TypeItem>
					<TypeItem>
						consumption: <TypeText>{averageConsumption}</TypeText>
					</TypeItem>
				</Container>
			</CardContent>
		</CardComponent>
	);
};

export default EngineCard;
