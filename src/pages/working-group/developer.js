import React from "react";
import Layout from "src/ui/components/Layout";
import Menu from "src/ui/components/Menu";
import Section from "src/ui/components/Section";
import SectionLegend from "src/ui/components/SectionLegend";
import Members from "src/ui/components/Members";
import WorkingGroups from "src/ui/components/WorkingGroups";
import AboutSection from "src/ui/sections/AboutSection";
import { workingGroups, aboutDevelopersGroup } from 'src/data'

const group = workingGroups.find(group => group.name === 'Developer')

const DevelopersGroupPage = () => (
  <Layout>
    <Menu />
    <Section top="xlarge" bottom="xlarge" backgroundText="About">
      <SectionLegend number="01" text="About" textColor="dark" />
      <AboutSection data={aboutDevelopersGroup} />
    </Section>
    <Section top="xlarge" bottom="xlarge" backgroundText="board">
      <SectionLegend number="02" text="Members" textColor="dark" />
      <Members of={group} />
    </Section>
    <Section colored top="xlarge" bottom="xlarge" backgroundText="groups">
      <SectionLegend number="03" text="Working Groups" />
      <WorkingGroups groups={workingGroups} />
    </Section>
  </Layout>
);

export default DevelopersGroupPage;
