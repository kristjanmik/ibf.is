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
            date={event.date}
            title={event.title}
            subtitle={event.subtitle}
            text={event.text}
            color={event.color}
            url={event.url}
          />
        ))}
      </Slider>
    </div>
  );
};

export default UpcomingEvents;
