import React, { ChangeEvent } from 'react';

import { FormControl, FormControlLabel, FormGroup } from '@mui/material';

import { defaultCatalog } from '@/helpers';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { handleFilter } from '@/store/catalogSlice';
import { FilterFieldEnum } from '@/type';

import { StyledCheckbox } from './style';

const BrandsCar = () => {
	const dispatch = useAppDispatch();
	const filters = useAppSelector((state) => state.filter.filters);
	const catalog = useAppSelector((state) => state.catalog.carFilters);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(
			handleFilter({
				field: FilterFieldEnum.brand,
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
				{filters?.brands.map((brand, index) => (
					<FormControlLabel
						control={
							<StyledCheckbox
								checked={defaultCatalog(catalog).brand.values.includes(
									brand.id
								)}
								onChange={handleChange}
								value={brand.id}
							/>
						}
						key={index}
						label={capitalizeFirstLetter(brand.name)}
						name={brand.name}
					/>
				))}
			</FormGroup>
		</FormControl>
	);
};

export default BrandsCar;
