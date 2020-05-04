import React, { useContext } from "react";
import cn from "classnames";
import { withLang } from "src/utility/Translation";
import TranslationContext from "src/utility/TranslationContext";
import styles from "./UpcomingEventsSection.module.scss";
import Slider from "src/ui/components/Slider";
import { styledDiv } from "src/ui/components/Typography";
import EventCard from "src/ui/components/EventCard";

const UpcomingEventsSection = ({ events }) => {
  const lang = useContext(TranslationContext);
  const T = withLang(lang);
  const H2 = styledDiv("H2");
  const hasEvents = events.length > 0;

  return (
    <div className={cn(styles.root, !hasEvents ? styles.noEvents : null)}>
      {!hasEvents && (
        <p className={styles.noEventsText}>{T("noUpcomingEvents")}</p>
      )}
      {hasEvents && (
        <Slider>
          {events.map(event => (
            <EventCard
              key={event.url}
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
      )}
    </div>
  );
};

export default UpcomingEventsSection;
