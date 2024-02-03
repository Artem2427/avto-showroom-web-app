import { Dispatch, SetStateAction } from 'react';

export interface INewEngine {
	volume: number | string;
	capacity: number | string;
	modelName: string;
	wasteCity: number | string;
	wasteOutOfCity: number | string;
	averageConsumption: number | string;
	modelId: undefined | string;
	fuelId: string;
}

export type EngineData = {
	engineId: string;
	modelId: string | undefined;
	modelName: string;
	fuels: any;
	volume: number;
	capacity: number;
	wasteCity: number;
	wasteOutOfCity: number;
	averageConsumption: number;
};

export type Engine = {
	volume: number;
	capacity: number;
	modelName: string;
	wasteCity: number;
	wasteOutOfCity: number;
	averageConsumption: number;
	modelId: string;
	fuelId: string;
	createdAt: string;
	updatedAt: string;
	name: string;
	id: string;
};

export type NewEngine = {
	volume: number | string;
	capacity: number | string;
	modelName: string;
	wasteCity: number | string;
	wasteOutOfCity: number | string;
	averageConsumption: number | string;
	modelId: string | undefined;
	fuelId: string;
};

export type Fuel = {
	createdAt: string;
	updatedAt: string;
	fuelType: string;
	id: string;
};

export type Fuels = [Fuel];

export type PropEngineCreate = {
	setOpenCreateModal: Dispatch<SetStateAction<boolean>>;
	openCreateModal: boolean;
	serverRequest: () => void;
	data: EngineData;
};

export type PropEngineDelete = {
	id: string | undefined;
	openDeleteModal: boolean;
	setOpenDeleteModal: Dispatch<SetStateAction<boolean>>;
	serverRequest: () => void;
};

export type PropCardEngine = {
	volume: number;
	capacity: number;
	modelName: string;
	wasteCity: number;
	wasteOutOfCity: number;
	averageConsumption: number;
	openDeleteModalWinow: () => void;
	openEditModalWindow: () => void;
};

export type PropEditEngine = {
	setOpenEditModal: Dispatch<SetStateAction<boolean>>;
	openEditModal: boolean;
	serverRequest: () => void;
	data: EngineData;
};
