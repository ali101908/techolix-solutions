import React from "react";
import Image from "next/image";
import Link from "next/link";
import eleven from "/images/portfolio/eleven.png";
import twelve from "/images/portfolio/twelve.png";
import thirteen from "/images/portfolio/thirteen.png";
import fourteen from "/images/portfolio/fourteen.png";
import fifteen from "/images/portfolio/fifteen.png";
import sixteen from "/images/portfolio/sixteen.png";
import seventeen from "/images/portfolio/seventeen.png";
import eighteen from "/images/portfolio/eighteen.png";

const PortfolioMain = () => {
  return (
    <section className="section portfolio-m fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={eleven} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="service-single">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="service-single">LMS web application</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={twelve} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="service-single">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="service-single">LMS web application</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={fifteen} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="service-single">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="service-single">LMS web application</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={sixteen} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="service-single">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="service-single">LMS web application</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={seventeen} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="service-single">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="service-single">LMS web application</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={eighteen} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="service-single">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="service-single">LMS web application</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={thirteen} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="service-single">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="service-single">LMS web application</Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="portfolio-m__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={fourteen} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <div className="tr">
                  <Link href="service-single">
                    <i className="icon-arrow-top-right"></i>
                  </Link>
                </div>
                <h3 className="light-title-lg">
                  <Link href="service-single">LMS web application</Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="section__content-cta text-center">
              <button className="btn btn--secondary">Load More..</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioMain;
