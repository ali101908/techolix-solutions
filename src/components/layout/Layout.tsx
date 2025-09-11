import React, { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import VanillaTilt from "vanilla-tilt";
import { useRouter } from "next/router";
// import Header from "./header/Header";
import HeaderTwo from "./header/HeaderTwo";
// import HeaderThree from "./header/HeaderThree";
// import HeaderFour from "./header/HeaderFour";
// import HeaderFive from "./header/HeaderFive";
// import Footer from "./footer/Footer";
import FooterTwo from "./footer/FooterTwo";
// import FooterThree from "./footer/FooterThree";
// import FooterFour from "./footer/FooterFour";
// import FooterFive from "./footer/FooterFive";
import VideoModal from "./VideoModal";
import ScrollProgressBtn from "./ScrollProgressBtn";
import CustomCursor from "./CustomCursor";
import SplitType from "split-type";

type LayoutProps = {
  children: React.ReactNode;
  handleMouseEnterTitle?: any;
  handleMouseLeaveTitle?: any;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  video?: React.ReactNode;
};

const Layout = ({
  children,
  header,
  footer,
  handleMouseEnterTitle,
  handleMouseLeaveTitle,
  video,
}: LayoutProps) => {

  // tilt effect
  useEffect(() => {
    const tiltElements = document.querySelectorAll(".topy-tilt");

    tiltElements.forEach((element) => {
      const tiltElement = element as HTMLElement;
      VanillaTilt.init(tiltElement, {
        max: 5,
        speed: 3000,
      });
    });
  }, []);

  // navbar
  const [openNav, setOpenNav] = useState(false);

  const handleNav = () => {
    setOpenNav(!openNav);
  };

  const router = useRouter();

  const classMappings: Record<string, string> = {
    "/index-light": "home-light",
    "/index-two-light": "home-two-light",
    "/index-three-light": "home-three-light",
    "/index-four-light": "home-four-light",
    "/index-five-light": "home-five-light",
  };

  const classNameForCurrentPath = classMappings[router.pathname] || "";

  let additionalClasses = " ";

  const combinedClasses = `${additionalClasses} my-app`;

  const combinedClassName = `${combinedClasses}${
    openNav ? " body-active" : ""
  } ${classNameForCurrentPath}`;

  // fade animation
  useEffect(() => {
    const fadeWrapperRefs = document.querySelectorAll(".fade-wrapper");

    fadeWrapperRefs.forEach((fadeWrapperRef) => {
      const fadeItems = fadeWrapperRef.querySelectorAll(".fade-top");

      fadeItems.forEach((element, index) => {
        const delay = index * 0.15;

        gsap.set(element, {
          opacity: 0,
          y: 100,
        });

        ScrollTrigger.create({
          trigger: element,
          start: "top 100%",
          end: "bottom 20%",
          scrub: 0.5,
          onEnter: () => {
            gsap.to(element, {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: delay,
            });
          },
          once: true,
        });
      });
    });
  }, []);

  // appear down
  useEffect(() => {
    const appearDownSections = document.querySelectorAll(".appear-down");

    appearDownSections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: section,
            scrub: 1,
            start: "top bottom",
            end: "bottom center",
            markers: false,
          },
        }
      );
    });
  }, []);

  // split text animation
  useEffect(() => {
    const myText = new SplitType(".title-anim");
    const titleAnims = document.querySelectorAll(".title-anim");

    titleAnims.forEach((titleAnim) => {
      const charElements = titleAnim.querySelectorAll(".char");

      charElements.forEach((char, index) => {
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: char,
            start: "top 90%",
            end: "bottom 60%",
            scrub: false,
            markers: false,
            toggleActions: "play none none none",
          },
        });

        const charDelay = index * 0.03;

        tl2.from(char, {
          duration: 0.8,
          x: 70,
          delay: charDelay,
          autoAlpha: 0,
        });
      });
    });
  }, []);

  return (
    <Fragment>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="/images/agency/favicon.png"
          type="image/x-icon"
        />
        
        {/* Primary Meta Tags */}
        <title>Techolix Solutions | Digital Agency for Web Design & Development</title>
        <meta name="title" content="Techolix Solutions | Digital Agency for Web Design & Development" />
        <meta
          name="description"
          content="Professional digital agency offering web development, WordPress websites, Shopify development, digital marketing, SEO optimization, and cyber security services. Transform your business with cutting-edge technology solutions."
        />
        <meta name="keywords" content="web development, digital agency, WordPress websites, Shopify development, digital marketing, SEO optimization, Google Ads, Amazon virtual assistant, cyber security, web design, mobile apps, e-commerce development, techolix solutions" />
        <meta name="author" content="Techolix Solutions" />
        {/* <meta name="robots" content="index, follow" /> */}
        <link rel="canonical" href="https://techolixsolutions.com" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techolixsolutions.com" />
        <meta property="og:title" content="Techolix Solutions | Digital Agency for Web Design & Development" />
        <meta property="og:description" content="Professional digital agency offering web development, WordPress websites, Shopify development, digital marketing, SEO optimization, and cyber security services." />
        {/* <meta property="og:image" content="https://techolixsolutions.com/images/logo.png" /> */}
        <meta property="og:site_name" content="Techolix Solutions" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://techolixsolutions.com" />
        <meta property="twitter:title" content="Techolix Solutions | Digital Agency for Web Design & Development" />
        <meta property="twitter:description" content="Professional digital agency offering web development, WordPress websites, Shopify development, digital marketing, SEO optimization, and cyber security services." />
        {/* <meta property="twitter:image" content="https://techolixsolutions.com/images/logo.png" /> */}
        
        {/* Business Information */}
        <meta name="geo.region" content="US-NY" />
        <meta name="geo.placename" content="New York" />
        <meta name="geo.position" content="40.7589,-73.9851" />
        <meta name="ICBM" content="40.7589,-73.9851" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="rating" content="5" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        
        {/* JSON-LD Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Techolix Solutions",
              "alternateName": "Techolix",
              "url": "https://techolixsolutions.com",
              "logo": "https://techolixsolutions.com/images/agency/tech-icon.png",
              "description": "Professional digital agency offering web development, WordPress websites, Shopify development, digital marketing, SEO optimization, and cyber security services.",
              "foundingDate": "2020",
              "founder": {
                "@type": "Person",
                "name": "Techolix Solutions Team"
              },
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "1460 Broadway",
                  "addressLocality": "New York",
                  "addressRegion": "NY",
                  "postalCode": "10036",
                  "addressCountry": "US"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "30 Stamford Street",
                  "addressLocality": "London",
                  "postalCode": "SE1 9LQ",
                  "addressCountry": "GB"
                }
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+1-302-579-5453",
                  "contactType": "customer service",
                  "areaServed": "US",
                  "availableLanguage": "English"
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+44-772-784-0213",
                  "contactType": "customer service",
                  "areaServed": "GB",
                  "availableLanguage": "English"
                }
              ],
              "email": "Info@techolixsolutions.com",
              // "sameAs": [
              //   "https://www.linkedin.com/company/techolix-solutions",
              //   "https://www.facebook.com/techolixsolutions",
              //   "https://twitter.com/techolixsolutions"
              // ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Digital Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Web Development",
                      "description": "Custom web development solutions using modern technologies"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "WordPress Websites",
                      "description": "Professional WordPress website development and customization"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Shopify Development",
                      "description": "E-commerce solutions with Shopify platform development"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Digital Marketing",
                      "description": "Comprehensive digital marketing strategies and campaigns"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "SEO Optimization",
                      "description": "Search engine optimization to improve website visibility"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Cyber Security",
                      "description": "Comprehensive cybersecurity solutions and protection services"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* JSON-LD Structured Data for Website Navigation */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Techolix Solutions",
              "url": "https://techolixsolutions.com",
              "description": "Professional digital agency offering web development and digital marketing services",
              "publisher": {
                "@type": "Organization",
                "name": "Techolix Solutions"
              },
              // "potentialAction": {
              //   "@type": "SearchAction",
              //   "target": {
              //     "@type": "EntryPoint",
              //     "urlTemplate": "https://techolixsolutions.com/search?q={search_term_string}"
              //   },
              //   "query-input": "required name=search_term_string"
              // },
              "mainEntity": {
                "@type": "ItemList",
                "itemListElement": [
                  {
                    "@type": "SiteNavigationElement",
                    "position": 1,
                    "name": "Home",
                    "url": "https://techolixsolutions.com"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "position": 2,
                    "name": "About Us",
                    "url": "https://techolixsolutions.com/about-us"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "position": 3,
                    "name": "Our Services",
                    "url": "https://techolixsolutions.com/our-services"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "position": 4,
                    "name": "Our Projects",
                    "url": "https://techolixsolutions.com/our-projects"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "position": 5,
                    "name": "Contact Us",
                    "url": "https://techolixsolutions.com/contact-us"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "position": 6,
                    "name": "Web Development",
                    "url": "https://techolixsolutions.com/web-development"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "position": 7,
                    "name": "WordPress Websites",
                    "url": "https://techolixsolutions.com/wordpress-websites"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "position": 8,
                    "name": "Digital Marketing",
                    "url": "https://techolixsolutions.com/digital-marketing"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "position": 9,
                    "name": "SEO Optimization",
                    "url": "https://techolixsolutions.com/seo-optimization"
                  }
                ]
              }
            })
          }}
        />
        
        {/* JSON-LD Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://techolixsolutions.com",
              "name": "Techolix Solutions",
              "image": "https://techolixsolutions.com/images/agency/tech-icon.png",
              "telephone": "+1-302-579-5453",
              "email": "Info@techolixsolutions.com",
              "url": "https://techolixsolutions.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1460 Broadway",
                "addressLocality": "New York",
                "addressRegion": "NY",
                "postalCode": "10036",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.7589,
                "longitude": -73.9851
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "17:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "10:00",
                  "closes": "16:00"
                }
              ],
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150"
              }
            })
          }}
        />
      </Head>
      <div className={combinedClassName}>
        {/* {header === 1 && (
          <Header
            openNav={openNav}
            handleNav={handleNav}
            setOpenNav={setOpenNav}
          />
        )} */}
        {header === 2 && (
          <HeaderTwo
            openNav={openNav}
            handleNav={handleNav}
            setOpenNav={setOpenNav}
          />
        )}
        {/* {header === 3 && (
          <HeaderThree
            openNav={openNav}
            handleNav={handleNav}
            setOpenNav={setOpenNav}
          />
        )}
        {header === 4 && (
          <HeaderFour
            openNav={openNav}
            handleNav={handleNav}
            setOpenNav={setOpenNav}
          />
        )}
        {header === 5 && (
          <HeaderFive
            openNav={openNav}
            handleNav={handleNav}
            setOpenNav={setOpenNav}
          />
        )} */}
        <main>{children}</main>
        {/* {footer === 1 && <Footer />} */}
        {footer === 2 && <FooterTwo />}
        {/* {footer === 3 && <FooterThree />} */}
        {/* {footer === 4 && <FooterFour />} */}
        {/* {footer === 5 && <FooterFive />} */}
        {video ? <VideoModal /> : null}
        <ScrollProgressBtn />
        <CustomCursor
          onTitleMouseEnter={handleMouseEnterTitle}
          onTitleMouseLeave={handleMouseLeaveTitle}
        />
      </div>
    </Fragment>
  );
};

export default Layout;
