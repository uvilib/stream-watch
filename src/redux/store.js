import { configureStore } from '@reduxjs/toolkit';
import { socketMiddleware } from '../middleware/socketMiddleware';
import playerDataReducer from './slices/playerDataSlice';
import roomReducer from './slices/roomSlice';
import userDataReducer from './slices/userDataSlice';

export const store = configureStore({
    reducer: {
        player: playerDataReducer,
        user: userDataReducer,
        room: roomReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(socketMiddleware()),
});
