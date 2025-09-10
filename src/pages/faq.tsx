import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import TecholixFaqMain from "@/components/containers/TecholixFaqMain";

const FaqPage = () => {
  return (
    <Layout header={2} footer={2} video={0}>
      <CmnBanner title="Frequently Asked Questions" navigation="FAQ" />
      <TecholixFaqMain />
    </Layout>
  );
};

export default FaqPage;
