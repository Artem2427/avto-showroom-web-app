import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CurrencyEnum, FiltersType } from '../../type';

type FilterState = {
	filters: FiltersType | null;
	currency: CurrencyEnum;
};

const initialState: FilterState = {
	filters: null,
	currency: CurrencyEnum.USD,
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setFilters(state, action: PayloadAction<FiltersType>) {
			if (action.payload) {
				state.filters = action.payload;
			}
		},
		setCurrency(state, action: PayloadAction<CurrencyEnum>) {
			if (state.currency !== action.payload) state.currency = action.payload;
		},
	},
});

export const { setFilters, setCurrency } = filterSlice.actions;
export default filterSlice.reducer;
