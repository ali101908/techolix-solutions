import React, { useEffect,useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Offcanvas from "./Offcanvas";
// import Link from "next/link";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import logo from "/images/agency/tech-icon.png";
// import logoLight from "/images/agency/tech-icon.png";
// import Offcanvas from "./Offcanvas";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}

const HeaderTwo = ({ openNav, handleNav, setOpenNav }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const defaultClasses = "primary-navbar cmn-nav";

  const combinedClasses = `${
    scrolled ? " navbar-active" : " "
  } ${defaultClasses}`;

  let logoSrc = "/images/agency/tech-icon.png";

  const router = useRouter();
  if (router.pathname === "/index-two-light") {
    logoSrc = "/images/agency/tech-icon.png";
  }

  return (
    <>
      <header className="header">
        <div className={combinedClasses}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar p-0">
                  <div className="navbar__logo">
                    <Link href="/" aria-label="go to home">
                      <Image src={logoSrc} priority alt="Image" height={100} width={210} />
                    </Link>
                  </div>
                  <div className="navbar__menu">
                    <ul>
                      <li className="navbar__item nav-fade">
                        <Link href="/">Home</Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="about-us">About Us</Link>
                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"
                        >
                          Services
                        </button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <Link href="our-services">Our Services</Link>
                          </li>
                          <li>
                            <Link href="web-development">Web Development</Link>
                          </li>
                          <li>
                            <Link href="wordpress-websites">WordPress Websites</Link>
                          </li>
                          <li>
                            <Link href="google-ads">Google Ads</Link>
                          </li>
                          <li>
                            <Link href="seo-optimization">SEO Optimization</Link>
                          </li>
                          <li>
                            <Link href="shopify-development">Shopify Development</Link>
                          </li>
                          <li>
                            <Link href="digital-marketing">Digital Marketing</Link>
                          </li>
                          <li>
                            <Link href="amazon-virtual-assistant">Amazon Virtual Assistant</Link>
                          </li>
                          <li>
                            <Link href="cyber-security">Cyber Security</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="our-projects">Projects</Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="faq">FAQ</Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="contact-us">Contact</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="navbar__options">
                    <div className="navbar__mobile-options d-none d-sm-flex">
                      <Link href="https://wa.me/13025795453" className="btn btn--secondary">
                       +1 (302) 579-5453
                      </Link>
                    </div>
                    <button
                      className="open-mobile-menu d-flex d-xl-none"
                      aria-label="toggle mobile menu"
                      onClick={handleNav}
                    >
                      <i className="fa-light fa-bars-staggered"></i>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas openNav={openNav} setOpenNav={setOpenNav} />
    </>
  );
};

export default HeaderTwo;


