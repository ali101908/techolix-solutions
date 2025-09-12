import React from "react";
import Layout from "@/components/layout/Layout";
import WordPressWebsitesMain from "@/components/containers/service-details/WordPressWebsitesMain";
import WordPressWebsitesBanner from "@/components/layout/banner/WordPressWebsitesBanner";
import WordPressProcess from "@/components/containers/service-details/WordPressProcess";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const WordPressWebsites = () => {
  return (
    <Layout header={2} footer={2} video={false}>
      <WordPressWebsitesBanner />
      <WordPressWebsitesMain />
      <WordPressProcess />
      <CtaTwo />
    </Layout>
  );
};

export default WordPressWebsites;
