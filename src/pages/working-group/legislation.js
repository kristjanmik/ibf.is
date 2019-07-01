import React from "react";
import Layout from "src/ui/components/Layout";
import Menu from "src/ui/components/Menu";
import WorkingGroupLayout from "src/ui/components/WorkingGroupLayout";
import { aboutLegislationGroup } from "src/data";

const LegislationGroupPage = () => (
  <Layout>
    <Menu />
    <WorkingGroupLayout aboutGroup={aboutLegislationGroup} />
  </Layout>
);

export default LegislationGroupPage;
