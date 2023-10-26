import React from "react";
import styles from "./Content.module.css";

import { useSelector } from "react-redux";

const Content = () => {
  const contentValue = useSelector((state) => state.content.value);

  return (
    <div className={styles.parent_div}>
      <div>{contentValue}</div>
    </div>
  );
};

export default Content;
