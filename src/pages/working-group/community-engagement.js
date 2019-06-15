import React from "react";
import Layout from "src/ui/components/Layout";
import Menu from "src/ui/components/Menu";
import WorkingGroupLayout from "src/ui/components/WorkingGroupLayout";
import { aboutCommunityGroup } from "src/data";
const CommunityPage = () => (
  <Layout>
    <Menu />
    <WorkingGroupLayout aboutGroup={aboutCommunityGroup} />
  </Layout>
);

export default CommunityPage;
