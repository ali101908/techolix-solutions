import React from "react";
import Image from "next/image";
import Link from "next/link";
const awardthumb = "/images/banner/award-thumb.png";
const star = "/images/star.png";
const dotlarge = "/images/agency/dot-large.png";

const HomeTwoAward = () => {
  return (
    <section className="section award">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="award__thumb dir-rtl">
              <Image src={awardthumb} alt="Image" className="unset fade-left" />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
            <div className="award__content section__content">
              <span className="sub-title">
                TECHOLIX ACHIEVEMENTS
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Our Client <span>Success Stories</span>
              </h2>
              <div className="paragraph">
                <p>
                  Techolix Solutions has successfully delivered innovative web development and digital marketing solutions to clients across the USA and UK. Our commitment to excellence drives measurable results and long-term partnerships.
                </p>
              </div>
              <div className="award__content-meta">
                <div className="single">
                  <h4>2023</h4>
                  <h4>USA Clients</h4>
                  <p>Digital agency & painting websites</p>
                </div>
                <div className="single">
                  <h4>2024</h4>
                  <h4>UK Market</h4>
                  <p>Recovery & fencing services</p>
                </div>
                <div className="single">
                  <h4>2025</h4>
                  <h4>Expansion</h4>
                  <p>Global reach & premium services</p>
                </div>
              </div>
              <div className="section__content-cta">
                <Link href="our-services" className="btn btn--primary">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" />
      <Image src={star} alt="Image" className="star-two" />
      <Image src={dotlarge} alt="Image" className="dot" />
      <Image src={dotlarge} alt="Image" className="dot-two" />
    </section>
  );
};

export default HomeTwoAward;

