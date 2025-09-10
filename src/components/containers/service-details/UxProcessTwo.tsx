import React, { useState } from "react";

const UxProcessTwo = () => {
  const [imgTab, setImgTab] = useState(0);

  return (
    <section className="section ux-process fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title">
                Techolix Design Process
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">Our UX/UI Development Process</h2>
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
                    <h4>Discovery & Research</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    We start by understanding your business goals, target audience, and market positioning. Our team conducts comprehensive research to identify user needs and competitive landscape to create a solid foundation for your digital solution.
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
                    <h4>Strategy & Planning</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Based on our research, we develop a comprehensive digital strategy including user journey mapping, content architecture, and technical requirements. This phase ensures optimal user experience across USA and UK markets.
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
                    <h4>Wireframing & Architecture</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    We create detailed wireframes and site architecture that outline the structure and functionality of your digital solution. This blueprint ensures logical navigation and optimal user flow before moving to visual design.
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
                    <h4>Interactive Prototyping</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    We develop interactive prototypes using modern tools to demonstrate functionality and user interactions. This allows you to experience the solution before development begins, ensuring alignment with your vision and requirements.
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
                    <h4>Testing & Validation</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    We conduct comprehensive usability testing and performance validation across different devices and browsers. Our QA process ensures your solution works flawlessly for users in both American and British markets.
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
                    <h4>Visual Design & Launch</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Our design team creates stunning visual interfaces that align with your brand identity. We implement modern design principles and ensure pixel-perfect execution before launching your solution with ongoing support and optimization.
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

export default UxProcessTwo;
