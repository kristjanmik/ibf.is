import React from "react";
import PropTypes from "prop-types";
import styles from "./DateCube.module.scss";

const splitNum = text => {
  return [text.match(/\d+/g), text.match(/[a-zA-Z]+/g)];
};
const DateCube = ({ color, date }) => {
  const [dateNum, dateStr] = splitNum(date);

  return (
    <div className={styles.date} style={{ background: color }}>
      <p className={styles.dateNumber}>{dateNum}</p>
      <p className={styles.dateString}>{dateStr}</p>
    </div>
  );
};

DateCube.propTypes = {
  color: PropTypes.string.isRequired,
  date: PropTypes.string,
};

export default DateCube;
