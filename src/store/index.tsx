import { configureStore } from '@reduxjs/toolkit';

import catalogReducer from './catalogSlice';
import filterReducer from './filterSlise';
import userReducer from './userSlice';

const store = configureStore({
	reducer: {
		user: userReducer,
		catalog: catalogReducer,
		filter: filterReducer,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
