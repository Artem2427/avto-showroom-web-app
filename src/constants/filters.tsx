import React from 'react';

import { Euro } from '@mui/icons-material';

import CabrioletIcon from '@/components/icons/carIcons/bodyTypeIcons/CabrioletIcon';
import LimousineIcon from '@/components/icons/carIcons/bodyTypeIcons/LimousineIcon';
import BtcIcon from '@/components/icons/currency/BtcIcon';
import UahIcon from '@/components/icons/currency/UahIcon';
import UsdIcon from '@/components/icons/currency/UsdIcon';

import CoupeIcon from '../components/icons/carIcons/bodyTypeIcons/CoupeIcon';
import HatchbackIcon from '../components/icons/carIcons/bodyTypeIcons/HatchbackIcon';
import SedanIcon from '../components/icons/carIcons/bodyTypeIcons/SedanIcon';
import SuvIcon from '../components/icons/carIcons/bodyTypeIcons/SuvIcon';
import VanIcon from '../components/icons/carIcons/bodyTypeIcons/VanIcon';
import WagonIcon from '../components/icons/carIcons/bodyTypeIcons/WagonIcon';
import Palette from '../palette';
import {
	CarIconsType,
	FilterFieldEnum,
	FieldTypeEnum,
	DefaultFilterType,
	CurrencyIconsType,
} from '../type';

export const CAR_ICONS: CarIconsType = {
	sedan: <SedanIcon fill={Palette.light} />,
	suv: <SuvIcon fill={Palette.light} />,
	hatchback: <HatchbackIcon fill={Palette.light} />,
	wagon: <WagonIcon fill={Palette.light} />,
	coupe: <CoupeIcon fill={Palette.light} />,
	cabriolet: <CabrioletIcon fill={Palette.light} />,
	limousine: <LimousineIcon fill={Palette.light} />,
	van: <VanIcon fill={Palette.light} />,
};

export const CURRENCY_ICONS: CurrencyIconsType = {
	USD: <UsdIcon fill={Palette.light} />,
	EUR: <Euro fontSize="small" />,
	UAH: <UahIcon fill={Palette.light} />,
	BTC: <BtcIcon fill={Palette.light} />,
};

const DEFAULT_FILTER_VALUES = (
	field: FilterFieldEnum,
	type: FieldTypeEnum
) => ({
	field,
	type,
	from: null,
	to: null,
	disabled: false,
	values: [],
	labels: [],
});

export const DEFAULT_FILTERS: DefaultFilterType = {
	[FilterFieldEnum.price]: {
		...DEFAULT_FILTER_VALUES(FilterFieldEnum.price, FieldTypeEnum.range),
	},
	[FilterFieldEnum.race]: {
		...DEFAULT_FILTER_VALUES(FilterFieldEnum.race, FieldTypeEnum.range),
	},
	[FilterFieldEnum.createYear]: {
		...DEFAULT_FILTER_VALUES(
			FilterFieldEnum.createYear,
			FieldTypeEnum.date_range
		),
	},
	[FilterFieldEnum.bodyType]: {
		...DEFAULT_FILTER_VALUES(FilterFieldEnum.bodyType, FieldTypeEnum.array),
	},
	[FilterFieldEnum.brand]: {
		...DEFAULT_FILTER_VALUES(FilterFieldEnum.brand, FieldTypeEnum.array),
	},
	[FilterFieldEnum.color]: {
		...DEFAULT_FILTER_VALUES(FilterFieldEnum.color, FieldTypeEnum.array),
	},
	[FilterFieldEnum.drive]: {
		...DEFAULT_FILTER_VALUES(FilterFieldEnum.drive, FieldTypeEnum.array),
	},
	[FilterFieldEnum.fuelType]: {
		...DEFAULT_FILTER_VALUES(FilterFieldEnum.fuelType, FieldTypeEnum.array),
	},
	[FilterFieldEnum.transmission]: {
		...DEFAULT_FILTER_VALUES(FilterFieldEnum.transmission, FieldTypeEnum.array),
	},
};

export const PAGE_SIZES: number[] = [9, 18, 27];
