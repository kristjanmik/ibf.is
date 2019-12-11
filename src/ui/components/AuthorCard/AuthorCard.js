import React from "react";
import PropTypes from "prop-types";
import styles from "./AuthorCard.module.scss";
import { Body4, H3 } from "../Typography";

const EventCard = ({ name, title, profile }) => (
  <div className={styles.root}>
    <img src={profile} alt={title} className={styles.profile} />
    <div className={styles.text}>
      <H3>{name}</H3>
      <Body4>{title}</Body4>
    </div>
  </div>
);

EventCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  profile: PropTypes.string.isRequired,
};

export default EventCard;
