import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    setIdForYoutube,
    setRoomId,
    setType,
    setUrlFromInput,
} from '../../../../redux/slices/playerDataSlice';
import { v4 as uuid } from 'uuid';
import styles from './Buttons.module.css';

const ButtonsGroup = ({ handlePlay }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const typePlayer = useSelector((state) => state.player.type);

    const resetStore = () => {
        dispatch(setType(null));
        dispatch(setIdForYoutube(null));
    };

    const handleBackUp = () => {
        navigate(`../${typePlayer}`, { replace: true });
        resetStore();
    };

    const handleCreateRoom = () => {
        const roomId = uuid();
        navigate(`${roomId}`, { replace: true });
    };

    const handleRedirectHome = () => {
        navigate(`/`, { replace: true });
        resetStore();
        dispatch(setUrlFromInput(null));
    };

    return (
        <>
            <button className={styles.buttonPlay} onClick={handlePlay}>
                <span>
                    <ion-icon name="caret-forward-outline"></ion-icon>
                </span>
            </button>
            <div className={styles.group}>
                <button className={styles.buttonPlay} onClick={handleBackUp}>
                    <span style={{ background: 'none' }}>
                        <ion-icon name="return-up-back-outline"></ion-icon>
                    </span>
                </button>
                <button
                    className={styles.buttonPlay}
                    onClick={handleCreateRoom}
                >
                    <span style={{ background: 'none' }}>
                        <ion-icon name="people-outline"></ion-icon>
                    </span>
                </button>
                <button
                    className={styles.buttonPlay}
                    onClick={handleRedirectHome}
                >
                    <span style={{ background: 'none' }}>
                        <ion-icon name="home-outline"></ion-icon>
                    </span>
                </button>
            </div>
        </>
    );
};

export default ButtonsGroup;
