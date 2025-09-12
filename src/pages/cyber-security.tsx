import React from "react";
import Layout from "@/components/layout/Layout";
import CyberSecurityMain from "@/components/containers/service-details/CyberSecurityMain";
import CyberSecurityBanner from "@/components/layout/banner/CyberSecurityBanner";
import CyberSecurityProcess from "@/components/containers/service-details/CyberSecurityProcess";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const CyberSecurity = () => {
  return (
    <Layout header={2} footer={2} video={false}>
      <CyberSecurityBanner />
      <CyberSecurityMain />
      <CyberSecurityProcess />
      <CtaTwo />
    </Layout>
  );
};

export default CyberSecurity;
