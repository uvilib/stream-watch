import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Card from './components/Card';
import { cardsBlocks } from './constants/cardsBlocks';
import { triggerMiddleware } from './redux/slices/userDataSlice';
import styles from './styles/App.module.css';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(triggerMiddleware());
    }, []);

    return (
        <div className={styles.container}>
            {cardsBlocks.map((item, index) => (
                <Card
                    key={index}
                    title={item.title}
                    description={item.description}
                    url={item.url}
                    image={item.image}
                />
            ))}
        </div>
    );
};

export default App;
