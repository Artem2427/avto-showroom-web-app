import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserType } from '@/type';

type UserState = {
	obj: UserType | null;
};
const initialState: UserState = {
	obj: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addUser(state, action: PayloadAction<UserType | null>) {
			state.obj = action.payload;
		},
	},
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
