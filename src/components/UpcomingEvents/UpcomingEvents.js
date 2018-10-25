import React from "react";
import styles from "./UpcomingEvents.module.scss";
import Slider from "../Slider";
import EventCard from "../EventCard";

const UpcomingEvents = ({ events }) => {
  if (!events.length) {
    return null;
  }

  return (
    <div className={styles.root}>
      <Slider>
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
      </Slider>
    </div>
  );
};

export default UpcomingEvents;
