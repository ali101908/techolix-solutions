import React from "react";
import Layout from "@/components/layout/Layout";
import CtaTwo from "@/components/containers/service-details/CtaTwo";
import CloudInfrastructureMain from "@/components/containers/service-details/CloudInfrastructureMain";
import CloudInfrastructureBanner from "@/components/layout/banner/CloudInfrastructureBanner";
import CloudInfrastructureProcess from "@/components/containers/service-details/CloudInfrastructureProcess";

const CloudInfrastructure = () => {
  return (
    <Layout header={2} footer={2} video={false}>
      <CloudInfrastructureBanner />
      <CloudInfrastructureMain />
      <CloudInfrastructureProcess />
      <CtaTwo />
    </Layout>
  );
};

export default CloudInfrastructure;