import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: null,
};

export const userDataSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        triggerMiddleware: () => {},
        setUserId: (state, action) => {
            state.id = action.payload;
        },
        getUserId: (state) => {
            return state.id;
        },
    },
});

export const { setUserId, getUserId, triggerMiddleware } =
    userDataSlice.actions;

export default userDataSlice.reducer;
