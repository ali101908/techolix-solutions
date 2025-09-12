import React from "react";
import Layout from "@/components/layout/Layout";
import GoogleAdsMain from "@/components/containers/service-details/GoogleAdsMain";
import GoogleAdsBanner from "@/components/layout/banner/GoogleAdsBanner";
import GoogleAdsProcess from "@/components/containers/service-details/GoogleAdsProcess";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const GoogleAds = () => {
  return (
    <Layout header={2} footer={2} video={false}>
      <GoogleAdsBanner />
      <GoogleAdsMain />
      <GoogleAdsProcess />
      <CtaTwo />
    </Layout>
  );
};

export default GoogleAds;
