import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
const one = "/images/achievement/one.png";
const two = "/images/achievement/two.png";
const three = "/images/achievement/three.png";
const four = "/images/achievement/four.png";
const five = "/images/achievement/five.png";

const OurAchievement = () => {
  return (
    <section className="section achievements">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title">
                Achievements
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">Achievements</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="achievements__slider-w">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={800}
                loop={true}
                centeredSlides={false}
                modules={[Autoplay]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                className="achievements__slider"
                breakpoints={{
                  1200: {
                    slidesPerView: 5,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  400: {
                    slidesPerView: 2,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="achievements__slider-single">
                    <Image src={one} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="achievements__slider-single">
                    <Image src={two} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="achievements__slider-single">
                    <Image src={three} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="achievements__slider-single">
                    <Image src={four} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="achievements__slider-single">
                    <Image src={five} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="achievements__slider-single">
                    <Image src={one} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="achievements__slider-single">
                    <Image src={two} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="achievements__slider-single">
                    <Image src={three} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="achievements__slider-single">
                    <Image src={four} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="achievements__slider-single">
                    <Image src={five} alt="Image" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAchievement;

