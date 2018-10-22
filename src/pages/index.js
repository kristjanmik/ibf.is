import React from "react";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Section from "../components/Section";
import SectionLegend from "../components/SectionLegend";
import SectionFooter from "../components/SectionFooter";
import { H1, Body1 } from "../components/Typography";
import UpcomingEvents from '../components/UpcomingEvents'
import WorkingGroupCard from "../components/WorkingGroupCard";
import RecentPosts from '../components/RecentPosts';
import { events } from '../data/events'
import { posts } from '../data/posts'

const IndexPage = () => (
  <Layout>
    <Hero title="Icelandic Blockchain Foundation">
      Our mission is to make Iceland <br /> the leader in{" "}
      <strong>blockchain</strong> <br />
      and <strong>cryptocurrency</strong> innovation <br /> and adoption
    </Hero>
    <Section top="xlarge" bottom="xlarge">
      <SectionLegend number="02" text="About the foundation" textColor="dark" />
      <H1 bottom="large">Icelandic Blockchain Foundation</H1>
      <Body1>
        The Foundation was created on the 29th of March 2015 (originally
        Auraráð). The Foundation was established by a collective of individuals
        with a shared vision of the positive impact that cryptocurrencies and
        blockchain technology can have on the Icelandic economy.
      </Body1>
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
      <div style={{ display: "flex", flexWrap: 'wrap' }}>
        <div style={{ flex: "0 1 50%" }}>
          <WorkingGroupCard workingGroupName="Developers" />
        </div>
        <div style={{ flex: "0 1 50%" }}>
          <WorkingGroupCard workingGroupName="Mining" />
        </div>
        <div style={{ flex: "0 1 50%" }}>
          <WorkingGroupCard workingGroupName="Legislation" />
        </div>
        <div style={{ flex: "0 1 50%" }}>
          <WorkingGroupCard workingGroupName="PR and Social" />
        </div>
        <div style={{ flex: "0 1 50%" }}>
          <WorkingGroupCard workingGroupName="Education" />
        </div>
        <div style={{ flex: "0 1 50%" }}>
          <WorkingGroupCard workingGroupName="Community" />
        </div>
      </div>
    </Section>
    <Section top="xlarge" bottom="xlarge">
      <SectionLegend number="05" text="Register" textColor="dark" />
    </Section>
  </Layout>
);

export default IndexPage;
