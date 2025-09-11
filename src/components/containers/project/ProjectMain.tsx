import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

// Using string paths for better deployment compatibility
const projectImages = {
  hrone: "/images/projects/fpr.png",
  hrtwo: "/images/projects/prp.png", 
  hrthree: "/images/projects/tprs.png",
  hrfour: "/images/projects/brs.png",
  hrfive: "/images/projects/bf1.png",
  hrsix: "/images/projects/mb1.png"
};

const projectsData = [
  {
    image: projectImages.hrone,
    title: "digital agency",
    subtitle: "website (USA)",
    link: "https://firstpagerankerz.com/",
    alt: "Digital Agency Website - USA Client"
  },
  {
    image: projectImages.hrtwo,
    title: "painting company",
    subtitle: "website (USA)",
    link: "https://priceritepainting.com/",
    alt: "Painting Company Website - USA Client"
  },
  {
    image: projectImages.hrthree,
    title: "car recovery",
    subtitle: "Leicester (UK)",
    link: "https://toprecoveryservicesleicester.com/",
    alt: "Car Recovery Leicester - UK Client"
  },
  {
    image: projectImages.hrfour,
    title: "digital agency",
    subtitle: "website (UK)",
    link: "http://brightreachsolutions.com/",
    alt: "Digital Agency Website - UK Client"
  },
  {
    image: projectImages.hrfive,
    title: "fencing services",
    subtitle: "landing page (UK)",
    link: "https://boundaryfencingservices.com/",
    alt: "Fencing Services Landing Page - UK Client"
  },
  {
    image: projectImages.hrsix,
    title: "car breakdown",
    subtitle: "recovery (UK)",
    link: "https://carbreakdownrecovery247.com/",
    alt: "Car Breakdown Recovery - UK Client"
  }
];

gsap.registerPlugin(ScrollTrigger);
const ProjectMain = () => {
  const slider = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const ele = slider.current;

    if (window.innerWidth >= 992 && ele) {
      gsap.registerPlugin(ScrollTrigger);

      const rightSections = gsap.utils.toArray(".project-sl__single");

      const pin = gsap.to(rightSections, {
        xPercent: -100 * (rightSections.length - 3),
        ease: "none",
        scrollTrigger: {
          trigger: ele,
          pin: true,
          invalidateOnRefresh: true,
          start: "center center-=100",
          scrub: 1,
          end: () => "+=" + (slider.current?.offsetWidth || 0),
          markers: false,
        },
      });

      return () => {
        pin.kill();
      };
    }
  }, []);

  return (
    <>
      {isMobile ? (
        // Mobile Swiper Layout
        <section className="section project-mobile-slider">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section__header text-center">
                  <h2 className="title title-anim">Our Recent Projects</h2>
                  <p>Swipe to explore our portfolio</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={20}
                  loop={true}
                  pagination={{
                    clickable: true,
                    el: '.project-pagination'
                  }}
                  navigation={{
                    nextEl: '.project-next',
                    prevEl: '.project-prev'
                  }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  modules={[Navigation, Pagination, Autoplay]}
                  className="project-mobile-swiper"
                  breakpoints={{
                    576: {
                      slidesPerView: 1.2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 1.5,
                      spaceBetween: 30,
                    }
                  }}
                >
                  {projectsData.map((project, index) => (
                    <SwiperSlide key={index}>
                      <div className="project-mobile-card">
                        <div className="project-mobile-thumb">
                          <Link href={project.link} target="_blank">
                            <Image 
                              src={project.image} 
                              alt={project.alt} 
                              width={400} 
                              height={300}
                              style={{ width: '100%', height: 'auto' }}
                            />
                          </Link>
                        </div>
                        <div className="project-mobile-content">
                          <h3>
                            <Link href={project.link} target="_blank">
                              {project.title}
                              <br />
                              {project.subtitle}
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                
                {/* Navigation buttons */}
                <div className="project-mobile-navigation">
                  <button className="project-prev">
                    <i className="fa-light fa-angle-left"></i>
                  </button>
                  <div className="project-pagination"></div>
                  <button className="project-next">
                    <i className="fa-light fa-angle-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        // Desktop GSAP Layout
        <section className="section project-sl" ref={slider}>
          {projectsData.map((project, index) => (
            <div key={index} className="project-sl__single">
              <div className="thumb">
                <Link href={project.link} target="_blank">
                  <Image src={project.image} alt={project.alt} width={600} height={400} />
                </Link>
              </div>
              <div className="content">
                <h2>
                  <Link href={project.link} target="_blank">
                    {project.title}
                    <br />
                    {project.subtitle}
                  </Link>
                </h2>
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default ProjectMain;
