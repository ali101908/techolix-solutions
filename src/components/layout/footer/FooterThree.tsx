import React from "react";
import Image from "next/image";
import Link from "next/link";
import thumb from "/images/footer/footer-three-thumb.png";
import logo from "/images/agency/tech-icon.png";

const FooterThree = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="section footer-three pb-0">
      <div className="container">
        <div className="row gaper align-items-start">
          <div className="col-12 col-lg-4">
            <div className="footer-three__single">
              <div className="footer-thumb">
                <Image src={thumb} alt="Image" height={100}/>
                <div className="footer-thumb__content">
                  <h5>Techolix Solutions, USA</h5>
                </div>
              </div>
              <div className="footer-three__group ps-0">
                <ul>
                  <li>
                    <Link
                      href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                      target="_blank"
                    >
                      <i className="fa-sharp fa-solid fa-location-dot"></i>
                      USA & UK Operations
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+13025795453">
                      <i className="fa-sharp fa-solid fa-phone-volume"></i>
                      +1 (302) 579-5453
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:Info@techolixsolutions.com">
                      <i className="fa-sharp fa-solid fa-envelope"></i>
                      Info@techolixsolutions.com
                    </Link>
                  </li>
                </ul>
                <div className="cta">
                  <Link
                    href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                    target="_blank"
                  >
                    View Map
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="group-wrapper">
              <div className="footer-three__group">
                <div className="intro">
                  <h5>United Kingdom</h5>
                </div>
                <ul>
                  <li>
                    <Link
                      href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                      target="_blank"
                    >
                      <i className="fa-sharp fa-solid fa-location-dot"></i>
                      UK Operations - Serving British Markets
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+13025795453">
                      <i className="fa-sharp fa-solid fa-phone-volume"></i>
                      +1 (302) 579-5453
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:Info@techolixsolutions.com">
                      <i className="fa-sharp fa-solid fa-envelope"></i>
                      Info@techolixsolutions.com
                    </Link>
                  </li>
                </ul>
                <div className="cta">
                  <Link
                    href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                    target="_blank"
                  >
                    View Map
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
              <div className="footer-three__group section__content-cta">
                <div className="intro">
                  <h5>Global Support</h5>
                </div>
                <ul>
                  <li>
                    <Link
                      href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                      target="_blank"
                    >
                      <i className="fa-sharp fa-solid fa-location-dot"></i>
                      24/7 Support - All Time Zones
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+13025795453">
                      <i className="fa-sharp fa-solid fa-phone-volume"></i>
                      +1 (302) 579-5453
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:Info@techolixsolutions.com">
                      <i className="fa-sharp fa-solid fa-envelope"></i>
                      Info@techolixsolutions.com
                    </Link>
                  </li>
                </ul>
                <div className="cta">
                  <Link
                    href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                    target="_blank"
                  >
                    View Map
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="group-wrapper">
              <div className="footer-three__group">
                <div className="intro">
                  <h5>Business Hours</h5>
                </div>
                <ul>
                  <li>
                    <Link
                      href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                      target="_blank"
                    >
                      <i className="fa-sharp fa-solid fa-location-dot"></i>
                      Mon-Fri: 9AM-6PM (EST/GMT)
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+13025795453">
                      <i className="fa-sharp fa-solid fa-phone-volume"></i>
                      +1 (302) 579-5453
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:Info@techolixsolutions.com">
                      <i className="fa-sharp fa-solid fa-envelope"></i>
                      Info@techolixsolutions.com
                    </Link>
                  </li>
                </ul>
                <div className="cta">
                  <Link
                    href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                    target="_blank"
                  >
                    View Map
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
              <div className="footer-three__group section__content-cta">
                <div className="intro">
                  <h5>Quick Contact</h5>
                </div>
                <ul>
                  <li>
                    <Link
                      href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                      target="_blank"
                    >
                      <i className="fa-sharp fa-solid fa-location-dot"></i>
                      Get Free Consultation
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+13025795453">
                      <i className="fa-sharp fa-solid fa-phone-volume"></i>
                      +1 (302) 579-5453
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:Info@techolixsolutions.com">
                      <i className="fa-sharp fa-solid fa-envelope"></i>
                      Info@techolixsolutions.com
                    </Link>
                  </li>
                </ul>
                <div className="cta">
                  <Link
                    href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                    target="_blank"
                  >
                    View Map
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-three__copyright">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer__copyright">
                <div className="row align-items-center gaper">
                  <div className="col-12 col-lg-8">
                    <div className="footer__copyright-text text-center text-lg-start">
                      <p>
                        Copyright &copy;
                        <span id="copyYear">{currentYear}</span> Techolix Solutions. All Rights Reserved
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="text-center text-lg-end">
                      <Link href="/" className="logo">
                        <Image src={logo} alt="Image" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterThree;
