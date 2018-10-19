import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./EventCard.module.scss";
import { availableWorkingGroups } from "../../constants";
import { Body1, Body2, H2 } from "../Typography";

const EventCard = ({
  workingGroupName,
  title,
  subtitle,
  text,
  date = "01 jan",
  color = "turquoise",
}) => {
  const group = availableWorkingGroups.find(
    group => group.name === workingGroupName
  );

  if (!group) return null;

  return (
    <div className={cn(styles.root, color && styles[color])}>
      <div className={styles.date}>
        <span>{date}</span>
      </div>
      <div className={styles.decorator}>{group.name}</div>
      <H2 bottom="xsmall" bold className={styles.title}>
        {title}
      </H2>
      <Body2 bottom="small" className={styles.subtitle}>
        {subtitle}
      </Body2>
      <Body1 light>{text}</Body1>
    </div>
  );
};

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string,
  color: PropTypes.oneOf([
    "turquoise",
    "yellow",
    "pink",
    "purple",
    "orange",
    "blue",
    "green",
  ]),
};

export default EventCard;
