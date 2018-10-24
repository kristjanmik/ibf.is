import React from "react";
import Layout from "../../components/Layout";
import Menu from "../../components/Menu";
import Section from "../../components/Section";
import SectionLegend from "../../components/SectionLegend";
import Members from "../../components/Members";
import WorkingGroups from "../../components/WorkingGroups";
import AboutSection from "../../sections/AboutSection";
import { workingGroups } from '../../data/working-groups'

const DevelopersPage = () => (
  <Layout>
    <Menu />
    <Section top="xlarge" bottom="xlarge" id="working-groups">
      <SectionLegend number="01" text="About" textColor="dark" />
      <AboutSection heading="Developers" text="The developers working group was created on the 29th of March 2015 (originally Auraráð). The Foundation was established by a collective of individuals with a shared vision of the positive impact that cryptocurrencies and blockchain technology can have on the Icelandic economy."></AboutSection>
    </Section>
    <Section top="xlarge" bottom="xlarge" id="working-groups">
      <SectionLegend number="02" text="Board Members" textColor="dark" />
      <Members of="developers" />
    </Section>
    <Section colored top="xlarge" bottom="xlarge" backgroundText="groups" id="working-groups">
      <SectionLegend number="03" text="Working Groups" />
      <WorkingGroups groups={workingGroups} />
    </Section>
  </Layout>
);

export default DevelopersPage;
