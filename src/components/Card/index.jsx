import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({ title, description, image, url }) => {
    const navigate = useNavigate();

    const handleClickBlock = () => {
        navigate(url, { replace: false });
    };

    return (
        <div className={styles.cards} onClick={handleClickBlock}>
            <div className={styles.card}>
                <img src={image} className={styles.image} alt={title} />
                <div className={styles.overlay}>
                    <div className={styles.header}>
                        <div>
                            <h3 className={styles.title}>{title}</h3>
                        </div>
                    </div>
                    <p className={styles.description}>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
