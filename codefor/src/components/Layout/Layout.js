import React from "react";
import styles from "./Layout.module.css";

import MenuBar from "../MenuBar/MenuBar";
import Content from "../Content/Content";

const Layout = () => {
  return (
    <div className={styles.parent_div}>
      <MenuBar />
      <Content />
    </div>
  );
};

export default Layout;
