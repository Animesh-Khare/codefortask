import React from "react";
import styles from "./FileCard.module.css";
import { useDispatch } from "react-redux";
import { storeContentData } from "../../slice/contentSlice";
import FilePresentIcon from "@mui/icons-material/FilePresent";

const FileCard = (props) => {
  const dispatch = useDispatch();

  const showContentHandler = (content) => {
    dispatch(storeContentData(content));
  };

  return (
    <div className={styles.parent_card}>
      <div
        className={styles.file_name}
        onClick={() => showContentHandler(props.filedata.content)}
      >
        <FilePresentIcon size="small" />
        {props.filedata.name}
      </div>
    </div>
  );
};

export default FileCard;
