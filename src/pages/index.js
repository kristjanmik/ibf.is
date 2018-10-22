import React from "react";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Section from "../components/Section";
import SectionLegend from "../components/SectionLegend";
import SectionFooter from "../components/SectionFooter";
import WorkingGroups from "../components/WorkingGroups";
import UpcomingEvents from "../components/UpcomingEvents";
import RecentPosts from "../components/RecentPosts";
import AboutSection from "../sections/AboutSection";
import { events, workingGroups, posts } from "../data";

const IndexPage = () => (
  <Layout>
    <Hero title="Icelandic Blockchain Foundation">
      Our mission is to make Iceland <br /> the leader in{" "}
      <strong>blockchain</strong> <br />
      and <strong>cryptocurrency</strong> innovation <br /> and adoption
    </Hero>
    <Section top="xlarge" bottom="xlarge" backgroundText="foundation">
      <SectionLegend number="02" text="About the foundation" textColor="dark" />
      <AboutSection />
    </Section>
    <Section top="xlarge" bottom="xlarge" colored backgroundText="events">
      <SectionLegend number="03" text="Upcoming events" />
      <UpcomingEvents events={events} />
      <SectionFooter text="go to events" textColor="light" />
    </Section>
    <Section top="xlarge" bottom="xlarge" backgroundText="posts">
      <SectionLegend number="03" text="Recent posts" textColor="dark" />
      <RecentPosts posts={posts} />
      <SectionFooter text="visit blog" textColor="dark" />
    </Section>
    <Section colored top="xlarge" bottom="xlarge">
      <SectionLegend number="04" text="Working Groups" />
      <WorkingGroups groups={workingGroups} />
    </Section>
    <Section top="xlarge" bottom="xlarge">
      <SectionLegend number="05" text="Register" textColor="dark" />
    </Section>
  </Layout>
);

export default IndexPage;
