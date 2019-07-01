import React from "react";
import FeaturedEventCard from "src/ui/components/FeaturedEventCard";
import Members from "src/ui/components/Members";
import Section from "src/ui/components/Section";
import AboutSection from "src/ui/sections/AboutSection";
import WorkingGroupsSection from "src/ui/sections/WorkingGroupsSection";
import { events, workingGroups } from "src/data";

const WorkingGroupLayout = ({ aboutGroup }) => {
  const group = workingGroups.find(
    group => group.name === aboutGroup.main.title
  );
  const featuredEvent = events
    .filter(event => event.workingGroupName === group.name)
    .slice(0, 1);
  const defaultEventImage =
    'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';

  return (
    <>
      <Section
        top="xlarge"
        bottom="xlarge"
        number="01"
        legendText="About"
        legendTextColor="dark"
      >
        <AboutSection data={aboutGroup} />
      </Section>
      {featuredEvent.length > 0 && (
        <Section
          top="medium"
          bottom="xlarge"
          backgroundText="events"
          number="02"
          legendText="Next event by the group"
          legendTextColor="dark"
        >
          {featuredEvent.map(event => (
            <FeaturedEventCard
              key={event.title}
              title={event.title}
              text={event.text}
              imageUrl={event.imageUrl || defaultEventImage}
              date={event.date}
              color={group.color}
              subtitle={event.subtitle}
              url={event.url}
            />
          ))}
        </Section>
      )}
      <Section
        top="xlarge"
        bottom="xlarge"
        backgroundText={group.name}
        number={featuredEvent.length > 0 ? "03" : "02"}
        legendText="Members"
        legendTextColor="dark"
      >
        <Members of={group} />
      </Section>
      <Section
        colored
        top="xlarge"
        bottom="xlarge"
        backgroundText="groups"
        number={featuredEvent.length > 0 ? "04" : "03"}
        legendText="Working Groups"
      >
        <WorkingGroupsSection groups={workingGroups} />
      </Section>
    </>
  );
};

export default WorkingGroupLayout;
