import React from "react";
import Layout from "src/ui/components/Layout";
import Menu from "src/ui/components/Menu";
import WorkingGroupLayout from "src/ui/components/WorkingGroupLayout";
import { aboutDevelopersGroup } from "src/data";

const DevelopersGroupPage = () => (
  <Layout>
    <Menu />
    <WorkingGroupLayout aboutGroup={aboutDevelopersGroup} />
  </Layout>
);
export default DevelopersGroupPage;
