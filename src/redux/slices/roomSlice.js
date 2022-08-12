import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    roomId: null,
};

export const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        joinTheRoom: () => {},
        joinedTheRoomSuccess: (state, action) => {
            state.roomId = action.payload;
        },
    },
});

export const { joinTheRoom, joinedTheRoomSuccess } = roomSlice.actions;

export default roomSlice.reducer;
