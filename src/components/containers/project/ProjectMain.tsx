import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
// import "../../../../mobile-project-slider.css";

// Using string paths for better deployment compatibility
const projectImages = {
  hrone: "/images/portfolio/fpr.png",
  hrtwo: "/images/projects/prp.png", 
  hrthree: "/images/projects/tprs.png",
  hrfour: "/images/projects/brs.png",
  hrfive: "/images/projects/bf1.png",
  hrsix: "/images/projects/mb1.png"
};

const projectsData = [
  {
    image: projectImages.hrone,
    title: "Digital Agency",
    subtitle: "Website (USA)",
    link: "https://firstpagerankerz.com/",
    alt: "Digital Agency Website - USA Client"
  },
  {
    image: projectImages.hrtwo,
    title: "Painting Company",
    subtitle: "Website (USA)",
    link: "https://priceritepainting.com/",
    alt: "Painting Company Website - USA Client"
  },
  {
    image: projectImages.hrthree,
    title: "Car Recovery",
    subtitle: "Leicester (UK)",
    link: "https://toprecoveryservicesleicester.com/",
    alt: "Car Recovery Leicester - UK Client"
  },
  {
    image: projectImages.hrfour,
    title: "Digital Agency",
    subtitle: "Website (UK)",
    link: "http://brightreachsolutions.com/",
    alt: "Digital Agency Website - UK Client"
  },
  {
    image: projectImages.hrfive,
    title: "Fencing Services",
    subtitle: "Landing Page (UK)",
    link: "https://boundaryfencingservices.com/",
    alt: "Fencing Services Landing Page - UK Client"
  },
  {
    image: projectImages.hrsix,
    title: "Car Breakdown",
    subtitle: "Recovery (UK)",
    link: "https://carbreakdownrecovery247.com/",
    alt: "Car Breakdown Recovery - UK Client"
  }
];

gsap.registerPlugin(ScrollTrigger);
const ProjectMain = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
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
                      <div className="project-mobile-card mx-auto">
                        <div className="project-mobile-thumb">
                          <Link href={project.link} target="_blank">
                            <Image 
                              src={project.image} 
                              alt={project.alt} 
                              width={400} 
                              height={300}
                              priority={index === 0}
                              placeholder="blur"
                              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                              style={{ width: '100%', height: 'auto' }}
                            />
                          </Link>
                        </div>
                        <div className="project-mobile-content text-center">
                          <h3 className="text-center mb-0">
                            <Link href={project.link} target="_blank" className=" text-center">
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
                {/* <div className="project-mobile-navigation d-flex justify-content-center align-items-center mt-4">
                  <button className="project-prev me-3">
                    <i className="fa-light fa-angle-left"></i>
                  </button>
                  <div className="project-pagination mx-3"></div>
                  <button className="project-next ms-3">
                    <i className="fa-light fa-angle-right"></i>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      ) : (
        // Desktop Alternating Layout
        <section className="section project-desktop">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section__header text-center mb-5">
                  <h2 className="title title-anim">Our Recent Projects</h2>
                  <p>Explore our portfolio of successful digital solutions</p>
                </div>
              </div>
            </div>
            
            {projectsData.map((project, index) => (
              <div key={index} className={`row align-items-center mb-5 project-row ${index % 2 === 0 ? 'project-left' : 'project-right'}`}>
                {index % 2 === 0 ? (
                  // Even index: Image on left, content on right
                  <>
                    <div className="col-lg-6 col-md-6">
                      <div className="project-desktop-thumb">
                        <Link href={project.link} target="_blank">
                          <Image 
                            src={project.image} 
                            alt={project.alt} 
                            width={600} 
                            height={400} 
                            priority={index === 0}
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                            className="img-fluid rounded"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="project-desktop-content">
                        <h3 className="project-title">
                          <Link href={project.link} target="_blank">
                            {project.title}
                          </Link>
                        </h3>
                        <p className="project-subtitle">{project.subtitle}</p>
                        <Link href={project.link} target="_blank" className="btn btn--primary mt-3">
                          View Project
                          <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  // Odd index: Content on left, image on right
                  <>
                    <div className="col-lg-6 col-md-6 order-md-2">
                      <div className="project-desktop-thumb">
                        <Link href={project.link} target="_blank">
                          <Image 
                            src={project.image} 
                            alt={project.alt} 
                            width={600} 
                            height={400} 
                            priority={index === 0}
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                            className="img-fluid rounded"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 order-md-1">
                      <div className="project-desktop-content">
                        <h3 className="project-title">
                          <Link href={project.link} target="_blank">
                            {project.title}
                          </Link>
                        </h3>
                        <p className="project-subtitle">{project.subtitle}</p>
                        <Link href={project.link} target="_blank" className="btn btn--primary mt-3">
                          View Project
                          <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
      
      <style jsx>{`
        /* Desktop Project Styles */
        .project-desktop {
          padding: 80px 0;
        }
        
        .project-row {
          margin-bottom: 80px !important;
          opacity: 0;
          transform: translateY(50px);
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .project-row:nth-child(even) {
          animation-delay: 0.2s;
        }
        
        .project-row:nth-child(odd) {
          animation-delay: 0.1s;
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .project-desktop-thumb {
          position: relative;
          overflow: hidden;
          border-radius: 15px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.4s ease;
        }
        
        .project-desktop-thumb:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
        }
        
        .project-desktop-thumb img {
          transition: transform 0.4s ease;
        }
        
        .project-desktop-thumb:hover img {
          transform: scale(1.05);
        }
        
        .project-desktop-content {
          padding: 0 30px;
        }
        
        .project-left .project-desktop-content {
          padding-left: 40px;
        }
        
        .project-right .project-desktop-content {
          padding-right: 40px;
        }
        
        .project-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: #fff;
          line-height: 1.2;
        }
        
        .project-title a {
          color: inherit;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .project-title a:hover {
          color: #007bff;
        }
        
        .project-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 20px;
          font-weight: 500;
        }
        
        .btn--primary {
          background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
          border: none;
          padding: 12px 30px;
          border-radius: 50px;
          color: white;
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }
        
        .btn--primary:hover {
          background: linear-gradient(135deg, #0056b3 0%, #004085 100%);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 123, 255, 0.3);
          color: white;
          text-decoration: none;
        }
        
        .btn--primary i {
          transition: transform 0.3s ease;
        }
        
        .btn--primary:hover i {
          transform: translate(3px, -3px);
        }
        
        /* Mobile Project Styles */
        .project-mobile-slider {
          padding: 60px 0;
        }
        
        .project-mobile-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          max-width: 350px;
        }
        
        .project-mobile-thumb {
          border-radius: 15px;
          overflow: hidden;
          margin-bottom: 20px;
        }
        
        .project-mobile-content h3 {
          color: #fff;
          font-size: 1.3rem;
          font-weight: 600;
          line-height: 1.4;
        }
        
        .project-mobile-content h3 a {
          color: inherit;
          text-decoration: none;
        }
        
        .project-mobile-swiper {
          padding: 20px 0 60px 0;
        }
        
        .project-mobile-swiper .swiper-pagination {
          bottom: 20px;
        }
        
        .project-mobile-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.3);
          opacity: 1;
        }
        
        .project-mobile-swiper .swiper-pagination-bullet-active {
          background: #007bff;
        }
        
        /* Responsive adjustments */
        @media (max-width: 1199px) {
          .project-title {
            font-size: 2rem;
          }
          
          .project-desktop-content {
            padding: 0 20px;
          }
          
          .project-left .project-desktop-content {
            padding-left: 25px;
          }
          
          .project-right .project-desktop-content {
            padding-right: 25px;
          }
        }
        
        @media (max-width: 991px) {
          .project-desktop-content {
            padding: 30px 0 0 0;
            text-align: center;
          }
          
          .project-left .project-desktop-content,
          .project-right .project-desktop-content {
            padding: 30px 0 0 0;
          }
          
          .project-row {
            margin-bottom: 60px !important;
          }
        }
        
        @media (max-width: 767px) {
          .project-title {
            font-size: 1.8rem;
          }
          
          .project-subtitle {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </>
  );
};

export default ProjectMain;
