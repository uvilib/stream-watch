import React, { useEffect } from "react";
import Card from "../Card";
import { cardsBlocks } from "../../constants/cardsBlocks";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <>
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
    </>
  );
};

export default Main;
