import React from "react";
import Image from "next/image";
import thumbone from "/images/service/shop2.jpg";
import thumbtwo from "/images/service/shop1.jpg";

const ShopifyDevelopmentMain = () => {
  return (
    <section className="section service-details fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="service-details__slider">
              <div className="service-details__slider-single">
                <div className="poster fade-top">
                  <Image src={thumbone} alt="Techolix Shopify Development Services" />
                </div>
                <div className="details-group section__cta text-start">
                  <h3 className="title-anim">Professional Shopify Development Solutions</h3>
                  <p>
                    Transform your e-commerce vision into reality with Techolix's expert Shopify development services across the USA and UK. Our Shopify specialists create stunning, high-converting online stores that drive sales and enhance customer experience across all devices for both markets.
                  </p>
                  <p>
                    From custom theme development and app integrations to payment gateway setup and inventory management, we provide comprehensive Shopify solutions that scale with your business growth. Our e-commerce experts ensure your store is optimized for conversions and search engines, supporting both US and UK payment methods and shipping requirements.
                  </p>
                </div>
                <div className="section__content-cta">
                  <div className="row gaper">
                    <div className="col-12 col-lg-7">
                      <div className="details-group">
                        <h3 className="title-anim">Complete Shopify E-commerce Solutions</h3>
                        <p>
                          Techolix delivers end-to-end Shopify development services including store setup, custom design, third-party integrations, and ongoing optimization to maximize your e-commerce success.
                        </p>
                        <p>
                          Our Shopify developers create user-friendly, mobile-responsive stores with seamless checkout processes, inventory management systems, and marketing integrations to boost your online sales performance.
                        </p>
                        <ul className="service-list">
                          <li><i className="fa-solid fa-circle-check"></i> Custom Shopify Theme Development</li>
                          <li><i className="fa-solid fa-circle-check"></i> Shopify App Development & Integration</li>
                          <li><i className="fa-solid fa-circle-check"></i> E-commerce Store Migration</li>
                          <li><i className="fa-solid fa-circle-check"></i> Payment Gateway Integration</li>
                          <li><i className="fa-solid fa-circle-check"></i> Inventory Management Solutions</li>
                          <li><i className="fa-solid fa-circle-check"></i> Shopify SEO & Performance Optimization</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="poster-small">
                        <Image src={thumbtwo} alt="Shopify Store Development" />
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

export default ShopifyDevelopmentMain;
