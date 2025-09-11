import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import SalmanDetailsMain from "@/components/containers/SalmanDetailsMain";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const Salman = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner
        title="SALMAN"
        navigation="Team Details"
        parent="Our Teams"
        parentLink="our-teams"
      />
      <SalmanDetailsMain />
      <CtaTwo />
    </Layout>
  );
};

export default Salman;
