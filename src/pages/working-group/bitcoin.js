import React from "react";
import Layout from "src/ui/components/Layout";
import Menu from "src/ui/components/Menu";
import WorkingGroupLayout from "src/ui/components/WorkingGroupLayout";
import { aboutBitcoinGroup } from "src/data";

const BitcoinPage = () => (
  <Layout>
    <Menu />
    <WorkingGroupLayout aboutGroup={aboutBitcoinGroup} />
  </Layout>
);

export default BitcoinPage;
