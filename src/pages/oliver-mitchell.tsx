import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import OliverMitchellDetailsMain from "@/components/containers/OliverMitchellDetailsMain";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const OliverMitchell = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner
        title="OLIVER MITCHELL"
        navigation="Team Details"
        parent="Our Teams"
        parentLink="our-teams"
      />
      <OliverMitchellDetailsMain />
      <CtaTwo />
    </Layout>
  );
};

export default OliverMitchell;
