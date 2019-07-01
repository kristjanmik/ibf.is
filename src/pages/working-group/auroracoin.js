import React from "react";
import Layout from "src/ui/components/Layout";
import Menu from "src/ui/components/Menu";
import WorkingGroupLayout from "src/ui/components/WorkingGroupLayout";
import { aboutAuroracoinGroup } from "src/data";

const AuroracoinPage = () => (
  <Layout>
    <Menu />
    <WorkingGroupLayout aboutGroup={aboutAuroracoinGroup} />
  </Layout>
);

export default AuroracoinPage;
