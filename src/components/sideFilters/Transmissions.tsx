import React from 'react';

import { FormControl, FormControlLabel, FormGroup } from '@mui/material';

import { defaultCatalog } from '@/helpers';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { handleFilter } from '@/store/catalogSlice';
import { FilterFieldEnum } from '@/type';

import { StyledCheckbox } from './style';

const TransmissionsCar = () => {
	const dispatch = useAppDispatch();
	const filters = useAppSelector((state) => state.filter.filters);
	const catalog = useAppSelector((state) => state.catalog.carFilters);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(
			handleFilter({
				field: FilterFieldEnum.transmission,
				id: event.target.value,
				name: event.target.name,
			})
		);
	};

	const capitalizeFirstLetter = (string: string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	return (
		<FormControl>
			<FormGroup>
				{filters?.transmissions.map((transmission, index) => (
					<FormControlLabel
						control={
							<StyledCheckbox
								checked={defaultCatalog(catalog).transmission.values.includes(
									transmission.id
								)}
								name={transmission.transmission}
								onChange={handleChange}
								value={transmission.id}
							/>
						}
						key={index}
						label={capitalizeFirstLetter(transmission.transmission)}
					/>
				))}
			</FormGroup>
		</FormControl>
	);
};

export default TransmissionsCar;
