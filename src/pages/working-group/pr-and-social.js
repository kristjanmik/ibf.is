import React from "react";
import Layout from "../../components/Layout";
import Menu from "../../components/Menu";
import Section from "../../components/Section";
import SectionLegend from "../../components/SectionLegend";
import Members from "../../components/Members";
import WorkingGroups from "../../components/WorkingGroups";
import AboutSection from "../../sections/AboutSection";
import { workingGroups, aboutPRSocialGroup } from '../../data'

const group = workingGroups.find(group => group.name === 'PR and Social')

const PRSocialGroupPage = () => (
  <Layout>
    <Menu />
    <Section top="xlarge" bottom="xlarge" backgroundText="About">
      <SectionLegend number="01" text="About" textColor="dark" />
      <AboutSection data={aboutPRSocialGroup} />
    </Section>
    <Section top="xlarge" bottom="xlarge" backgroundText="members">
      <SectionLegend number="02" text="Board Members" textColor="dark" />
      <Members of={group} />
    </Section>
    <Section colored top="xlarge" bottom="xlarge" backgroundText="groups">
      <SectionLegend number="03" text="Working Groups" />
      <WorkingGroups groups={workingGroups} />
    </Section>
  </Layout>
);

export default PRSocialGroupPage;
