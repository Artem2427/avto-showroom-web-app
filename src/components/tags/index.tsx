import React, { useMemo } from 'react';

import { Chip } from '@mui/material';

import { DEFAULT_FILTERS } from '@/constants/filters';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { storageService } from '@/services/StorageService';
import {
	handleFilter,
	handleRangeFilter,
	updateFromStorage,
} from '@/store/catalogSlice';

import { FilterFieldEnum, LabelsType, DefaultFilterType } from '../../type';

import { StyledStack } from './style';

const Tags = () => {
	const dispatch = useAppDispatch();
	const catalog: DefaultFilterType = useAppSelector(
		(state) => state.catalog.carFilters
	);

	const selectedFilters = useMemo(
		() =>
			Object.values(catalog)
				.map((el) => {
					if (el) return el.labels;
				})
				.flat(),
		[catalog]
	);

	const handleDeleteTag = (el: LabelsType | null) => {
		if (el) {
			if (
				el.field === FilterFieldEnum.createYear ||
				el.field === FilterFieldEnum.price ||
				el.field === FilterFieldEnum.race
			) {
				dispatch(
					handleRangeFilter({
						field: el.field,
						from: null,
						to: null,
					})
				);
			} else {
				dispatch(
					handleFilter({
						field: el.field,
						id: el.id,
						name: el.label,
					})
				);
			}
		}
	};

	const handleDeleteAll = () => {
		storageService.remove('catalog');
		dispatch(updateFromStorage({ field: 'catalog', data: DEFAULT_FILTERS }));
	};

	const capitalizeFirstLetter = (el: string) => {
		return el.charAt(0).toUpperCase() + el.slice(1);
	};

	const parseArray = (el: LabelsType) =>
		el.field === FilterFieldEnum.createYear
			? `Year: ${el.label[0]} | ${el.label[1]}`
			: `${capitalizeFirstLetter(el.field)}: ${el.label[0]} | ${el.label[1]}`;

	return (
		<StyledStack>
			{selectedFilters.length > 0 && (
				<Chip label={'Delete all'} onDelete={handleDeleteAll} />
			)}
			{selectedFilters.map((el, index) => (
				<Chip
					key={index}
					label={
						el
							? Array.isArray(el.label)
								? parseArray(el)
								: capitalizeFirstLetter(el.label)
							: ''
					}
					onDelete={() => handleDeleteTag(el ? el : null)}
				/>
			))}
		</StyledStack>
	);
};

export default Tags;
