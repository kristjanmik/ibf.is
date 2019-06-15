import React from "react";
import Layout from "src/ui/components/Layout";
import Menu from "src/ui/components/Menu";
import WorkingGroupLayout from "src/ui/components/WorkingGroupLayout";
import { aboutMiningGroup } from "src/data";

const MiningGroupPage = () => (
  <Layout>
    <Menu />
    <WorkingGroupLayout aboutGroup={aboutMiningGroup} />
  </Layout>
);

export default MiningGroupPage;
