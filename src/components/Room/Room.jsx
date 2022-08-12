import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { joinTheRoom } from '../../redux/slices/roomSlice';

const Room = () => {
    const dispatch = useDispatch();
    const roomId = useLocation()?.pathname?.split('/').pop();
    console.log(roomId);

    useEffect(() => {
        dispatch(joinTheRoom(roomId));
    }, []);

    return <div>Room</div>;
};

export default Room;
