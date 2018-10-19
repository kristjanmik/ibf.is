import React from "react";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Section from "../components/Section";
import SectionLegend from "../components/SectionLegend";
import { H1, Body1 } from "../components/Typography";
import EventCard from "../components/EventCard";
import CardCarousel from "../components/CardCarousel";

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
      <CardCarousel>
        <EventCard
          workingGroupName="Developers"
          title="Cryptocurrency Scavenger Hunt"
          subtitle="1 p.m. @ KEX hostel"
          text="The IBF is hosting a scavenger hunt! It is an opportunity to have fun with friends! The IBF is hosting a scavenger hunt!"
          color="turquoise"
        />
        <EventCard
          workingGroupName="Developers"
          title="Cryptocurrency Scavenger Hunt"
          subtitle="1 p.m. @ KEX hostel"
          text="The IBF is hosting a scavenger hunt! It is an opportunity to have fun with friends! The IBF is hosting a scavenger hunt!"
          color="yellow"
        />
        <EventCard
          workingGroupName="Developers"
          title="Cryptocurrency Scavenger Hunt"
          subtitle="1 p.m. @ KEX hostel"
          text="The IBF is hosting a scavenger hunt! It is an opportunity to have fun with friends! The IBF is hosting a scavenger hunt!"
          color="pink"
        />
        <EventCard
          workingGroupName="Developers"
          title="Cryptocurrency Scavenger Hunt"
          subtitle="1 p.m. @ KEX hostel"
          text="The IBF is hosting a scavenger hunt! It is an opportunity to have fun with friends! The IBF is hosting a scavenger hunt!"
          color="purple"
        />
      </CardCarousel>
    </Section>
  </Layout>
);

export default IndexPage;
