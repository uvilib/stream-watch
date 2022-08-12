import React, { useEffect, useRef, useState } from 'react';
import YouTube from 'react-youtube';
import { useSelector } from 'react-redux';
import styles from './Youtube.module.css';
import ButtonsGroup from './components/Buttons';

const YoutubeView = () => {
    const videoId = useSelector((state) => state?.player?.youtube?.videoId);
    const [playerState, setPlayerState] = useState();

    const player = useRef(null);
    const hover = useRef(null);

    useEffect(() => {
        switch (playerState) {
            case 1:
                hover.current.style.display = 'none';
                break;
            case 2:
                hover.current.style.display = 'flex';
                break;
            default:
                break;
        }
    }, [playerState]);

    const handlePlayerState = async () => {
        const playerStateValue = await player.current
            .getInternalPlayer()
            .getPlayerState();
        setPlayerState(playerStateValue);
    };

    const handlePlay = async () => {
        await player.current.getInternalPlayer().playVideo();
        hover.current.style.display = 'none';
    };

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.hover} ref={hover}>
                    <div className={styles.content}>
                        <ButtonsGroup handlePlay={handlePlay} />
                    </div>
                </div>
                <YouTube
                    videoId={videoId}
                    opts={opts}
                    ref={player}
                    className={styles.player}
                    onPlay={handlePlayerState}
                    onPause={handlePlayerState}
                />
            </div>
        </>
    );
};

export default YoutubeView;
