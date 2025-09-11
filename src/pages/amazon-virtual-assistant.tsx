import React from "react";
import Layout from "@/components/layout/Layout";
import AmazonVAMain from "@/components/containers/service-details/AmazonVAMain";
import AmazonVABanner from "@/components/layout/banner/AmazonVABanner";
import AmazonVAProcess from "@/components/containers/service-details/AmazonVAProcess";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const AmazonVirtualAssistant = () => {
  return (
    <Layout header={2} footer={2} video={false}>
      <AmazonVABanner />
      <AmazonVAMain />
      <AmazonVAProcess />
      <CtaTwo />
    </Layout>
  );
};

export default AmazonVirtualAssistant;
