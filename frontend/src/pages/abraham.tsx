import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import AbrahamDetailsMain from "@/components/containers/AbrahamDetailsMain";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const Abraham = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner
        title="ABRAHAM"
        navigation="Team Details"
        parent="Our Teams"
        parentLink="our-teams"
      />
      <AbrahamDetailsMain />
      <CtaTwo />
    </Layout>
  );
};

export default Abraham;
