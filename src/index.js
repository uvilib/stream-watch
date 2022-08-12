import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Input from './components/Input';
import Room from './components/Room/Room';
import YoutubeView from './components/Youtube';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
const app = (
    <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route index element={<App />} />
                <Route path="/youtube" exact element={<Input />} />
                <Route path="/youtube/:id" element={<YoutubeView />} />
                <Route path="/youtube/:id/:roomId" element={<Room />} />
            </Routes>
        </Provider>
    </BrowserRouter>
);
root.render(app);
