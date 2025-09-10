import React, { useState } from "react";

const GoogleAdsProcess = () => {
  const [imgTab, setImgTab] = useState(0);

  return (
    <section className="section ux-process bg-tertiary fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title">
                Google Ads Process
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">Our Google Ads Management Process</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="service-f-wrapper">
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 0 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Account Audit & Strategy</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    We analyze your current campaigns, competitor landscape, and business goals to develop a comprehensive Google Ads strategy.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 0 ? -1 : 0)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 1 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Keyword Research</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Extensive keyword research to identify high-converting search terms and negative keywords to maximize your ad spend efficiency.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 1 ? -1 : 1)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 2 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Ad Creation & Testing</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Creating compelling ad copy, extensions, and visual assets with A/B testing to identify the highest performing ad variations.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 2 ? -1 : 2)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 3 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Campaign Launch</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Strategic campaign setup with proper targeting, bidding strategies, and conversion tracking to ensure optimal performance from day one.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 4 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Optimization & Monitoring</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Continuous campaign optimization including bid adjustments, keyword refinement, and ad schedule optimization based on performance data.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 4 ? -1 : 4)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 5 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Reporting & Analysis</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Regular performance reports with detailed insights, recommendations, and strategic adjustments to maximize your ROI and campaign success.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 5 ? -1 : 5)}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleAdsProcess;
