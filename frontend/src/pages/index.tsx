import React from "react";
import Layout from "@/components/layout/Layout";
import HomeTwoBanner from "@/components/layout/banner/HomeTwoBanner";
import HomeTwoSponsor from "@/components/containers/home-two/HomeTwoSponsor";
import HomeTwoAward from "@/components/containers/home-two/HomeTwoAward";
import TecholixHomeTwoOffer from "@/components/containers/home-two/TecholixHomeTwoOffer";
import HomeTwoModal from "@/components/containers/home-two/HomeTwoModal";
import NextPageNull from "@/components/containers/home/NextPageNull";
import HomeTwoPortfolio from "@/components/containers/home-two/HomeTwoPortfolio";
import HomeTwoTestimonial from "@/components/containers/home-two/HomeTwoTestimonial";
import HomeTwoBlog from "@/components/containers/home-two/HomeTwoBlog";
import HomeTwoCta from "@/components/containers/home-two/HomeTwoCta";

const Home = () => {
  return (
    <Layout header={2} footer={2} video={true}>
      <HomeTwoBanner />
      <HomeTwoSponsor />
      <HomeTwoAward />
      <TecholixHomeTwoOffer />
      <HomeTwoModal />
      <HomeTwoPortfolio />
      <HomeTwoTestimonial />
      {/* <HomeTwoBlog /> */}
      <HomeTwoCta />
      <NextPageNull />
    </Layout>
  );
};

export default Home;
