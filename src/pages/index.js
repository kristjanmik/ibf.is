import React from "react";

import Layout from "../components/Layout";
import Menu from "../components/Menu";
import Hero from "../components/Hero";
import Section from "../components/Section";
import SectionLegend from "../components/SectionLegend";
import SectionFooter from "../components/SectionFooter";
import WorkingGroups from "../components/WorkingGroups";
import UpcomingEvents from "../components/UpcomingEvents";
import NewsletterForm, {
  NewsletterAnchorButton,
} from "../components/NewsletterForm";
import RecentPosts from "../components/RecentPosts";
import AboutSection from "../sections/AboutSection";
import NewsletterSection from "../sections/NewsletterSection";
import { events, workingGroups, posts, aboutIBF } from "../data";

const IndexPage = () => (
  <Layout>
    <Menu inHero />
    <Hero title="Icelandic Blockchain Foundation">
      <NewsletterAnchorButton />
      <NewsletterForm inHero placeholder="Enter your email and join our newsletter" />
    </Hero>
    <Section
      top="xlarge"
      bottom="xlarge"
      backgroundText="foundation"
      id="about"
    >
      <SectionLegend number="02" text="About the foundation" textColor="dark" />
      <AboutSection data={aboutIBF} />
    </Section>
    <Section
      top="xlarge"
      bottom="xlarge"
      colored
      backgroundText="events"
      id="events"
    >
      <SectionLegend number="03" text="Events" />
      <UpcomingEvents events={events} />
      <SectionFooter text="go to events" textColor="light" url="#events" />
    </Section>
    <Section top="xlarge" bottom="xlarge" backgroundText="posts" id="posts">
      <SectionLegend number="04" text="Recent posts" textColor="dark" />
      <RecentPosts posts={posts} />
      <SectionFooter text="visit blog" textColor="dark" url="https://medium.com/icelandic-blockchain-foundation" />
    </Section>
    <Section colored top="xlarge" bottom="xlarge" backgroundText="groups" id="working-groups">
      <SectionLegend number="05" text="Working Groups" />
      <WorkingGroups groups={workingGroups} />
      <SectionFooter text="visit working groups" textColor="light" url="#working-groups" />
    </Section>
    <Section top="huge" bottom="huge" id="newsletter">
      <SectionLegend number="06" text="Newsletter" textColor="dark" />
      <NewsletterSection />
    </Section>
  </Layout>
);

export default IndexPage;
