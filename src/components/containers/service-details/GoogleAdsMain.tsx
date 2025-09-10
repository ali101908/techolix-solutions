import React from "react";
import Image from "next/image";
import thumbone from "/images/service/g-ads2.jpg";
import thumbtwo from "/images/service/g-ads.jpg";

const GoogleAdsMain = () => {
  return (
    <section className="section service-details fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="service-details__slider">
              <div className="service-details__slider-single">
                <div className="poster fade-top">
                  <Image src={thumbone} alt="Techolix Google Ads Management Services" />
                </div>
                <div className="details-group section__cta text-start">
                  <h3 className="title-anim">Expert Google Ads Management by Techolix</h3>
                  <p>
                    Maximize your ROI with Techolix's professional Google Ads management services across the USA and UK. Our certified Google Ads specialists create and optimize high-performing campaigns that drive qualified traffic, increase conversions, and accelerate business growth in both regions.
                  </p>
                  <p>
                    From keyword research and ad copywriting to bid management and performance analysis, we handle every aspect of your Google Ads campaigns. Our data-driven approach ensures optimal ad spend allocation and maximum return on investment for your advertising budget, whether targeting American or British customers.
                  </p>
                </div>
                <div className="section__content-cta">
                  <div className="row gaper">
                    <div className="col-12 col-lg-7">
                      <div className="details-group">
                        <h3 className="title-anim">Strategic Google Ads Solutions</h3>
                        <p>
                          Techolix employs advanced Google Ads strategies including comprehensive keyword research, competitor analysis, audience targeting, and conversion tracking to ensure your campaigns deliver exceptional results.
                        </p>
                        <p>
                          Our Google Ads experts continuously monitor and optimize your campaigns for improved quality scores, lower cost-per-click, and higher conversion rates. We provide detailed reporting and insights to track your advertising success.
                        </p>
                        <ul className="service-list">
                          <li><i className="fa-solid fa-circle-check"></i> Search & Display Campaign Management</li>
                          <li><i className="fa-solid fa-circle-check"></i> Keyword Research & Optimization</li>
                          <li><i className="fa-solid fa-circle-check"></i> Ad Copy Creation & A/B Testing</li>
                          <li><i className="fa-solid fa-circle-check"></i> Landing Page Optimization</li>
                          <li><i className="fa-solid fa-circle-check"></i> Conversion Tracking & Analytics</li>
                          <li><i className="fa-solid fa-circle-check"></i> Regular Performance Reporting</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="poster-small">
                        <Image src={thumbtwo} alt="Google Ads Campaign Strategy" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleAdsMain;
