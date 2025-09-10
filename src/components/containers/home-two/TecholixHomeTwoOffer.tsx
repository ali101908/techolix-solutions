import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import ball from "public/images/ball.png";

const TecholixHomeTwoOffer = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const caseStudyItems = document.querySelectorAll(".offer__cta-single");
      const deviceWidth = window.innerWidth;

      if (deviceWidth > 576) {
        caseStudyItems.forEach((item) => {
          const contentBox = item.getBoundingClientRect();
          const dx = event.clientX - contentBox.x;
          const dy = event.clientY - contentBox.y;
          const thirdChild = item.children[2] as HTMLElement;
          thirdChild.style.transform = `translate(${dx}px, ${dy}px) rotate(10deg)`;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="section offer-two">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title">
                what Techolix offers
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">our premium services</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="offer-two__slider-w" dir="rtl">
        <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          speed={13000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: true,
          }}
          className="offer-two__slider"
        >
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  01
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="web-development">Web Development</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  02
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="wordpress-websites">WordPress Websites</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  03
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="google-ads">Google Ads</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  04
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="seo-optimization">SEO Optimization</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  05
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="shopify-development">Shopify Development</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  06
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="digital-marketing">Digital Marketing</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="offer-two__slider-rtl-w">
        <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          speed={15000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false,
          }}
          className="offer-two__slider-rtl"
        >
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  Custom Solutions
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-services">Tailored Business Solutions</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  Global Reach
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="about-us">USA & UK Operations</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  Expert Team
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-teams">Professional Developers</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  24/7 Support
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="contact-us">Round-the-Clock Service</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  Results Driven
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-projects">Proven Track Record</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  Innovation
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="portfolio">Cutting-Edge Technology</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default TecholixHomeTwoOffer;
