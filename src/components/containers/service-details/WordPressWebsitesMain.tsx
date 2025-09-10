import React from "react";
import Image from "next/image";
import thumbone from "public/images/service/word.jpg";
import thumbtwo from "public/images/service/wdp.jpg";

const WordPressWebsitesMain = () => {
  return (
    <section className="section service-details fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="service-details__slider">
              <div className="service-details__slider-single">
                <div className="poster fade-top">
                  <Image src={thumbone} alt="Techolix WordPress Development Services" />
                </div>
                <div className="details-group section__cta text-start">
                  <h3 className="title-anim">Professional WordPress Website Development</h3>
                  <p>
                    Techolix, operating across the USA and UK, delivers premium WordPress websites that combine stunning design with powerful functionality. Our WordPress development experts create custom themes, plugins, and solutions that perfectly align with your brand identity and business objectives in both markets.
                  </p>
                  <p>
                    Whether you need a corporate website, blog, portfolio, or complex business platform, our WordPress specialists ensure your site is fast, secure, SEO-optimized, and user-friendly for both American and British audiences. We handle everything from initial design to deployment and ongoing maintenance across time zones.
                  </p>
                </div>
                <div className="section__content-cta">
                  <div className="row gaper">
                    <div className="col-12 col-lg-7">
                      <div className="details-group">
                        <h3 className="title-anim">WordPress Excellence by Techolix</h3>
                        <p>
                          Our WordPress development process focuses on creating websites that are not only visually appealing but also highly functional and search engine friendly. We optimize every aspect for maximum performance and user engagement.
                        </p>
                        <p>
                          From custom theme development to plugin creation, WooCommerce integration, and performance optimization, Techolix ensures your WordPress website stands out in the competitive digital landscape.
                        </p>
                        <ul className="service-list">
                          <li><i className="fa-solid fa-circle-check"></i> Custom WordPress Theme Development</li>
                          <li><i className="fa-solid fa-circle-check"></i> Plugin Development & Customization</li>
                          <li><i className="fa-solid fa-circle-check"></i> WooCommerce E-commerce Solutions</li>
                          <li><i className="fa-solid fa-circle-check"></i> WordPress Migration Services</li>
                          <li><i className="fa-solid fa-circle-check"></i> SEO Optimization & Speed Enhancement</li>
                          <li><i className="fa-solid fa-circle-check"></i> Ongoing Maintenance & Security Updates</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="poster-small">
                        <Image src={thumbtwo} alt="WordPress Development Process" />
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

export default WordPressWebsitesMain;
