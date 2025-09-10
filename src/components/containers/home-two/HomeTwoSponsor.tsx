import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
const one = "/images/sponsor/one.png";
const two = "/images/sponsor/two.png";
const three = "/images/sponsor/three.png";
const four = "/images/sponsor/four.png";
const five = "/images/sponsor/five.png";
const six = "/images/sponsor/six.png";

const HomeTwoSponsor = () => {
  return (
    <div className="sponsor section liner">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title mb-0">
                TRUSTED BY STARTUPS
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
                    <Image src={one} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={two} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={three} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={four} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={five} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={six} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={one} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={two} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={three} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={four} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={five} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={six} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={one} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={two} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={three} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={four} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={five} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={six} alt="Image" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTwoSponsor;

