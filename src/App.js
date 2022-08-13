import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Input from "./components/Input";
import Main from "./components/Main";
import Room from "./components/Room/Room";
import YoutubeView from "./components/Youtube";
import { triggerMiddleware } from "./redux/slices/userDataSlice";
import styles from "./styles/App.module.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(triggerMiddleware());
  }, []);

  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/youtube" exact element={<Input />} />
      <Route path="/youtube/:id" element={<YoutubeView />} />
      <Route path="/youtube/:id/:roomId" element={<Room />} />
    </Routes>
  );
};

export default App;
