import React from 'react';

import { FormControl, FormControlLabel, FormGroup } from '@mui/material';

import { defaultCatalog } from '@/helpers';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { handleFilter } from '@/store/catalogSlice';
import { FilterFieldEnum } from '@/type';

import { StyledCheckbox } from './style';

const EngineTypes = () => {
	const dispatch = useAppDispatch();
	const filters = useAppSelector((state) => state.filter.filters);
	const catalog = useAppSelector((state) => state.catalog.carFilters);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(
			handleFilter({
				field: FilterFieldEnum.fuelType,
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
				{filters?.fuels.map((fuel, index) => (
					<FormControlLabel
						control={
							<StyledCheckbox
								checked={defaultCatalog(catalog).fuelType.values.includes(
									fuel.id
								)}
								name={fuel.fuelType}
								onChange={handleChange}
								value={fuel.id}
							/>
						}
						key={index}
						label={capitalizeFirstLetter(fuel.fuelType)}
					/>
				))}
			</FormGroup>
		</FormControl>
	);
};

export default EngineTypes;
