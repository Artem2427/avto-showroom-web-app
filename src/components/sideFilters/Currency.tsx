import React, { FC, useEffect, useState } from 'react';

import { Box, FormControl, MenuItem, SelectChangeEvent } from '@mui/material';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { catalogService } from '@/services/CatalogService';
import { setCurrency } from '@/store/filterSlise';
import { CurrencyEnum } from '@/type';

import { StyledSelect } from './style';

const Currency: FC = () => {
	const currentCurrency = useAppSelector((state) => state.filter.currency);
	const dispatch = useAppDispatch();
	const [isOpen, setIsOpen] = useState(false);

	const handleCurrencyType = async (event: SelectChangeEvent<unknown>) => {
		if (event.target.value) {
			await catalogService.changeCurrency(event.target.value as CurrencyEnum);
			dispatch(setCurrency(event.target.value as CurrencyEnum));
		}
	};

	useEffect(() => {
		const handler = () => {
			setIsOpen(false);
		};
		window.addEventListener('scroll', handler);
		return () => {
			window.removeEventListener('scroll', handler);
		};
	}, []);

	return (
		<Box>
			<FormControl fullWidth>
				<StyledSelect
					onChange={handleCurrencyType}
					onClose={() => {
						setIsOpen(false);
					}}
					onOpen={() => {
						setIsOpen(true);
					}}
					open={isOpen}
					value={currentCurrency || ''}
				>
					{(Object.keys(CurrencyEnum) as Array<keyof typeof CurrencyEnum>).map(
						(el, index) => (
							<MenuItem key={index} value={el}>
								{el}
							</MenuItem>
						)
					)}
				</StyledSelect>
			</FormControl>
		</Box>
	);
};

export default Currency;
