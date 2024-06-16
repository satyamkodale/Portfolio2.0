import React from "react";
import classNames from "classnames";
import styles from "./aboutMenuStyles.module.css";

const AboutSubheading = ({ title, content, active, onClick, menuItem }) => {
  const subContainerClass = `subContainer${menuItem}`;

  return (
    <div
      className={classNames(subContainerClass, {
        [styles.activeSubheading]: active,
      })}
      onClick={onClick}
    >
      <h3 className={styles.pContainerh3}>{title}</h3>
      <div className={styles.pContainer}>
        {/* Use a <div> instead of a <p> here */}
        <div className={styles.pContainerdiv}>{content}</div>
      </div>
    </div>
  );
};

export default AboutSubheading;
