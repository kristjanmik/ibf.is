import React from "react";
import styles from "./UpcomingEvents.module.scss";
import CardCarousel from "../CardCarousel";
import EventCard from "../EventCard";

const UpcomingEvents = ({ events }) => {
  if (!events.length) {
    return null;
  }

  return (
    <div className={styles.root}>
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

export default UpcomingEvents;
