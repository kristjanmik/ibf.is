import React from "react";
import Layout from "src/ui/components/Layout";
import FeaturedPostCard from "src/ui/components/FeaturedPostCard";
import Menu from "src/ui/components/Menu";
import Members from "src/ui/components/Members";
import Section from "src/ui/components/Section";
import AboutSection from "src/ui/sections/AboutSection";
import WorkingGroupsSection from "src/ui/sections/WorkingGroupsSection";
import { aboutDevelopersGroup, posts, workingGroups } from "src/data";
import { truncateText } from "src/utility/helpers/truncateText";

const group = workingGroups.find(group => group.name === "Developer");

const DevelopersGroupPage = () => (
  <Layout>
    <Menu />
    <Section
      top="xlarge"
      bottom="xlarge"
      backgroundText="About"
      number="01"
      legendText="About"
      legendTextColor="dark"
    >
      {/* TODO: check if I should extend AboutSection for image } */}
      <AboutSection data={aboutDevelopersGroup} />
    </Section>
    <Section
      top="medium"
      bottom="xlarge"
      backgroundText="events"
      // xid="posts"
      number="02"
      legendText="Next event in the group"
      legendTextColor="dark"
      footerText="see more events"
      footerTextColor="dark"
      footerUrl="https://link-to-meetups"
    >
      {/* TODO: change content } */}
      {posts
        .filter(post => post.isFeatured)
        .slice(0, 1)
        .map(post => (
          <FeaturedPostCard
            key={post.title}
            title={post.title}
            text={truncateText.apply(post.text)}
            imageUrl={post.image}
            date={post.date}
            url={post.url}
            fullWidth
          />
        ))}
    </Section>
    <Section
      top="xlarge"
      bottom="xlarge"
      backgroundText="board"
      number="03"
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
      number="04"
      legendText="Working Groups"
    >
      <WorkingGroupsSection groups={workingGroups} />
    </Section>
  </Layout>
);

export default DevelopersGroupPage;
