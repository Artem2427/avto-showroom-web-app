import { Dispatch, SetStateAction } from 'react';

export interface INewColor {
	color: string;
	hex: string;
}

export type Color = {
	color: string;
	hex: string;
	createdAt: string;
	id: string;
	actions: string;
};

export type Colors = {
	colors: Array<Color>;
};

export type ColorData = {
	color: string;
	id: string;
	hex: string;
};

export interface ColorTableColumn {
	id: 'color' | 'hex' | 'createdAt' | 'id' | 'actions';
	label: string;
	minWidth?: number;
	align?: 'right';
	format?: (value: number) => string;
}

export type ColorItem = {
	label: string;
	color: string;
};

export type PropColorDelete = {
	id: string;
	openDeleteModal: boolean;
	setOpenDeleteModal: Dispatch<SetStateAction<boolean>>;
	serverRequest: () => void;
	setNotification: Dispatch<React.SetStateAction<NotificationType>>;
	setOpenNotification: Dispatch<React.SetStateAction<boolean>>;
};

export type PropEditColor = {
	setOpenEditModal: Dispatch<SetStateAction<boolean>>;
	openEditModal: boolean;
	serverRequest: () => void;
	data: ColorData;
	setNotification: Dispatch<React.SetStateAction<NotificationType>>;
	setOpenNotification: Dispatch<React.SetStateAction<boolean>>;
};

export type PropColorTable = {
	colors: Array<Color>;
	serverRequest: () => void;
	page: number;
	setPage: Dispatch<SetStateAction<number>>;
	setRowsPerPage: Dispatch<SetStateAction<number>>;
	rowsPerPage: number;
	setNotification: Dispatch<React.SetStateAction<NotificationType>>;
	setOpenNotification: Dispatch<React.SetStateAction<boolean>>;
};

export type NotificationType = {
	severity: string;
	text: string;
};

export type PropAddColorModal = {
	open: boolean;
	handleClose: () => void;
	serverRequest: () => void;
	setNotification: Dispatch<React.SetStateAction<NotificationType>>;
	setOpenNotification: Dispatch<React.SetStateAction<boolean>>;
};
