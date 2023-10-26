import React from "react";
import styles from "./MenuBar.module.css";
import FolderCard from "../FolderCard/FolderCard";
import { useSelector } from "react-redux";

const MenuBar = () => {
  const data = useSelector((state) => state.data);

  return (
    <div className={styles.parent_div}>
      <div className={styles.title_div}>code for</div>
      <div className={styles.folder_bar_container}>
        {data.map((item) => (
          <FolderCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default MenuBar;
