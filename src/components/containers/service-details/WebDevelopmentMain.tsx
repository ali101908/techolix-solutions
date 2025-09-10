import React from "react";
import Image from "next/image";
const thumbone = "/images/service/web1.jpg";
const thumbtwo = "/images/service/web2.jpg";

const WebDevelopmentMain = () => {
  return (
    <section className="section service-details fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="service-details__slider">
              <div className="service-details__slider-single">
                <div className="poster fade-top">
                  <Image src={thumbone} alt="Techolix Web Development Services" />
                </div>
                <div className="details-group section__cta text-start">
                  <h3 className="title-anim">Custom Web Development Solutions by Techolix</h3>
                  <p>
                    At Techolix, with offices in the USA and UK, we specialize in creating powerful, scalable, and user-friendly websites that drive business growth across both regions. Our expert web development team combines cutting-edge technologies with industry best practices to deliver exceptional digital solutions tailored to your unique business needs.
                  </p>
                  <p>
                    From responsive frontend interfaces using React, Angular, and Vue.js to robust backend systems powered by Node.js, Python, and PHP, we ensure your website performs flawlessly across all devices and platforms. Our development process includes thorough testing, SEO optimization, and performance enhancement to guarantee maximum user engagement and search engine visibility for both US and UK markets.
                  </p>
                </div>
                <div className="section__content-cta">
                  <div className="row gaper">
                    <div className="col-12 col-lg-7">
                      <div className="details-group">
                        <h3 className="title-anim">Our Web Development Approach</h3>
                        <p>
                          Techolix follows an agile development methodology across our USA and UK operations to ensure timely delivery and superior quality. We begin with comprehensive requirement analysis, followed by strategic planning, modern design implementation, and rigorous testing phases.
                        </p>
                        <p>
                          Our web development services include custom web applications, e-commerce platforms, content management systems, API development, database design, and ongoing maintenance. Every project is optimized for speed, security, and search engine rankings to maximize your online presence in both American and British markets.
                        </p>
                        <ul className="service-list">
                          <li><i className="fa-solid fa-circle-check"></i> Custom Web Application Development</li>
                          <li><i className="fa-solid fa-circle-check"></i> Responsive Frontend Development</li>
                          <li><i className="fa-solid fa-circle-check"></i> Backend System Architecture</li>
                          <li><i className="fa-solid fa-circle-check"></i> Database Design & Integration</li>
                          <li><i className="fa-solid fa-circle-check"></i> API Development & Integration</li>
                          <li><i className="fa-solid fa-circle-check"></i> Performance Optimization</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="poster-small">
                        <Image src={thumbtwo} alt="Techolix Development Process" />
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

export default WebDevelopmentMain;

