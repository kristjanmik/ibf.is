import React from "react";

import Layout from "../components/Layout";
import Menu from "../components/Menu";
import Hero from "../components/Hero";
import Section from "../components/Section";
import SectionLegend from "../components/SectionLegend";
import SectionFooter from "../components/SectionFooter";
import WorkingGroups from "../components/WorkingGroups";
import Footer from "../components/Footer";
import { events, workingGroups, posts } from "../data";

const WorkingGroupPage = () => (
  <Layout>
    <Menu />
    <Section colored top="xlarge" bottom="xlarge" id="working-groups">
      <SectionLegend number="05" text="Working Groups" />
      <WorkingGroups groups={workingGroups} />
      <SectionFooter text="visit working groups" textColor="light" />
    </Section>
    <Footer />
  </Layout>
);

export default WorkingGroupPage;
