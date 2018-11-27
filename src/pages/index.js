import React from "react";

import Layout from "src/ui/components/Layout";
import Menu from "src/ui/components/Menu";
import Hero from "src/ui/components/Hero";
import Section from "src/ui/components/Section";
import WorkingGroupsSection from "src/ui/sections/WorkingGroupsSection";
import UpcomingEventsSection from "src/ui/sections/UpcomingEventsSection";
import NewsletterForm from "src/ui/components/NewsletterForm";
import NewsletterAnchorButton from "src/ui/components/NewsletterAnchorButton"
import RecentPostsSection from "src/ui/sections/RecentPostsSection";
import AboutSection from "src/ui/sections/AboutSection";
import NewsletterSection from "src/ui/sections/NewsletterSection";
import { events, workingGroups, posts, aboutIBF } from "src/data";

const IndexPage = () => (
  <Layout>
    <Menu inHero />
    <Hero title="Icelandic Blockchain Foundation">
      <NewsletterAnchorButton />
      <NewsletterForm
        inHero
        placeholder="Enter your email and join our newsletter"
      />
    </Hero>
    <Section
      top="xlarge"
      bottom="xlarge"
      backgroundText="foundation"
      id="about"
      number="02"
      legendText="About the foundation"
      legendColor="dark"
    >
      <AboutSection data={aboutIBF} />
    </Section>
    <Section
      top="xlarge"
      bottom="xlarge"
      colored
      backgroundText="events"
      id="events"
      number="03"
      legendText="Events"
      footerText="go to events"
      footerTextColor="light"
      footerUrl="https://www.meetup.com/Icelandic-Blockchain-Foundation"
    >
      <UpcomingEventsSection events={events} />
    </Section>
    <Section
      top="xlarge"
      bottom="xlarge"
      backgroundText="posts"
      id="posts"
      number="04"
      legendText="Recent posts"
      legendTextColor="dark"
      footerText="visit blog"
      footerTextColor="dark"
      footerUrl="https://medium.com/icelandic-blockchain-foundation"
    >
      <RecentPostsSection posts={posts} />
    </Section>
    <Section
      colored
      top="xlarge"
      bottom="xlarge"
      backgroundText="groups"
      id="working-groups"
      number="05"
      legendText="Working groups"
      footerText="visit working groups"
      footerTextColor="light"
      footerUrl="#working-groups"
    >
      <WorkingGroupsSection groups={workingGroups} />
    </Section>
    <Section
      top="huge"
      bottom="huge"
      id="newsletter"
      number="06"
      legendText="Newsletter"
      legendTextColor="dark"
    >
      <NewsletterSection />
    </Section>
  </Layout>
);

export default IndexPage;
