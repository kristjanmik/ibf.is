import React from "react";
import Layout from "src/ui/components/Layout";
import Menu from "src/ui/components/Menu";
import WorkingGroupLayout from "src/ui/components/WorkingGroupLayout";
import { aboutPRSocialGroup } from "src/data";

const PRSocialGroupPage = () => (
  <Layout>
    <Menu />
    <WorkingGroupLayout aboutGroup={aboutPRSocialGroup} />
  </Layout>
);

export default PRSocialGroupPage;
