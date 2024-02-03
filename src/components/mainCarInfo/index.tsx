import React, { FC } from 'react';

import { Stack, Typography } from '@mui/material';

import { CURRENCY_ICONS } from '@/constants/filters';
import { CarType } from '@/type';

import CarCharacteristics from '../carCharacteristics';
import CarImageCarousel from '../carImageCarousel';

import {
	StyledH4,
	StyledInStockBox,
	StyledHotPrice,
	StyledMainInfo,
	StyledTypography,
	StyledIcon,
} from './style';

type Props = {
	car: CarType | null;
};

const MainCarInfo: FC<Props> = ({ car }) => {
	return (
		<Stack>
			{car && car.images?.length && (
				<CarImageCarousel images={car.images} mainImage={car.mainImage - 1} />
			)}
			<StyledH4>
				{`${car && new Date(car.createYear).getFullYear()} ${car && car.name}`}
			</StyledH4>
			<StyledInStockBox>
				<Typography>
					{car && car.inStock ? 'in stock' : 'not in stock'}
				</Typography>
			</StyledInStockBox>
			<StyledMainInfo>
				<StyledTypography>{car && Math.ceil(car.price)}</StyledTypography>
				<StyledIcon>{car && CURRENCY_ICONS[car.currency]}</StyledIcon>
				<StyledHotPrice>- hot price</StyledHotPrice>
			</StyledMainInfo>
			<CarCharacteristics car={car} />
		</Stack>
	);
};

export default MainCarInfo;
