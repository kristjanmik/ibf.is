import React from "react";
import PropTypes from "prop-types";
import styles from "./EventCard.module.scss";
import { Body2, Body4, H2 } from "../Typography";
import DateCube from "src/ui/components/DateCube";

const EventCard = ({
  workingGroupName,
  title,
  subtitle,
  text,
  date,
  color,
  url,
}) => {
  return (
    <a
      key={url}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.root}
    >
      <DateCube date={date} color={color} />
      <div className={styles.decorator} style={{ color }}>
        {workingGroupName}
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
