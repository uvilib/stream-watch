import { io } from 'socket.io-client';
import { v4 as uuid } from 'uuid';
import { joinedTheRoomSuccess } from '../redux/slices/roomSlice';
import { setUserId } from '../redux/slices/userDataSlice';

export const socketMiddleware = () => {
    return (storeAPI) => {
        const prevId = localStorage.getItem('id-user-local');
        const id = prevId || uuid();

        const socket = io('http://localhost:5000', {
            query: { id },
            extraHeaders: {
                ContentType: 'application/json',
            },
        });

        socket.on('joinedSuccess', ({ roomId, id }) => {
            storeAPI.dispatch(joinedTheRoomSuccess(roomId));
            console.log(`Socket connect: ${id}`);
        });

        return (next) => (action) => {
            switch (action.type) {
                case 'user/triggerMiddleware':
                    storeAPI.dispatch(setUserId(id));
                    !prevId && localStorage.setItem('id-user-local', id);
                    break;
                case 'room/joinTheRoom':
                    socket.emit('joinTheRoom', action.payload);
                    break;
                default:
                    break;
            }
            return next(action);
        };
    };
};
