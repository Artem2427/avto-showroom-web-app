import {
	DataUserType,
	DefaultErrorsFeedbackType,
	DefaultFeedbackType,
	Dir,
	IPagination,
	IPassword,
	NotificationType,
	Ordering,
} from '@/type';

import { PAGE_SIZES } from './filters';

export const CURRENCY: string[] = ['USD', 'EUR', 'UAH', 'BTC'];

export const CAR_TABLE = [
	{ id: 'name', label: 'Name car', minWidth: 140 },
	{ id: 'createYear', label: 'Create year', minWidth: 140 },
	{ id: 'model', label: 'Model', minWidth: 140 },
	{ id: 'bodyType', label: 'Body type', minWidth: 140 },
	{ id: 'color', label: 'Color', minWidth: 140 },
	{ id: 'transmission', label: 'Transmission', minWidth: 140 },
	{ id: 'availableCar', label: 'Available', minWidth: 140 },
];

export const COLOR_TABLE = [
	{ id: 'hex', label: 'Color', minWidth: 80 },
	{ id: 'color', label: 'Color name', minWidth: 130 },
	{ id: 'createdAt', label: 'Created at', minWidth: 100 },
	{ id: 'actions', label: '', minWidth: 100 },
];

export const USER_TABLE = [
	{ id: 'firstName', label: 'First name', minWidth: 100 },
	{ id: 'lastName', label: 'Last name', minWidth: 100 },
	{ id: 'email', label: 'Email', minWidth: 90 },
	{ id: 'createdAt', label: 'Created at', minWidth: 80 },
	{ id: 'phone', label: 'Phone', minWidth: 50 },
];

export const BRAND_TABLE = [
	{ id: 'name', label: 'Brand name', minWidth: 130 },
	{ id: 'phone', label: 'Phone', minWidth: 100 },
	{
		id: 'createdAt',
		label: 'Created at',
		minWidth: 90,
	},
	{ id: 'actions', label: '', minWidth: 100 },
];

export const DEFAULT_USER_OBJ: DataUserType = {
	firstName: '',
	lastName: '',
	phone: '',
	email: '',
};

export const DEFAULT_PASSWORDS_STATE: IPassword = {
	currentPassword: '',
	newPassword: '',
	confirmPassword: '',
};

export const DEFAULT_NOTIFICATION_STATE: NotificationType = {
	severity: 'error',
	text: '',
};
export const FEEDBACK_TABLE = [
	{ id: 'name', label: 'Name', minWidth: 50 },
	{ id: 'phone', label: 'Phone', minWidth: 50 },
	{ id: 'comment', label: 'Comment', minWidth: 250 },
	{ id: 'createdAt', label: 'Created at', minWidth: 80 },
	{ id: 'isCall', label: 'Status', minWidth: 50 },
	{ id: 'actions', label: '', minWidth: 100 },
];

export const VALID_IMAGE_EXTENSIONS: string[] = [
	'png',
	'jpeg',
	'jpg',
	'webp',
	'jfif',
	'pjpeg',
	'pjp',
];

export const DEFAULT_FEEDBACK_FORM: DefaultFeedbackType = {
	phone: '',
	comment: '',
	name: '',
};

export const DEFAULT_ERRORS_FEEDBACK: DefaultErrorsFeedbackType = {
	name: '',
	phone: '',
	isAgreedPolicy: false,
};

export const DEFAULT_PAGINATION_REQUEST: IPagination = {
	page: 1,
	pageSize: PAGE_SIZES[0],
	searchTerm: '',
	dir: Dir.ascend,
	ordering: Ordering.createdAt,
};
