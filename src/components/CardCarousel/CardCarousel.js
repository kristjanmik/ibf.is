import React from "react";
import PropTypes from "prop-types";
import styles from "./CardCarousel.module.scss";

// Doesn't do much of anything right now. Only layout.
// Should be turned into an interaction carousel component in the future.

const CardCarousel = ({ children }) => (
  <div className={styles.root}>{children}</div>
);

CardCarousel.propTypes = {};

export default CardCarousel;
