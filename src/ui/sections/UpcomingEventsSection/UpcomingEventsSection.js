import React from "react";
import styles from "./UpcomingEventsSection.module.scss";
import Slider from "src/ui/components/Slider";
import EventCard from "src/ui/components/EventCard";

const UpcomingEventsSection = ({ events }) => {
  if (!events.length) {
    return null;
  }

  return (
    <div className={styles.root}>
      <Slider>
        {events.map(event => (
          <EventCard
            key={`${event.title}-${event.day}`}
            workingGroupName={event.workingGroupName}
            date={event.day}
            title={event.title}
            subtitle={event.subheading}
            text={event.description}
            color={event.color}
            url={event.url}
          />
        ))}
      </Slider>
    </div>
  );
};

export default UpcomingEventsSection;
