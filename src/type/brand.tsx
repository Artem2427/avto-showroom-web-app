import { Dispatch, SetStateAction } from 'react';

export interface IBrand {
	id: string;
	createdAt: string;
	updatedAt: string;
	phone: string;
	name: string;
	logo: string;
	cars: Array<string>;
	models: Array<string>;
}

export type Brand = {
	name: string;
	phone: string;
	createdAt: string;
	id: string;
	actions: string;
	logo: string;
};

export type Brands = {
	brands: Array<Brand>;
};

export type NewBrand = {
	phone: string;
	name: string;
	models: any;
	file: null | object;
};

export type BrandData = {
	name: string;
	phone: string;
	id: string;
	logo: string;
};

export interface BrandTableColumn {
	id: 'name' | 'phone' | 'createdAt' | 'id' | 'actions';
	label: string;
	minWidth?: number;
	align?: 'right';
	format?: (value: number) => string;
}

export type IAllBrand = IBrand[];

export type PropTypesBrandDelete = {
	id: string;
	openDeleteModal: boolean;
	setOpenDeleteModal: Dispatch<SetStateAction<boolean>>;
	serverRequest: () => void;
	setNotification: Dispatch<React.SetStateAction<NotificationType>>;
	setOpenNotification: Dispatch<React.SetStateAction<boolean>>;
};

export type PropBrandSuccessful = {
	openSuccessfulModal: boolean;
	setOpenSuccessfulModal: Dispatch<SetStateAction<boolean>>;
};

export type NotificationType = {
	severity: string;
	text: string;
};

export type PropAddBrandModal = {
	open: boolean;
	handleClose: () => void;
	serverRequest: () => void;
	setNotification: Dispatch<React.SetStateAction<NotificationType>>;
	setOpenNotification: Dispatch<React.SetStateAction<boolean>>;
};

export type PropTypesEditBrand = {
	setOpenEditModal: Dispatch<SetStateAction<boolean>>;
	openEditModal: boolean;
	serverRequest: () => void;
	data: BrandData;
	setData: Dispatch<SetStateAction<BrandData>>;
	setNotification: Dispatch<React.SetStateAction<NotificationType>>;
	setOpenNotification: Dispatch<React.SetStateAction<boolean>>;
};

export type PropBrandTable = {
	brands: Array<Brand>;
	serverRequest: () => void;
	page: number;
	setPage: Dispatch<SetStateAction<number>>;
	setRowsPerPage: Dispatch<SetStateAction<number>>;
	rowsPerPage: number;
	setNotification: Dispatch<React.SetStateAction<NotificationType>>;
	setOpenNotification: Dispatch<React.SetStateAction<boolean>>;
};
