import React, { useContext } from "react";
import FeaturedEventCard from "src/ui/components/FeaturedEventCard";
import Members from "src/ui/components/Members";
import Section from "src/ui/components/Section";
import AboutSection from "src/ui/sections/AboutSection";
import WorkingGroupsSection from "src/ui/sections/WorkingGroupsSection";
import { withLang } from "src/utility/Translation";
import TranslationContext from "src/utility/TranslationContext";

const WorkingGroupLayout = ({
  name,
  color,
  description,
  coverImage,
  subheading,
  members,
  events,
  groups,
}) => {
  const lang = useContext(TranslationContext);
  const T = withLang(lang);
  return (
    <>
      <Section
        top="xlarge"
        bottom="xsmall"
        number="01"
        legendText={T("about")}
        legendTextColor="dark"
      >
        <AboutSection
          title={name}
          subtitle={subheading}
          text={description}
          data={{
            imageUrl: coverImage,
          }}
        />
      </Section>
      {events.length > 0 && (
        <Section
          top="medium"
          bottom="xlarge"
          backgroundText={T("eventsBackgroundHeading")}
          number="02"
          legendText={T("nextEvent")}
          legendTextColor="dark"
        >
          {
            events.map(event => (
              <FeaturedEventCard
                key={event.title}
                title={event.title}
                text={event.description}
                subtitle={event.subheading}
                imageUrl={event.image}
                date={event.day}
                color={color}
                url={event.url}
              />
            ))[0]
          }
        </Section>
      )}

      <Section
        top="xlarge"
        bottom="xlarge"
        backgroundText={name}
        number={events.length > 0 ? "03" : "02"}
        legendText={T("members")}
        legendTextColor="dark"
      >
        <Members members={members} color={color} />
      </Section>
      <Section
        colored
        top="xlarge"
        bottom="xlarge"
        backgroundText={T("groupsBackgroundHeading")}
        number={events.length > 0 ? "04" : "03"}
        legendText={T("otherWorkingGroups")}
      >
        <WorkingGroupsSection groups={groups} />
      </Section>
    </>
  );
};

export default WorkingGroupLayout;
