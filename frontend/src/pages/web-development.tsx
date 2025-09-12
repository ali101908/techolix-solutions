import React from "react";
import Layout from "@/components/layout/Layout";
import WebDevelopmentMain from "@/components/containers/service-details/WebDevelopmentMain";
import WebDevelopmentBanner from "@/components/layout/banner/WebDevelopmentBanner";
import WebDevelopmentProcess from "@/components/containers/service-details/WebDevelopmentProcess";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const WebDevelopment = () => {
  return (
    <Layout header={2} footer={2} video={false}>
      <WebDevelopmentBanner />
      <WebDevelopmentMain />
      <WebDevelopmentProcess />
      <CtaTwo />
    </Layout>
  );
};

export default WebDevelopment;
