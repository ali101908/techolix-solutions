import React from "react";
import Link from "next/link";

const CtaTwo = () => {
  return (
    <section className="cta-two section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xxl-11">
            <div
              className="cta-two-wrapper bg-img"
              style={{ backgroundImage: "url('/images/cta-two-bg.png')" }}
            >
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-8">
                  <div className="cta-two__content">
                    <span>Hello from Techolix!</span>
                    <h2 className="title-anim">Ready to grow your business in USA & UK?</h2>
                    <h5>
                      <Link href="tel:+13025795453">
                        call: +1 (302) 579-5453
                      </Link>
                    </h5>
                     <h5>
                      <Link href="tel:+447727840213">
                        call: +44 (772) 7840213
                      </Link>
                    </h5>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="text-start text-lg-end">
                    <Link href="contact-us" className="btn btn--tertiary">
                      start a project
                      <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                    </Link>
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

export default CtaTwo;
