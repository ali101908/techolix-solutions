import React from "react";
import Layout from "@/components/layout/Layout";
import SEOOptimizationMain from "@/components/containers/service-details/SEOOptimizationMain";
import SEOOptimizationBanner from "@/components/layout/banner/SEOOptimizationBanner";
import SEOProcess from "@/components/containers/service-details/SEOProcess";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const SEOOptimization = () => {
  return (
    <Layout header={2} footer={2} video={false}>
      <SEOOptimizationBanner />
      <SEOOptimizationMain />
      <SEOProcess />
      <CtaTwo />
    </Layout>
  );
};

export default SEOOptimization;
