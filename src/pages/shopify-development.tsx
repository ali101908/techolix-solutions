import React from "react";
import Layout from "@/components/layout/Layout";
import ShopifyDevelopmentMain from "@/components/containers/service-details/ShopifyDevelopmentMain";
import ShopifyDevelopmentBanner from "@/components/layout/banner/ShopifyDevelopmentBanner";
import ShopifyProcess from "@/components/containers/service-details/ShopifyProcess";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const ShopifyDevelopment = () => {
  return (
    <Layout header={2} footer={2} video={false}>
      <ShopifyDevelopmentBanner />
      <ShopifyDevelopmentMain />
      <ShopifyProcess />
      <CtaTwo />
    </Layout>
  );
};

export default ShopifyDevelopment;
