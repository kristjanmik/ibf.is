import React from "react";
import PropTypes from "prop-types";
import styles from "./Avatar.module.scss";

const Avatar = ({ imageUrl, altText }) => (
  <img src={imageUrl} alt={altText} className={styles.root} />
);

Avatar.propTypes = {};

export default Avatar;
