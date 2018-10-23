import React from "react";
import styles from "./Arrow.module.scss";
import cn from "classnames";
import padding from "../../utils/padding";

const Arrow = ({
  color = "#00468A",
  alignment = "horizontal",
  top,
  bottom,
  className,
}) =>
  alignment === "horizontal" ? (
    <div className={cn(className, styles.root, padding(top, bottom))}>
      <svg width="90" height="16" viewBox="0 0 90 16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M88 8H1"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="square"
          />
          <path
            fill={color}
            d="M81 1.39l.984-.89L90 8l-8.016 7.5-.984-.89L88.031 8z"
          />
      </svg>
    </div>
  ) : (
    <div className={cn(className, styles.root, padding(top, bottom))}>
      <svg width="16" viewBox="0 0 16 90" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 88V1"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="square"
        />
        <path
          fill={color}
          d="M14.61 81l.89.984L8 90 .5 81.984 1.39 81 8 88.031z"
        />
      </svg>
    </div>
  );

export default Arrow;
