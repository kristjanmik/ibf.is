import React from "react";
import Layout from "src/ui/components/Layout";
import Menu from "src/ui/components/Menu";
import Section from "src/ui/components/Section";
import Members from "src/ui/components/Members";
import WorkingGroupsSection from "src/ui/sections/WorkingGroupsSection";
import AboutSection from "src/ui/sections/AboutSection";
import { workingGroups, aboutCommunityGroup } from 'src/data'

const group = workingGroups.find(group => group.name === 'Community Engagement')

const CommunityPage = () => (
  <Layout>
    <Menu />
    <Section top="xlarge" bottom="xlarge" backgroundText="About" number="01" legendText="About" legendTextColor="dark">
      <AboutSection data={aboutCommunityGroup} />
    </Section>
    <Section top="xlarge" bottom="xlarge" backgroundText="members" number="02" legendText="Members" legendTextColor="dark">
      <Members of={group} />
    </Section>
    <Section colored top="xlarge" bottom="xlarge" backgroundText="groups" number="03" legendText="Working groups">
      <WorkingGroupsSection groups={workingGroups} />
    </Section>
  </Layout>
);

export default CommunityPage;
