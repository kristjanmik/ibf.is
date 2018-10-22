import React from "react";
import PropTypes from "prop-types";
import styles from "./EventCard.module.scss";
import { workingGroups } from "../../data/working-groups";
import { Body2, Body3, H2 } from "../Typography";

const EventCard = ({
  workingGroupName,
  title,
  subtitle,
  text,
  date = "01 jan",
  color,
}) => {
  const group = workingGroups.find(
    group => group.name === workingGroupName
  );

  if (!group) return null;

  return (
    <div className={styles.root}>
      <div className={styles.date} style={{ background: color }}>
        <span>{date}</span>
      </div>
      <div className={styles.decorator} style={{ color }}>{group.name}</div>
      <H2 bottom="xsmall" bold className={styles.title}>
        {title}
      </H2>
      <Body3 bottom="small" className={styles.subtitle}>
        {subtitle}
      </Body3>
      <Body2 light>{text}</Body2>
    </div>
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
