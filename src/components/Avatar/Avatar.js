import React from "react";
import styles from "./Avatar.module.scss";

const Avatar = ({ imageUrl, altText }) => (
  <img src={imageUrl} alt={altText} className={styles.root} />
);

export default Avatar;
