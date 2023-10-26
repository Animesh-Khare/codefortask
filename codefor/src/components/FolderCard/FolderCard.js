import React, { useState } from "react";
import styles from "./FolderCard.module.css";

// icons from material ui
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";

import FileCard from "../FileCard/FileCard";

const FolderCard = (props) => {
  const [isfileOpen, setisFileOpen] = useState(false);

  const iconHandler = () => {
    setisFileOpen(!isfileOpen);
  };

  return (
    <div>
      <div className={styles.folder_name_text}>
        <div
          onClick={iconHandler}
          style={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
          {
            <KeyboardArrowRightIcon
              className={`${styles.arrow_icon} ${
                isfileOpen ? styles.transform_icon : ""
              }`}
            />
          }
          <FolderOpenOutlinedIcon size="small" />
          {props.data.folderName}
        </div>
      </div>
      {isfileOpen && (
        <div>
          {props.data.files?.map((item) => (
            <FileCard filedata={item} key={item.idfile} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FolderCard;
