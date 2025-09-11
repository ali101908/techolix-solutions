import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import SamCollinsDetailsMain from "@/components/containers/SamCollinsDetailsMain";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const SamCollins = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner
        title="SAM COLLINS"
        navigation="Team Details"
        parent="Our Teams"
        parentLink="our-teams"
      />
      <SamCollinsDetailsMain />
      <CtaTwo />
    </Layout>
  );
};

export default SamCollins;
