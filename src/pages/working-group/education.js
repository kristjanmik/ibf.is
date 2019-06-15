import React from "react";
import Layout from "src/ui/components/Layout";
import Menu from "src/ui/components/Menu";
import WorkingGroupLayout from "src/ui/components/WorkingGroupLayout";
import { aboutEducationGroup } from "src/data";

const EducationGroupPage = () => (
  <Layout>
    <Menu />
    <WorkingGroupLayout aboutGroup={aboutEducationGroup} />
  </Layout>
);

export default EducationGroupPage;
