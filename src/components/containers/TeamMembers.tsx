import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "public/images/teams/male-icon.png";
import two from "public/images/teams/male-icon.png";
import three from "public/images/teams/male-icon.png";
import four from "public/images/teams/male-icon.png";
import five from "public/images/teams/male-icon.png";
import six from "public/images/teams/male-icon.png";

const TeamMembers = () => {
  return (
    <section className="section team-slider-s">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-8">
                  <div className="section__header text-center text-lg-start mb-0">
                    <span className="sub-title">
                      our awesome crew
                      {/* <i className="fa-solid fa-arrow-right"></i> */}
                    </span>
                    <h2 className="title title-anim">
                      our techolix team members
                    </h2>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="text-center text-lg-end">
                    <Link
                      href="our-teams"
                      className="btn btn--primary text-capitalize"
                    >
                      view all teams
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-r position-relative">
        <div className="team-s__slider-w">
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
              nextEl: ".next-team-s",
              prevEl: ".prev-team-s",
            }}
            className="team-s__slider"
            breakpoints={{
              768: {
                slidesPerView: 3,
                centeredSlides: true,
              },
              576: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="ryan-parker">
                      <Image src={one} alt="Image" />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        <p>
                          &quot;Leading innovative web solutions with cutting-edge technologies and user-centric design approaches.&quot;
                        </p>
                      </div>
                      <h4>
                        <Link href="ryan-parker">Ryan Parker</Link>
                      </h4>
                      <p>Web Development Lead & Cyber Expert</p>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="ryan-parker">Ryan Parker</Link>
                      </h5>
                      <p>Web Development Lead & Cyber Expert</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                        Expert in modern web technologies, Ryan leads our development team with innovative solutions and clean, scalable code. Specializes in React, Next.js, and full-stack development.
                      </p>
                      <div className="skill-wrap">
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Frontend Development</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="95%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Backend Development</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="90%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        Dedicated to delivering exceptional user experiences through thoughtful architecture and performance optimization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="salman">
                      <Image src={two} alt="Image" />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        <p>
                          &quot;Orchestrating seamless project delivery through strategic planning and efficient team coordination.&quot;
                        </p>
                      </div>
                      <h4>
                        <Link href="salman">Salman</Link>
                      </h4>
                      <p>Project Manager</p>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="salman">Salman</Link>
                      </h5>
                      <p>Project Manager</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                        Master of project coordination and team leadership, Salman ensures every project meets deadlines and exceeds client expectations through strategic planning and clear communication.
                      </p>
                      <div className="skill-wrap">
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Project Planning</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="95%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Team Leadership</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="92%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        Committed to delivering exceptional results through effective resource management and stakeholder alignment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="rohaan">
                      <Image src={three} alt="Image" />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        <p>
                          &quot;Driving organic growth through advanced SEO strategies and data-driven optimization techniques.&quot;
                        </p>
                      </div>
                      <h4>
                        <Link href="rohaan">Rohaan</Link>
                      </h4>
                      <p>SEO Specialist & Amazon Entrepreneur</p>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="rohaan">Rohaan</Link>
                      </h5>
                      <p>SEO Specialist & Amazon Entrepreneur</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                        SEO expert with deep knowledge of search algorithms and ranking factors. Rohaan develops comprehensive strategies that drive organic traffic and improve search visibility.
                      </p>
                      <div className="skill-wrap">
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Technical SEO</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="93%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Content Optimization</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="88%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        Passionate about delivering measurable results through white-hat SEO practices and continuous optimization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="sam-collins">
                      <Image src={four} alt="Image" />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        <p>
                          &quot;Crafting powerful WordPress solutions with custom themes and seamless functionality.&quot;
                        </p>
                      </div>
                      <h4>
                        <Link href="sam-collins">Sam Collins</Link>
                      </h4>
                      <p>WordPress Developer</p>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="sam-collins">Sam Collins</Link>
                      </h5>
                      <p>WordPress Developer</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                        WordPress specialist with expertise in custom theme development, plugin creation, and performance optimization. Sam delivers robust and scalable WordPress solutions.
                      </p>
                      <div className="skill-wrap">
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>WordPress Development</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="94%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Custom Themes</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="91%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        Focused on creating user-friendly, secure, and high-performance WordPress websites that drive business growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="abraham">
                      <Image src={five} alt="Image" />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        <p>
                          &quot;Amplifying brand presence through strategic digital campaigns and creative marketing solutions.&quot;
                        </p>
                      </div>
                      <h4>
                        <Link href="abraham">Abraham</Link>
                      </h4>
                      <p>Digital Marketing Expert</p>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="abraham">Abraham</Link>
                      </h5>
                      <p>Digital Marketing Expert</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                        Digital marketing strategist with expertise in social media marketing, PPC campaigns, and content marketing. Sophia creates data-driven campaigns that deliver exceptional ROI.
                      </p>
                      <div className="skill-wrap">
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Social Media Marketing</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="92%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>PPC Campaigns</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="89%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        Dedicated to building brand awareness and driving conversions through innovative digital marketing strategies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="oliver-mitchell">
                      <Image src={six} alt="Image" />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        <p>
                          &quot;Building robust e-commerce solutions with Shopify expertise and conversion optimization.&quot;
                        </p>
                      </div>
                      <h4>
                        <Link href="oliver-mitchell">Oliver Mitchell</Link>
                      </h4>
                      <p>Shopify Developer</p>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="oliver-mitchell">Oliver Mitchell</Link>
                      </h5>
                      <p>Shopify Developer</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                        Shopify expert specializing in custom e-commerce solutions, app development, and store optimization. Oliver creates high-converting online stores that drive sales.
                      </p>
                      <div className="skill-wrap">
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Shopify Development</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="96%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>E-commerce Optimization</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="93%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        Committed to delivering seamless shopping experiences that maximize conversion rates and customer satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="slide-group">
          <button aria-label="previous item" className="slide-btn prev-team-s">
            <i className="fa-light fa-angle-left"></i>
          </button>
          <button aria-label="next item" className="slide-btn next-team-s">
            <i className="fa-light fa-angle-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;


