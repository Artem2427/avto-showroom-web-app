import React, { MouseEvent } from 'react';

import { Typography } from '@mui/material';

import { defaultCatalog } from '@/helpers';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { FilterFieldEnum } from '@/type';

import { CAR_ICONS } from '../../constants/filters';
import Palette from '../../palette';
import { handleFilter } from '../../store/catalogSlice';

import { StyledToggleButton, StyledToggleButtonGroup } from './style';

const CarTypes = () => {
	const dispatch = useAppDispatch();
	const filters = useAppSelector((state) => state.filter.filters);
	const catalog = useAppSelector((state) => state.catalog.carFilters);

	const handleChange = (
		event: MouseEvent<HTMLElement>,
		value: { id: string; name: string }
	) => {
		dispatch(
			handleFilter({
				field: FilterFieldEnum.bodyType,
				id: value.id,
				name: value.name,
			})
		);
	};

	return (
		<StyledToggleButtonGroup>
			{filters?.bodyTypes.map((body, index) => (
				<StyledToggleButton
					key={index}
					onClick={handleChange}
					selected={defaultCatalog(catalog).bodyType.values.includes(body.id)}
					value={{ id: body.id, name: body.body }}
				>
					{CAR_ICONS[body.body]}
					<Typography
						sx={{
							color: Palette.light,
						}}
					>
						{body.body}
					</Typography>
				</StyledToggleButton>
			))}
		</StyledToggleButtonGroup>
	);
};

export default CarTypes;
