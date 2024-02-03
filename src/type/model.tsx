import { Dispatch, SetStateAction } from 'react';

export interface ICreateModel {
	name: string;
}

export type ModelData = {
	id: string;
	name: string;
};

export type Model = {
	id: string;
	createdAt: string;
	updatedAt: string;
	name: string;
	brandId: string;
};

export type ModelRequest = {
	name: string;
};

export type PropEditModel = {
	setOpenEditModal: Dispatch<SetStateAction<boolean>>;
	openEditModal: boolean;
	serverRequest: () => void;
	name: string;
	id: string;
};

export type PropCreateModel = {
	setOpenCreateModal: Dispatch<SetStateAction<boolean>>;
	openCreateModal: boolean;
	serverRequest: () => void;
	id: undefined | string;
};

export type PropTypesModelDelete = {
	id: string;
	openDeleteModal: boolean;
	setOpenDeleteModal: Dispatch<SetStateAction<boolean>>;
	serverRequest: () => void;
};

export type PropCardModel = {
	name: string;
	id: string;
	carCount: string;
	createdAt: string;
	updatedAt: string;
	openDeleteModalWinow: () => void;
	openEditModalWindow: () => void;
	navigate: any;
	setData: Dispatch<SetStateAction<ModelData>>;
};
