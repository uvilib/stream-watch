import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    type: null,
    url: null,
    youtube: {
        videoId: null,
    },
};

export const playerDataSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setType: (state, action) => {
            state.type = action.payload;
        },
        setIdForYoutube: (state, action) => {
            state.youtube.videoId = action.payload;
        },
        setUrlFromInput: (state, action) => {
            state.url = action.payload;
        },
    },
});

export const { setType, setIdForYoutube, setUrlFromInput } =
    playerDataSlice.actions;

export default playerDataSlice.reducer;
