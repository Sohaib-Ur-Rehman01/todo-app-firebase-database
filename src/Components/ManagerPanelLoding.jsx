import React from "react";
import styles from "./ManagerPanelLoader.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}>
        <div className={styles.loaderDot}></div>
        <div className={styles.loaderDot}></div>
        <div className={styles.loaderDot}></div>
      </div>
    </div>
  );
};

export default Loader;
