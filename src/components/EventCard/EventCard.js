import React from "react";
import PropTypes from "prop-types";
import styles from "./EventCard.module.scss";
import { availableWorkingGroups } from "../../constants";

const EventCard = ({ workingGroup, title, subtitle, text, date }) => (
  <div className={styles.root} />
);

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date),
  workingGroup: PropTypes.oneOf(availableWorkingGroups),
};

export default EventCard;
