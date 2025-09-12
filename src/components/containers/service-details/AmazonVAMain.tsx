import React from "react";
import Image from "next/image";
import thumbone from "public/images/service/AmazonVa2.jpg";
import thumbtwo from "public/images/service/amazonVa.jpg";

const AmazonVAMain = () => {
  return (
    <section className="section service-details fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="service-details__slider">
              <div className="service-details__slider-single">
                <div className="poster fade-top">
                  <Image src={thumbone} alt="Amazon Virtual Assistant Services by Techolix" />
                </div>
                <div className="details-group section__cta text-start">
                  <h3 className="title-anim">Professional Amazon Virtual Assistant Services</h3>
                  <p>
                    Scale your Amazon business with Techolix&apos;s expert virtual assistant services. Our certified Amazon VAs provide comprehensive support for sellers across the USA and UK, handling everything from product research and listing optimization to inventory management and customer service, enabling you to focus on strategic growth.
                  </p>
                  <p>
                    From CPL (Cost Per Lead) optimization to white-label solutions, our Amazon specialists understand the complexities of marketplace selling and provide data-driven strategies to maximize your sales performance, improve rankings, and increase profitability across both American and British Amazon marketplaces.
                  </p>
                </div>
                <div className="section__content-cta">
                  <div className="row gaper">
                    <div className="col-12 col-lg-7">
                      <div className="details-group">
                        <h3 className="title-anim">Complete Amazon Business Management</h3>
                        <p>
                          Our Amazon virtual assistants are trained in the latest marketplace strategies, tools, and best practices to help you succeed in the competitive e-commerce landscape.
                        </p>
                        <p>
                          Whether you&apos;re launching new products, optimizing existing listings, or scaling your operations, our VAs provide the expertise and support needed to achieve your Amazon business goals efficiently and cost-effectively.
                        </p>
                        <ul className="service-list">
                          <li><i className="fa-solid fa-circle-check"></i> Product Research & Sourcing</li>
                          <li><i className="fa-solid fa-circle-check"></i> Listing Creation & Optimization</li>
                          <li><i className="fa-solid fa-circle-check"></i> PPC Campaign Management</li>
                          <li><i className="fa-solid fa-circle-check"></i> Inventory Management & Forecasting</li>
                          <li><i className="fa-solid fa-circle-check"></i> Customer Service & Review Management</li>
                          <li><i className="fa-solid fa-circle-check"></i> Analytics & Performance Reporting</li>
                          <li><i className="fa-solid fa-circle-check"></i> White Label Solutions</li>
                          <li><i className="fa-solid fa-circle-check"></i> CPL Optimization & Lead Generation</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="poster-small">
                        <Image src={thumbtwo} alt="Amazon VA Services" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section__content-cta">
                  <div className="details-group">
                    <h3 className="title-anim">Specialized Amazon VA Services</h3>
                    <div className="row gaper">
                      <div className="col-12 col-md-6">
                        <div className="service-item">
                          <h4><i className="fa-solid fa-search"></i> Product Research & Analysis</h4>
                          <p>Comprehensive market research, competitor analysis, and profitable product identification using advanced tools and methodologies.</p>
                        </div>
                        <div className="service-item">
                          <h4><i className="fa-solid fa-chart-line"></i> PPC & Advertising Management</h4>
                          <p>Expert management of Amazon PPC campaigns, sponsored ads, and cost-per-lead optimization to maximize ROI and visibility.</p>
                        </div>
                        <div className="service-item">
                          <h4><i className="fa-solid fa-warehouse"></i> Inventory & Supply Chain</h4>
                          <p>Strategic inventory planning, supplier communication, and logistics coordination to prevent stockouts and optimize cash flow.</p>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="service-item">
                          <h4><i className="fa-solid fa-edit"></i> Listing Optimization</h4>
                          <p>SEO-optimized product listings, A+ content creation, and keyword research to improve search rankings and conversions.</p>
                        </div>
                        <div className="service-item">
                          <h4><i className="fa-solid fa-users"></i> Customer Service Excellence</h4>
                          <p>Professional customer support, review management, and brand reputation enhancement to build customer loyalty.</p>
                        </div>
                        <div className="service-item">
                          <h4><i className="fa-solid fa-tag"></i> White Label Solutions</h4>
                          <p>Complete white-label Amazon business management services, allowing you to offer Amazon VA services under your brand.</p>
                        </div>
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

export default AmazonVAMain;
