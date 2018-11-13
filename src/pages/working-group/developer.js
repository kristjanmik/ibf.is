import React from "react";
import Layout from "src/ui/components/Layout";
import Menu from "src/ui/components/Menu";
import Section from "src/ui/components/Section";
import Members from "src/ui/components/Members";
import WorkingGroupsSection from "src/ui/sections/WorkingGroupsSection";
import AboutSection from "src/ui/sections/AboutSection";
import { workingGroups, aboutDevelopersGroup } from 'src/data'

const group = workingGroups.find(group => group.name === 'Developer')

const DevelopersGroupPage = () => (
  <Layout>
    <Menu />
    <Section top="xlarge" bottom="xlarge" backgroundText="About" number="03" legendText="About" legendTextColor="dark">
      <AboutSection data={aboutDevelopersGroup} />
    </Section>
    <Section top="xlarge" bottom="xlarge" backgroundText="board" number="02" legendText="Members" legendTextColor="dark">
      <Members of={group} />
    </Section>
    <Section colored top="xlarge" bottom="xlarge" backgroundText="groups" number="03" legendText="Working Groups">
      <WorkingGroupsSection groups={workingGroups} />
    </Section>
  </Layout>
);

export default DevelopersGroupPage;
