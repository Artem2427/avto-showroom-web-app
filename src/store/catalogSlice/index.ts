import { createSlice } from '@reduxjs/toolkit';

import { DEFAULT_FILTERS } from '@/constants/filters';
import { storageService } from '@/services/StorageService';

import { DefaultFilterType, FilterFieldEnum, LabelsType } from '../../type';

interface FilterState {
	carFilters: DefaultFilterType;
}

const DATE_FIELDS_VALUES = [FilterFieldEnum.createYear];

const initialState: FilterState = {
	carFilters: {},
};

const catalogSlice = createSlice({
	name: 'catalog',
	initialState,
	reducers: {
		updateFromStorage(state, { payload: { data } }) {
			state.carFilters = data || DEFAULT_FILTERS;
		},
		handleFilter(state, { payload: { field, id, name } }) {
			let newData: string[] = [];
			let newLabels: LabelsType[] = [];
			if (
				state.carFilters[field].values.length > 0 &&
				state.carFilters[field].values.includes(id)
			) {
				newData = state.carFilters[field].values.filter((el) => el !== id);
				newLabels = state.carFilters[field].labels.filter((el) => el.id !== id);
			} else {
				newData = [...state.carFilters[field].values, id];
				newLabels = state.carFilters[field].labels.length
					? [
							...state.carFilters[field].labels,
							{
								id: id,
								label: name,
								field: field,
							},
					  ]
					: [
							{
								id: id,
								label: name,
								field: field,
							},
					  ];
			}
			state.carFilters = {
				...state.carFilters,
				[field]: {
					...state.carFilters[field],
					values: newData,
					labels: newLabels,
				},
			};
			storageService.update('catalog', state.carFilters);
		},
		handleRangeFilter(state, { payload: { from, to, field } }) {
			if (from) {
				state.carFilters = {
					...state.carFilters,
					[field]: {
						...state.carFilters[field],
						from: !DATE_FIELDS_VALUES.includes(field)
							? from
							: new Date(String(from)).toISOString(),
						to: !DATE_FIELDS_VALUES.includes(field)
							? to
							: new Date(String(to)).toISOString(),
						labels: [
							{
								label: [from, to],
								field: field,
							},
						],
					},
				};
			} else {
				state.carFilters = {
					...state.carFilters,
					[field]: {
						...state.carFilters[field],
						from: from,
						to: to,
						labels: [],
					},
				};
			}
			storageService.update('catalog', state.carFilters);
		},
	},
});

export const { handleFilter, handleRangeFilter, updateFromStorage } =
	catalogSlice.actions;
export default catalogSlice.reducer;
