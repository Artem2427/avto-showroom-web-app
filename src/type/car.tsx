import { ReactNode, Dispatch, SetStateAction } from 'react';

export interface IEditCar {
	price: number;
	currency: string;
	race: number;
	createYear: string;
	name: string;
	availableCar: number;
	seats: number;
}

export interface INewCar {
	price: number;
	currency: string;
	race: number;
	createYear: Date | null;
	name: string;
	availableCar: number;
	seats: number;
	brandId: string;
	modelId: string;
	bodyTypeId: string;
	driveId: string;
	colorId: string;
	transmissionId: string;
	engineId: string;
}

export type Car = {
	name: string;
	createYear: string;
	model: string;
	body: string;
	color: string;
	transmission: string;
	availableCar: string;
	actions: string;
	id: string;
	price: string;
	currency: string;
	race: string;
	seats: string;
};

export type CarItem = {
	type: string;
	icon: ReactNode;
};

export type CarSelectedValue = {
	brandId: string;
	modelId: string;
	engineId: string;
	bodyTypeId: string;
	driveId: string;
	colorId: string;
	transmissionId: string;
	currencyId: string;
};

export type CarBrand = {
	name: string;
	id: string;
};

export type CarModels = {
	name: string;
	id: string;
};

export type CarEngines = {
	engineId: string;
	modelName: string;
};

export type CarBodyTypes = {
	body: string;
	id: string;
};

export type CarDrives = {
	typeOfDrive: string;
	id: string;
};

export type CarColors = {
	color: string;
	id: string;
};

export type CarImage = {
	mainImage: number;
};

export type CarImages = {
	images: Array<string>;
	mainImage: number;
};

export type CarTransmissions = {
	transmission: string;
	id: string;
};

export type CarData = {
	brands: Array<CarBrand>;
	models: Array<CarModels>;
	engines: Array<CarEngines>;
	bodyTypes: Array<CarBodyTypes>;
	drives: Array<CarDrives>;
	colors: Array<CarColors>;
	transmissions: Array<CarTransmissions>;
};

export interface CarTableColumn {
	id:
		| 'nameCar'
		| 'createYear'
		| 'model'
		| 'bodyType'
		| 'color'
		| 'transmission'
		| 'available'
		| 'actions';
	label: string;
	minWidth?: number;
	align?: 'right';
	format?: (value: number) => string;
}

export type CarEditData = {
	price: number;
	currency: string;
	race: number;
	createYear: string;
	name: string;
	availableCar: number;
	seats: number;
	id: string;
};

export type PropCarSelect = {
	data: CarData;
	setData: Dispatch<React.SetStateAction<CarData>>;
	selectedValue: CarSelectedValue;
	setSelectedValue: Dispatch<React.SetStateAction<CarSelectedValue>>;
};

export type PropCarEdit = {
	setOpenEditModal: Dispatch<SetStateAction<boolean>>;
	openEditModal: boolean;
	serverRequest: () => void;
	data: CarEditData;
	setNotification: Dispatch<React.SetStateAction<NotificationType>>;
	setOpenNotification: Dispatch<React.SetStateAction<boolean>>;
};

export type PropCarImage = {
	setOpenImageModal: Dispatch<SetStateAction<boolean>>;
	openImageModal: boolean;
	id: string;
	setNotification: Dispatch<React.SetStateAction<NotificationType>>;
	setOpenNotification: Dispatch<React.SetStateAction<boolean>>;
};

export type PropCarDelete = {
	id: string;
	openDeleteModal: boolean;
	setOpenDeleteModal: Dispatch<SetStateAction<boolean>>;
	serverRequest: () => void;
	setNotification: Dispatch<React.SetStateAction<NotificationType>>;
	setOpenNotification: Dispatch<React.SetStateAction<boolean>>;
};

export type PropCarTable = {
	page: number;
	rowsPerPage: number;
	setPage: Dispatch<SetStateAction<number>>;
	setRowsPerPage: Dispatch<SetStateAction<number>>;
	cars: Array<Car>;
	serverRequest: () => void;
	setSortingTerm: Dispatch<SetStateAction<string>>;
	setIsDescend: Dispatch<SetStateAction<boolean>>;
	isDescend: boolean;
	setNotification: Dispatch<React.SetStateAction<NotificationType>>;
	setOpenNotification: Dispatch<React.SetStateAction<boolean>>;
};

export type PropCarDate = {
	date: string | null;
	setDate: Dispatch<React.SetStateAction<any>>;
};

export type NotificationType = {
	severity: string;
	text: string;
};

export type PropCarAdd = {
	open: boolean;
	handleClose: () => void;
	serverRequest: () => void;
	setNotification: Dispatch<React.SetStateAction<NotificationType>>;
	setOpenNotification: Dispatch<React.SetStateAction<boolean>>;
};

export type PropCarSearch = {
	setSearchTerm: Dispatch<React.SetStateAction<string>>;
	value: string;
};

export type PropFileCar = {
	requestImages: () => void;
	id: string;
	setNotification: Dispatch<React.SetStateAction<NotificationType>>;
	setOpenNotification: Dispatch<React.SetStateAction<boolean>>;
};
