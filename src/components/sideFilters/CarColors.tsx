import React from 'react';

import {
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
} from '@mui/material';

import { defaultCatalog } from '@/helpers';
import { handleFilter } from '@/store/catalogSlice';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { FilterFieldEnum } from '../../type';

const CarColors = () => {
	const dispatch = useAppDispatch();
	const filters = useAppSelector((state) => state.filter.filters);
	const catalog = useAppSelector((state) => state.catalog.carFilters);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(
			handleFilter({
				field: FilterFieldEnum.color,
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
				{filters?.colors.map((color, index) => (
					<FormControlLabel
						control={
							<Checkbox
								checked={defaultCatalog(catalog).color.values.includes(
									color.id
								)}
								name={color.color}
								onChange={handleChange}
								sx={{
									color: color.hex,
									'&.Mui-checked': {
										color: color.hex,
									},
								}}
								value={color.id}
							/>
						}
						key={index}
						label={capitalizeFirstLetter(color.color)}
						name={color.color}
					/>
				))}
			</FormGroup>
		</FormControl>
	);
};

export default CarColors;
