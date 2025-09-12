import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import RohaanDetailsMain from "@/components/containers/RohaanDetailsMain";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const Rohaan = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner
        title="ROHAAN"
        navigation="Team Details"
        parent="Our Teams"
        parentLink="our-teams"
      />
      <RohaanDetailsMain />
      <CtaTwo />
    </Layout>
  );
};

export default Rohaan;
