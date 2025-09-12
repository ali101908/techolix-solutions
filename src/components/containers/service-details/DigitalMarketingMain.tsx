import React from "react";
import Image from "next/image";
import thumbone from "public/images/service/dgm2.jpg";
import thumbtwo from "public/images/service/dgm1.jpg";

const DigitalMarketingMain = () => {
  return (
    <section className="section service-details fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="service-details__slider">
              <div className="service-details__slider-single">
                <div className="poster fade-top">
                  <Image src={thumbone} alt="Techolix Digital Marketing Services" />
                </div>
                <div className="details-group section__cta text-start">
                  <h3 className="title-anim">Comprehensive Digital Marketing by Techolix</h3>
                  <p>
                    Accelerate your business growth with Techolix&apos;s full-service digital marketing solutions across the USA and UK. Our marketing experts develop and execute data-driven strategies across multiple channels to increase brand awareness, drive qualified traffic, and maximize conversions in both regions.
                  </p>
                  <p>
                    From social media marketing and content creation to email campaigns and influencer partnerships, we provide integrated digital marketing services that deliver measurable results and sustainable business growth. We understand both American and British market dynamics to ensure your campaigns resonate with local audiences.
                  </p>
                </div>
                <div className="section__content-cta">
                  <div className="row gaper">
                    <div className="col-12 col-lg-7">
                      <div className="details-group">
                        <h3 className="title-anim">Multi-Channel Marketing Excellence</h3>
                        <p>
                          Techolix&apos;s digital marketing approach combines creative content development, strategic campaign management, and advanced analytics to deliver exceptional ROI across all marketing channels.
                        </p>
                        <p>
                          Our marketing specialists create cohesive brand experiences that engage your target audience, build customer loyalty, and drive consistent business growth through proven digital marketing techniques.
                        </p>
                        <ul className="service-list">
                          <li><i className="fa-solid fa-circle-check"></i> Social Media Marketing & Management</li>
                          <li><i className="fa-solid fa-circle-check"></i> Content Marketing & Strategy</li>
                          <li><i className="fa-solid fa-circle-check"></i> Email Marketing Campaigns</li>
                          <li><i className="fa-solid fa-circle-check"></i> Pay-Per-Click (PPC) Advertising</li>
                          <li><i className="fa-solid fa-circle-check"></i> Influencer Marketing & Partnerships</li>
                          <li><i className="fa-solid fa-circle-check"></i> Marketing Analytics & Reporting</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="poster-small">
                        <Image src={thumbtwo} alt="Digital Marketing Strategy" />
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

export default DigitalMarketingMain;


