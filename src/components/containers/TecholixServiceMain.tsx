import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

const TecholixServiceMain = () => {
  return (
    <section className="section service-t">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="service-t__slider-w">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={800}
                loop={true}
                centeredSlides={false}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  nextEl: ".next-service-t",
                  prevEl: ".prev-service-t",
                }}
                className="service-t__slider"
                breakpoints={{
                  1400: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          01
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="web-development">Web Development</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Custom Web Applications</li>
                        <li>Responsive Frontend</li>
                        <li>Backend Development</li>
                        <li>API Integration</li>
                        <li>Database Design</li>
                      </ul>
                      <div className="cta">
                        <Link href="web-development">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          02
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="wordpress-websites">WordPress Websites</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Custom Theme Design</li>
                        <li>Plugin Development</li>
                        <li>WooCommerce Integration</li>
                        <li>SEO Optimization</li>
                        <li>Performance Enhancement</li>
                      </ul>
                      <div className="cta">
                        <Link href="wordpress-websites">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          03
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="google-ads">Google Ads</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Campaign Management</li>
                        <li>Keyword Research</li>
                        <li>Ad Copy Optimization</li>
                        <li>Conversion Tracking</li>
                        <li>Performance Reporting</li>
                      </ul>
                      <div className="cta">
                        <Link href="google-ads">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          04
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="seo-optimization">SEO Optimization</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Technical SEO Audit</li>
                        <li>On-Page Optimization</li>
                        <li>Content Strategy</li>
                        <li>Link Building</li>
                        <li>Local SEO</li>
                      </ul>
                      <div className="cta">
                        <Link href="seo-optimization">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          05
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="shopify-development">Shopify Development</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Custom Store Design</li>
                        <li>App Integration</li>
                        <li>Payment Setup</li>
                        <li>Migration Services</li>
                        <li>Performance Optimization</li>
                      </ul>
                      <div className="cta">
                        <Link href="shopify-development">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          06
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="digital-marketing">Digital Marketing</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Social Media Marketing</li>
                        <li>Content Strategy</li>
                        <li>Email Campaigns</li>
                        <li>PPC Advertising</li>
                        <li>Analytics & Reporting</li>
                      </ul>
                      <div className="cta">
                        <Link href="digital-marketing">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          07
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="amazon-virtual-assistant">Amazon Virtual Assistant</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Product Research & Sourcing</li>
                        <li>Listing Optimization</li>
                        <li>PPC Campaign Management</li>
                        <li>Inventory Management</li>
                        <li>White Label Solutions</li>
                      </ul>
                      <div className="cta">
                        <Link href="amazon-virtual-assistant">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          08
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="cyber-security">Cyber Security</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Security Assessment</li>
                        <li>Threat Detection & Response</li>
                        <li>Network Security</li>
                        <li>Data Protection</li>
                        <li>Compliance Management</li>
                      </ul>
                      <div className="cta">
                        <Link href="cyber-security">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-group">
        <button aria-label="previous item" className="slide-btn prev-service-t">
          <i className="fa-light fa-angle-left"></i>
        </button>
        <button aria-label="next item" className="slide-btn next-service-t">
          <i className="fa-light fa-angle-right"></i>
        </button>
      </div>
    </section>
  );
};

export default TecholixServiceMain;
