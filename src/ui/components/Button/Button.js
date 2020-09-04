import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";
import cn from "classnames";

const Button = ({ children, size, style, onClick }) => (
  <button
    type="submit"
    style={style}
    className={cn(styles.root, styles[size])}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  size: PropTypes.string,
};

export default Button;
