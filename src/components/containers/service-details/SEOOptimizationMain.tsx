import React from "react";
import Image from "next/image";
import thumbone from "public/images/service/seo1.jpg";
import thumbtwo from "public/images/service/seo2.jpg";

const SEOOptimizationMain = () => {
  return (
    <section className="section service-details fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="service-details__slider">
              <div className="service-details__slider-single">
                <div className="poster fade-top">
                  <Image src={thumbone} alt="Techolix SEO Optimization Services" />
                </div>
                <div className="details-group section__cta text-start">
                  <h3 className="title-anim">Advanced SEO Optimization by Techolix</h3>
                  <p>
                    Boost your search engine rankings and organic traffic with Techolix&apos;s comprehensive SEO optimization services across the USA and UK. Our SEO experts employ white-hat techniques and industry best practices to improve your website&apos;s visibility on Google and other search engines in both markets.
                  </p>
                  <p>
                    From technical SEO audits and on-page optimization to content strategy and link building, we provide end-to-end SEO solutions that drive sustainable organic growth. Our data-driven approach ensures measurable improvements in search rankings and website traffic for both American and British search behaviors.
                  </p>
                </div>
                <div className="section__content-cta">
                  <div className="row gaper">
                    <div className="col-12 col-lg-7">
                      <div className="details-group">
                        <h3 className="title-anim">Comprehensive SEO Strategy</h3>
                        <p>
                          Techolix&apos;s SEO methodology includes thorough website analysis, competitor research, keyword optimization, and technical improvements to enhance your search engine performance and user experience.
                        </p>
                        <p>
                          Our SEO specialists focus on both on-page and off-page optimization, ensuring your website meets all search engine requirements while providing valuable content to your target audience.
                        </p>
                        <ul className="service-list">
                          <li><i className="fa-solid fa-circle-check"></i> Technical SEO Audit & Optimization</li>
                          <li><i className="fa-solid fa-circle-check"></i> Keyword Research & Strategy</li>
                          <li><i className="fa-solid fa-circle-check"></i> On-Page SEO Optimization</li>
                          <li><i className="fa-solid fa-circle-check"></i> Content Marketing & Optimization</li>
                          <li><i className="fa-solid fa-circle-check"></i> Link Building & Authority Development</li>
                          <li><i className="fa-solid fa-circle-check"></i> Local SEO & Google My Business</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="poster-small">
                        <Image src={thumbtwo} alt="SEO Strategy Implementation" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOOptimizationMain;


