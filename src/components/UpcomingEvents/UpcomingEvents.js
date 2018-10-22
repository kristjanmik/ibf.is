import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./UpcomingEvents.module.scss";
import CardCarousel from "../CardCarousel";
import EventCard from "../EventCard";
import padding from "../../utils/padding";

const UpcomingEvents = ({ events }) => {
  if (!events.length) {
    return null;
  }

  return (
    <div className={cn(styles.root, padding(null, "xlarge"))}>
      <CardCarousel>
        {events.map(event => (
          <EventCard
            key={event.title + String(Math.random()).substr(4, 6)}
            workingGroupName={event.workingGroupName}
            title={event.title}
            subtitle={event.subtitle}
            text={event.text}
            color={event.color}
          />
        ))}
      </CardCarousel>
    </div>
  );
};

UpcomingEvents.propTypes = {};

export default UpcomingEvents;
