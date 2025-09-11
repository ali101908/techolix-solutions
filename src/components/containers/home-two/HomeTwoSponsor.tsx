import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const HomeTwoSponsor = () => {
  return (
    <div className="sponsor section liner">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title mb-0">
                TRUSTED BY LEADING COMPANIES
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="sponsor__slider-w">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={1200}
                loop={true}
                roundLengths={true}
                centeredSlides={true}
                centeredSlidesBounds={false}
                modules={[Autoplay]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  1400: {
                    slidesPerView: 6,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  576: {
                    slidesPerView: 2,
                  },
                }}
                className="sponsor__slider"
              >
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <div className="brand-icon">
                      <i className="fab fa-google" style={{fontSize: '48px', color: '#4285f4'}}></i>
                      <span>Google</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <div className="brand-icon">
                      <i className="fab fa-microsoft" style={{fontSize: '48px', color: '#00a1f1'}}></i>
                      <span>Microsoft</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <div className="brand-icon">
                      <i className="fab fa-amazon" style={{fontSize: '48px', color: '#ff9900'}}></i>
                      <span>Amazon</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <div className="brand-icon">
                      <i className="fab fa-shopify" style={{fontSize: '48px', color: '#7ab55c'}}></i>
                      <span>Shopify</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <div className="brand-icon">
                      <i className="fab fa-wordpress" style={{fontSize: '48px', color: '#21759b'}}></i>
                      <span>WordPress</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <div className="brand-icon">
                      <i className="fab fa-linkedin" style={{fontSize: '48px', color: '#0077b5'}}></i>
                      <span>LinkedIn</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <div className="brand-icon">
                      <i className="fab fa-meta" style={{fontSize: '48px', color: '#1877f2'}}></i>
                      <span>Meta</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <div className="brand-icon">
                      <i className="fab fa-stripe" style={{fontSize: '48px', color: '#635bff'}}></i>
                      <span>Stripe</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <div className="brand-icon">
                      <i className="fab fa-paypal" style={{fontSize: '48px', color: '#0070ba'}}></i>
                      <span>PayPal</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <div className="brand-icon">
                      <i className="fab fa-hubspot" style={{fontSize: '48px', color: '#ff7a59'}}></i>
                      <span>HubSpot</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <div className="brand-icon">
                      <i className="fab fa-mailchimp" style={{fontSize: '48px', color: '#ffe01b'}}></i>
                      <span>Mailchimp</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <div className="brand-icon">
                      <i className="fab fa-woocommerce" style={{fontSize: '48px', color: '#96588a'}}></i>
                      <span>WooCommerce</span>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .brand-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          text-align: center;
          transition: all 0.3s ease;
          opacity: 0.7;
        }
        
        .brand-icon:hover {
          opacity: 1;
          transform: translateY(-5px);
        }
        
        .brand-icon span {
          margin-top: 10px;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .sponsor__slider-item {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 120px;
        }
        
        @media (max-width: 768px) {
          .brand-icon i {
            font-size: 36px !important;
          }
          
          .brand-icon span {
            font-size: 12px;
          }
          
          .sponsor__slider-item {
            height: 100px;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeTwoSponsor;


