import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import star from "public/images/testimonial/star.png";
import thumb from "public/images/testimonial/client.png";
import avatar from "public/images/testimonial/client.png";

gsap.registerPlugin(ScrollTrigger);
const HomeTwoTestimonial = () => {
  useEffect(() => {
    const device_width = window.innerWidth;

    if (
      document.querySelectorAll(".testimonial-g-con").length > 0 &&
      device_width > 576
    ) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".testimonial-two",
          start: "center center",
          end: "+=100%",
          scrub: true,
          pin: false,
        },
      });

      tl.to(".testimonial-g-con", {
        opacity: 0,
        scale: 1,
        y: "-100%",
        duration: 1,
      });
    }
  }, []);
  return (
    <section className="section testimonial-two">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-5 col-xxl-4">
            <div className="testimonial-two__thumb">
              <Image src={thumb} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xxl-7 offset-xxl-1">
            <div className="testimonial-two__content section__content testimonial-g-con">
              <span className="sub-title">
                testimonial
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Some Of Our Respected Happy Clients Says
              </h2>
              <div className="quote">
                <i className="fa-sharp fa-solid fa-quote-right"></i>
              </div>
              <div className="testimonial-two__slider-w">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  speed={1000}
                  loop={true}
                  centeredSlides={true}
                  modules={[Autoplay]}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    reverseDirection: false,
                  }}
                  className="testimonial-two__slider"
                >
                  <SwiperSlide>
                    <div className="testimonial-two__slider-single">
                      <div className="paragraph">
                        <blockquote className="secondary-text">
                          <q>
                            Techolix Solutions delivered an outstanding digital agency website for us. Their team understood our vision perfectly and created a modern, professional site that has significantly increased our client inquiries. Excellent work!
                          </q>
                        </blockquote>
                      </div>
                      <div className="author-meta">
                        <div className="author-meta__thumb">
                          <Image src={avatar} alt="Image" />
                        </div>
                        <div className="author-meta__content">
                          <h5>Mark Stevens</h5>
                          <p>CEO, Creative Digital Agency (USA)</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-two__slider-single">
                      <div className="paragraph">
                        <blockquote className="secondary-text">
                          <q>
                            The painting company website Techolix built for us is exactly what we needed. Professional, clean design with great functionality. Our online leads have increased by 300% since launch. Highly recommend their services!
                          </q>
                        </blockquote>
                      </div>
                      <div className="author-meta">
                        <div className="author-meta__thumb">
                          <Image src={avatar} alt="Image" />
                        </div>
                        <div className="author-meta__content">
                          <h5>Robert Martinez</h5>
                          <p>Owner, Premium Painting Company (USA)</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-two__slider-single">
                      <div className="paragraph">
                        <blockquote className="secondary-text">
                          <q>
                            Fantastic car recovery website from Techolix! The site looks professional and ranks well on Google for Leicester car recovery services. Our emergency call volume has doubled. Great team to work with.
                          </q>
                        </blockquote>
                      </div>
                      <div className="author-meta">
                        <div className="author-meta__thumb">
                          <Image src={avatar} alt="Image" />
                        </div>
                        <div className="author-meta__content">
                          <h5>David Wilson</h5>
                          <p>Director, Leicester Car Recovery Services (UK)</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" />
    </section>
  );
};

export default HomeTwoTestimonial;


