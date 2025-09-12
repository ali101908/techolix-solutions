import React from "react";
import Layout from "@/components/layout/Layout";
import DigitalMarketingMain from "@/components/containers/service-details/DigitalMarketingMain";
import DigitalMarketingBanner from "@/components/layout/banner/DigitalMarketingBanner";
import DigitalMarketingProcess from "@/components/containers/service-details/DigitalMarketingProcess";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const DigitalMarketing = () => {
  return (
    <Layout header={2} footer={2} video={false}>
      <DigitalMarketingBanner />
      <DigitalMarketingMain />
      <DigitalMarketingProcess />
      <CtaTwo />
    </Layout>
  );
};

export default DigitalMarketing;
