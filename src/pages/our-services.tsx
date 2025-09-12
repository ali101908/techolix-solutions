import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import TecholixServiceMain from "@/components/containers/TecholixServiceMain";
import HomeTwoModal from "@/components/containers/home-two/HomeTwoModal";
import UxProcessTwo from "@/components/containers/service-details/UxProcessTwo";
// import HomeTestimonialThree from "@/components/containers/home-three/HomeTestimonialThree";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const OurServices = () => {
  return (
    <Layout header={2} footer={2} video={0}>
      <CmnBanner title="Techolix Services" navigation="Our Services" />
      <TecholixServiceMain />
      <HomeTwoModal />
      <UxProcessTwo />
      {/* <HomeTestimonialThree /> */}
      <CtaTwo />
    </Layout>
  );
};

export default OurServices;
