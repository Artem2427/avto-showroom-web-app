import { ReactNode, Dispatch, SetStateAction } from 'react';

export type Routes = RouteModel[];

export type RouteModel = {
	path: string;
	element: ReactNode;
	isPrivate?: boolean;
};

export type Question = {
	question: string;
	answer: string;
	id: number;
	isHidden: boolean;
};

export type Questions = Question[];

export type PropQuestions = {
	question: Question[];
	setQuestion: Dispatch<SetStateAction<Question[]>>;
};

export type HeaderItem = {
	path: string;
	name: string;
	isShow: boolean;
};

export type DataUserType = {
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
};

export interface IPassword {
	confirmPassword: string;
	currentPassword: string;
	newPassword: string;
}

export type NotificationType = {
	severity: string;
	text: string;
};

export type UserType = {
	id: string;
	createdAt: string;
	updatedAt: string;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	avatar: string;
	role: Roles;
};

export interface INewUser {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	role?: string;
}

export interface ILogin {
	email: string;
	password: string;
}
export interface IFeedback {
	phone: string;
	comment: string;
	name: string;
}

export interface INewBodyType {
	body: string;
	icon: string;
}

export interface INewDriveType {
	typeOfDrive: string;
}

export interface INewTransmissionType {
	transmission: string;
}
export enum Dir {
	ascend = 'ascend',
	descend = 'descend',
}
export enum Ordering {
	createdAt = 'createdAt',
	price = 'price',
	createYear = 'createYear',
	race = 'race',
}
export interface IPagination {
	page: number;
	pageSize: number;
	searchTerm: string;
	dir: Dir;
	ordering: Ordering;
}
export interface IFilter {
	field: string;
	type: string;
	from: number | null;
	to: number | null;
	disabled: boolean;
	values: string[];
}
export type RequestType = {
	brand: IFilter;
	drive: IFilter;
	engine: IFilter;
	fuel: IFilter;
	bodyType: IFilter;
	transmission: IFilter;
	year: IFilter;
	color: IFilter;
	price: IFilter;
};

export type CarIconType = {
	icon: ReactNode;
};

export type CatalogType = {
	name: string;
	element: ReactNode;
	panel: string;
};

export type FiltersType = {
	brands: BrandType[];
	drives: DriveType[];
	engines: EngineFilter[];
	fuels: FuelType[];
	bodyTypes: BodyType[];
	transmissions: TransmissionType[];
	years: number[];
	colors: ColorType[];
	price: number[];
	maxPrice: number;
	minPrice: number;
	maxYear: string;
	minYear: string;
	maxRace: number;
	minRace: number;
};

export type SelectedFiltersType = {
	engineType: string | null;
	carType: string | null;
	color: string | null;
	price: number[] | null;
};

export type FilePropTypes = {
	setFile: Dispatch<React.SetStateAction<any>>;
	setNotification: Dispatch<React.SetStateAction<NotificationType>>;
	setOpenNotification: Dispatch<React.SetStateAction<boolean>>;
};

export type User = {
	avatar: null | string;
	createdAt: string;
	email: string;
	firstName: string;
	id: string;
	lastName: string;
	phone: null | string;
	role: string;
	updatedAt: string;
};

export type Users = {
	users: Array<User>;
	total?: number;
};

export type UserData = {
	page: number;
	rowsPerPage: number;
	searchTerm: string;
};

export type FeedbackData = UserData;

export type Feedback = {
	comment: string;
	createdAt: string;
	id: string;
	isCall: boolean;
	name: string;
	phone: string;
	updatedAt: string;
};

export type Feedbacks = {
	feedbacks: Array<Feedback>;
	total?: number;
};

export enum Roles {
	guest = 'guest',
	admin = 'admin',
	manager = 'manager',
}

export interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

export type BrandType = {
	id: string;
	createdAt: string;
	updatedAt: string;
	phone: string;
	name: string;
	logo: string;
	car?: CarType[];
};

export type ModelType = {
	id: string;
	createdAt: string;
	updatedAt: string;
	name: string;
	brandId: string;
	cars?: CarType[];
};

export type DriveType = {
	id: string;
	createdAt: string;
	updatedAt: string;
	typeOfDrive: string;
	cars?: CarType[];
};

export enum BodyTypeEnum {
	sedan = 'sedan',
	suv = 'suv',
	hatchback = 'hatchback',
	wagon = 'wagon',
	coupe = 'coupe',
	cabriolet = 'cabriolet',
	limousine = 'limousine',
	van = 'van',
}

export type CarIconsType = {
	[key in BodyTypeEnum]: ReactNode;
};

export type DefaultFilterType = {
	[key: string]: FilterType;
};

export type LabelsType = {
	id?: string;
	label: string | number[];
	field: FilterFieldEnum;
};
export interface FilterType {
	field: FilterFieldEnum;
	type: FieldTypeEnum;
	from: number | null;
	to: number | null;
	disabled: boolean;
	values: string[];
	labels: LabelsType[];
}
export enum FilterFieldEnum {
	price = 'price',
	race = 'race',
	createYear = 'createYear',
	brand = 'brand',
	drive = 'drive',
	bodyType = 'bodyType',
	color = 'color',
	fuelType = 'fuelType',
	transmission = 'transmission',
}
export enum FieldTypeEnum {
	array = 'array',
	range = 'range',
	date_range = 'date_range',
}

export type BodyType = {
	id: string;
	createdAt: string;
	updatedAt: string;
	body: BodyTypeEnum;
	icon: string | null;
	car?: CarType;
};

export type FuelType = {
	id: string;
	createdAt: string;
	updatedAt: string;
	fuelType: string;
	engines?: string[];
};

export type EngineType = {
	id: string;
	createdAt: string;
	updatedAt: string;
	volume: number;
	capacity: number;
	modelName: string;
	isElectro: boolean;
	wasteCity: number;
	wasteOutOfCity: number;
	averageConsumption: number;
	fuel: FuelType;
	cars?: CarType[];
};

export type EngineFilter = {
	id: string;
	createdAt: string;
	updatedAt: string;
	fuelType: any;
	engines?: EngineType[];
};

export type ColorType = {
	id: string;
	createdAt: string;
	updatedAt: string;
	color: string;
	hex: string;
	cars?: CarType[];
};

export type TransmissionType = {
	id: string;
	createdAt: string;
	updatedAt: string;
	transmission: string;
	cars?: CarType[];
};

export type CurrencyIconsType = {
	[key in CurrencyEnum]: ReactNode;
};

export enum CurrencyEnum {
	USD = 'USD',
	EUR = 'EUR',
	UAH = 'UAH',
	BTC = 'BTC',
}

export type CarType = {
	id: string;
	createdAt: string;
	updatedAt: string;
	price: number;
	currency: CurrencyEnum;
	name: string;
	race: number;
	createYear: string;
	availableCar: number;
	inStock: boolean;
	images: string[];
	mainImage: number;
	seats: number;
	brand: BrandType;
	model: ModelType;
	drive: DriveType;
	bodyType: BodyType;
	engine: EngineType;
	color: ColorType;
	transmission: TransmissionType;
};

export type RequestSuccessful = {
	success: boolean;
};

export type PropPasswordInput = {
	passwordValidate:
		| React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
		| undefined;
};

export type PropInputConfirmation = {
	confirmationPasswordValidate:
		| React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
		| undefined;
};

export interface StatePasswordInput {
	password: string;
	showPassword: boolean;
}

export type CurrencyType = {
	currentCurrency: CurrencyEnum;
};

export type paginationData = {
	cars: CarType[];
	totalAmount: number;
};

export type ImageCard = {
	width: string;
	margin: string;
};

export type DefaultErrorsFeedbackType = {
	name: string;
	phone: string;
	isAgreedPolicy: boolean;
};

export type DefaultFeedbackType = {
	phone: string;
	comment: string;
	name: string;
};
