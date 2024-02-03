import React from 'react';

import { CardContent } from '@mui/material';

import { PropCardModel } from '@/type/model';

import {
	LinktoEngiene,
	FlexContainer,
	CardComponent,
	IconDelete,
	TitleCard,
	TypeText,
	Container,
	TypeItem,
	IconEdit,
} from './style';

const changeFormatdate = (string: string) => {
	const date = new Date(string);
	const dateString = date.toLocaleDateString();
	return dateString;
};

const ModelCard: React.FC<PropCardModel> = ({
	openDeleteModalWinow,
	openEditModalWindow,
	createdAt,
	updatedAt,
	carCount,
	navigate,
	setData,
	name,
	id,
}) => {
	const changeData = (name: string, id: string) => {
		setData((prev) => ({ ...prev, name: name, id: id }));
	};
	return (
		<CardComponent>
			<CardContent>
				<FlexContainer>
					<TitleCard>{name}</TitleCard>
					<IconEdit
						onClick={() => {
							openEditModalWindow();
							changeData(name, id);
						}}
					/>
					<IconDelete
						onClick={() => {
							openDeleteModalWinow();
							changeData(name, id);
						}}
					/>
				</FlexContainer>
				<Container>
					<FlexContainer>
						<TypeItem>Created at:</TypeItem>
						<TypeText>{changeFormatdate(createdAt)}</TypeText>
					</FlexContainer>
					<FlexContainer>
						<TypeItem>Updated at:</TypeItem>
						<TypeText>{changeFormatdate(updatedAt)}</TypeText>
					</FlexContainer>
					<FlexContainer>
						<TypeItem>Car count:</TypeItem>
						<TypeText>{carCount}</TypeText>
					</FlexContainer>
					<LinktoEngiene
						onClick={() => navigate(`/adminPanel/${id}/${name}/engine`)}
					>
						see engines
					</LinktoEngiene>
				</Container>
			</CardContent>
		</CardComponent>
	);
};

export default ModelCard;
