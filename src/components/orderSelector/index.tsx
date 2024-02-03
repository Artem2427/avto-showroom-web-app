import React, { FC, Dispatch, SetStateAction } from 'react';

import { FormControl, MenuItem, SelectChangeEvent } from '@mui/material';

import { IPagination, Ordering } from '@/type';

import { StyledSelect } from './style';

type Props = {
	isEmptyCatalog: boolean;
	paginationRequest: IPagination;
	setPaginationRequest: Dispatch<SetStateAction<IPagination>>;
};

const OrderSelector: FC<Props> = ({
	isEmptyCatalog,
	paginationRequest,
	setPaginationRequest,
}) => {
	const handleOrder = (event: SelectChangeEvent<unknown>) => {
		setPaginationRequest((prev) => ({
			...prev,
			ordering: event.target.value as Ordering,
		}));
	};

	const OPTIONS = [
		{ name: 'Created at', value: Ordering.createdAt },
		{ name: 'Price', value: Ordering.price },
		{ name: 'Year', value: Ordering.createYear },
		{ name: 'Race', value: Ordering.race },
	];

	return (
		<FormControl disabled={!isEmptyCatalog} fullWidth>
			<StyledSelect onChange={handleOrder} value={paginationRequest.ordering}>
				{OPTIONS.map((option, index) => (
					<MenuItem key={index} value={option.value}>
						{option.name}
					</MenuItem>
				))}
			</StyledSelect>
		</FormControl>
	);
};

export default OrderSelector;
