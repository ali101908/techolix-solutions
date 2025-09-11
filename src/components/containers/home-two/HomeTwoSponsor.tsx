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
                    <div className="sponsor-icon-wrapper">
                      <div className="sponsor-icon">
                        <i className="fab fa-google" style={{fontSize: '48px', color: '#4285f4'}}></i>
                      </div>
                      <span>Google</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <div className="sponsor-icon-wrapper">
                      <div className="sponsor-icon">
                        <i className="fab fa-microsoft" style={{fontSize: '48px', color: '#00a1f1'}}></i>
                      </div>
                      <span>Microsoft</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <div className="sponsor-icon-wrapper">
                      <div className="sponsor-icon">
                        <i className="fab fa-amazon" style={{fontSize: '48px', color: '#ff9900'}}></i>
                      </div>
                      <span>Amazon</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <div className="sponsor-icon-wrapper">
                      <div className="sponsor-icon">
                        <i className="fab fa-shopify" style={{fontSize: '48px', color: '#7ab55c'}}></i>
                      </div>
                      <span>Shopify</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <div className="sponsor-icon-wrapper">
                      <div className="sponsor-icon">
                        <i className="fab fa-wordpress" style={{fontSize: '48px', color: '#21759b'}}></i>
                      </div>
                      <span>WordPress</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <div className="sponsor-icon-wrapper">
                      <div className="sponsor-icon">
                        <i className="fab fa-linkedin" style={{fontSize: '48px', color: '#0077b5'}}></i>
                      </div>
                      <span>LinkedIn</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <div className="sponsor-icon-wrapper">
                      <div className="sponsor-icon">
                        <i className="fab fa-meta" style={{fontSize: '48px', color: '#1877f2'}}></i>
                      </div>
                      <span>Meta</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <div className="sponsor-icon-wrapper">
                      <div className="sponsor-icon">
                        <i className="fab fa-stripe" style={{fontSize: '48px', color: '#635bff'}}></i>
                      </div>
                      <span>Stripe</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <div className="sponsor-icon-wrapper">
                      <div className="sponsor-icon">
                        <i className="fab fa-paypal" style={{fontSize: '48px', color: '#0070ba'}}></i>
                      </div>
                      <span>PayPal</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <div className="sponsor-icon-wrapper">
                      <div className="sponsor-icon">
                        <i className="fab fa-hubspot" style={{fontSize: '48px', color: '#ff7a59'}}></i>
                      </div>
                      <span>HubSpot</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <div className="sponsor-icon-wrapper">
                      <div className="sponsor-icon">
                        <i className="fab fa-mailchimp" style={{fontSize: '48px', color: '#ffe01b'}}></i>
                      </div>
                      <span>Mailchimp</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <div className="sponsor-icon-wrapper">
                      <div className="sponsor-icon">
                        <i className="fas fa-shopping-cart" style={{fontSize: '48px', color: '#96588a'}}></i>
                      </div>
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
        .sponsor-icon-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 25px 20px;
          text-align: center;
          transition: all 0.3s ease;
          height: 140px;
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }
        
        .sponsor-icon-wrapper:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }
        
        .sponsor-icon {
          margin-bottom: 12px;
          transition: all 0.3s ease;
        }
        
        .sponsor-icon-wrapper:hover .sponsor-icon {
          transform: scale(1.1);
        }
        
        .sponsor-icon-wrapper span {
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: 0.9;
        }
        
        .sponsor__slider-item {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
        }
        
        @media (max-width: 768px) {
          .sponsor-icon-wrapper {
            padding: 20px 15px;
            height: 120px;
          }
          
          .sponsor-icon i {
            font-size: 36px !important;
          }
          
          .sponsor-icon-wrapper span {
            font-size: 11px;
          }
        }
        
        @media (max-width: 576px) {
          .sponsor-icon-wrapper {
            padding: 15px 10px;
            height: 100px;
          }
          
          .sponsor-icon i {
            font-size: 32px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeTwoSponsor;


