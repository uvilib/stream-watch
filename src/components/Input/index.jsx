import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { inputData } from '../../constants/inputData';
import { useDispatch, useSelector } from 'react-redux';
import {
    setType,
    setIdForYoutube,
    setUrlFromInput,
} from '../../redux/slices/playerDataSlice';
import './input.scss';

const Input = () => {
    const url = useSelector((state) => state.player.url);
    const [value, setValue] = useState(url || '');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const typePlayer = useLocation()?.pathname?.replace('/', '');
    const regExp = /(?<=v=|v\/|vi=|vi\/|youtu.be\/)[a-zA-Z0-9_-]{11}/;

    const onChange = (e) => {
        setValue(e.target.value);
    };
    const handleSubmit = () => {
        const videoId = value.match(regExp);

        dispatch(setType(typePlayer));
        dispatch(setUrlFromInput(value));

        dispatch(setIdForYoutube(videoId[0])); // Здесь нужен switch по типу, либо что нибудь для адаптива инпута.

        navigate(`${videoId[0]}`, { replace: true });
    };
    const handleReset = () => {
        setValue('');
    };

    const { placeholder, type, title, label, image } = inputData[typePlayer];

    return (
        <div style={{ paddingTop: '30px' }}>
            <div className={`card card--${type}`}>
                <h2 className="title__block">
                    <img className="icon" src={image} alt={title} />
                    {title}
                </h2>
                <label className="input">
                    <input
                        className="input__field"
                        type="text"
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                    />
                    <span className="input__label">{label}</span>
                </label>

                <div className="button-group">
                    <button onClick={handleSubmit}>Send</button>
                    <button type="reset" onClick={handleReset}>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Input;
