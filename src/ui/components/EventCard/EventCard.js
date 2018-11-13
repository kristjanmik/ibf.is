import React from "react";
import PropTypes from "prop-types";
import styles from "./EventCard.module.scss";
import { workingGroups } from "src/data/working-groups";
import { Body2, Body4, H2 } from "../Typography";

const splitNum = text => {
  return [text.match(/\d+/g), text.match(/[a-zA-Z]+/g)];
};
const EventCard = ({
  workingGroupName,
  title,
  subtitle,
  text,
  date,
  color,
  url,
}) => {
  const group = workingGroups.find(group => group.name === workingGroupName);

  if (!group) return null;

  const [dateNum, dateStr] = splitNum(date);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.root}
    >
      <div className={styles.date} style={{ background: color }}>
        <p className={styles.dateNumber}>{dateNum}</p>
        <p className={styles.dateString}>{dateStr}</p>
      </div>
      <div className={styles.decorator} style={{ color }}>
        {group.name}
      </div>
      <H2 bold bottom="xsmall" className={styles.title}>
        {title}
      </H2>
      <Body4 bottom="small" className={styles.subtitle}>
        {subtitle}
      </Body4>
      <Body2 light>{text}</Body2>
    </a>
  );
};

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string,
  color: PropTypes.string.isRequired,
};

export default EventCard;
