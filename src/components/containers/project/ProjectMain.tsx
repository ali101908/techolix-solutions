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
  const [currentProject, setCurrentProject] = useState(0);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Initialize scroll-controlled project animation for all devices
      const container = containerRef.current;
      const projects = projectsRef.current.filter(Boolean);
      
      if (projects.length === 0) return;

      // Set initial states - all projects hidden except first
      projects.forEach((project, index) => {
        if (project) {
          gsap.set(project, {
            y: index === 0 ? 0 : "100vh",
            opacity: index === 0 ? 1 : 0,
            zIndex: projectsData.length - index
          });
        }
      });

      // Create scroll trigger for smooth project transitions
      projects.forEach((project, index) => {
        if (project && index > 0) {
          ScrollTrigger.create({
            trigger: container,
            start: `top+=${index * window.innerHeight} top`,
            end: `top+=${(index + 1) * window.innerHeight} top`,
            scrub: 1,
            onUpdate: (self) => {
              const progress = self.progress;
              const prevProject = projects[index - 1];
              
              if (progress > 0) {
                // Moving forward - current project slides up from bottom
                gsap.to(project, {
                  y: (1 - progress) * window.innerHeight,
                  opacity: progress,
                  duration: 0.1,
                  ease: "none"
                });
                
                // Previous project slides up and disappears completely
                if (prevProject) {
                  gsap.to(prevProject, {
                    y: -progress * window.innerHeight,
                    opacity: Math.max(0, 1 - progress * 2),
                    duration: 0.1,
                    ease: "none"
                  });
                }
              } else {
                // Moving backward - handle reverse animation smoothly
                gsap.to(project, {
                  y: (1 - Math.abs(progress)) * window.innerHeight,
                  opacity: Math.abs(progress),
                  duration: 0.1,
                  ease: "none"
                });
                
                if (prevProject) {
                  gsap.to(prevProject, {
                    y: Math.abs(progress) * window.innerHeight * 0.3,
                    opacity: 1 - Math.abs(progress),
                    duration: 0.1,
                    ease: "none"
                  });
                }
              }
              
              setCurrentProject(progress > 0.5 ? index : index - 1);
            },
            onLeave: () => {
              // Ensure current project is fully visible and previous is completely hidden
              gsap.set(project, { y: 0, opacity: 1 });
              if (projects[index - 1]) {
                gsap.set(projects[index - 1], { y: -window.innerHeight, opacity: 0 });
              }
            },
            onEnterBack: () => {
              // When scrolling back, don't flash - let onUpdate handle the smooth transition
              // Just ensure the current project starts from the right position
              gsap.set(project, { y: "100vh", opacity: 0 });
            },
            onLeaveBack: () => {
              // When leaving backwards, ensure previous project is ready
              if (projects[index - 1]) {
                gsap.set(projects[index - 1], { y: 0, opacity: 1 });
              }
              gsap.set(project, { y: "100vh", opacity: 0 });
            }
          });
        }
      });

      // Pin the entire container
      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: `+=${window.innerHeight * projectsData.length}`,
        pin: true,
        pinSpacing: true
      });

      return () => {
        ScrollTrigger.getAll().forEach(st => st.kill());
      };
    }
  }, []);

  const addToProjectsRef = (el: HTMLDivElement | null, index: number) => {
    if (el && !projectsRef.current[index]) {
      projectsRef.current[index] = el;
    }
  };

  return (
    <>
      {/* Unified Scroll-Controlled Layout for All Devices */}
      <section className="section project-scroll-unified" ref={containerRef}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section__header text-center mb-5">
                <h2 className="title title-anim">Our Recent Projects</h2>
                <p>Scroll to explore our portfolio</p>
              </div>
            </div>
          </div>
          
          <div className="projects-scroll-container">
            {projectsData.map((project, index) => (
              <div 
                key={index} 
                className="project-scroll-item"
                ref={(el) => addToProjectsRef(el, index)}
              >
                <div className="row align-items-center">
                  <div className={`col-lg-6 col-md-12 ${index % 2 === 0 ? '' : 'order-lg-2'}`}>
                    <div className="project-scroll-thumb">
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
                  <div className={`col-lg-6 col-md-12 ${index % 2 === 0 ? '' : 'order-lg-1'}`}>
                    <div className="project-scroll-content">
                      <div className="project-number">
                        {String(index + 1).padStart(2, '0')}
                      </div>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <style jsx>{`
        /* Unified Scroll-Controlled Project Styles for All Devices */
        .project-scroll-unified {
          height: 100vh;
          position: relative;
          overflow: hidden;
        }
        
        .projects-scroll-container {
          position: relative;
          height: 100vh;
          width: 100%;
        }
        
        .project-scroll-item {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          z-index: 1;
          will-change: transform, opacity;
        }
        
        .project-scroll-item .row {
          width: 100%;
          margin: 0;
        }
        
        .project-scroll-thumb {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
          transition: all 0.6s ease;
        }
        
        .project-scroll-thumb:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.3);
        }
        
        .project-scroll-thumb img {
          transition: transform 0.6s ease;
        }
        
        .project-scroll-thumb:hover img {
          transform: scale(1.1);
        }
        
        .project-scroll-content {
          padding: 0 50px;
          position: relative;
        }
        
        .project-number {
          position: absolute;
          top: -20px;
          left: 0;
          font-size: 120px;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.05);
          line-height: 1;
          z-index: -1;
        }
        
        .project-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 20px;
          color: #fff;
          line-height: 1.1;
          position: relative;
          z-index: 2;
        }
        
        .project-title a {
          color: inherit;
          text-decoration: none;
          transition: color 0.4s ease;
          background: linear-gradient(135deg, #fff, #f0f0f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .project-title a:hover {
          background: linear-gradient(135deg, #ff7425, #ff9900);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .project-subtitle {
          font-size: 1.4rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 30px;
          font-weight: 500;
          letter-spacing: 0.5px;
        }
        
        .btn--primary {
          background: linear-gradient(135deg, #ff7425 0%, #ff9900 100%);
          border: none;
          padding: 15px 40px;
          border-radius: 50px;
          color: white;
          text-decoration: none;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          transition: all 0.4s ease;
          font-size: 16px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .btn--primary:hover {
          background: linear-gradient(135deg, #ff9900 0%, #ffaa00 100%);
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(255, 116, 37, 0.4);
          color: white;
          text-decoration: none;
        }
        
        .btn--primary i {
          transition: transform 0.4s ease;
          font-size: 14px;
        }
        
        .btn--primary:hover i {
          transform: translate(5px, -5px);
        }
        
        /* Tablet Responsive */
        @media (max-width: 1199px) {
          .project-title {
            font-size: 3rem;
          }
          
          .project-number {
            font-size: 100px;
          }
          
          .project-scroll-content {
            padding: 0 30px;
          }
        }
        
        @media (max-width: 991px) {
          .project-title {
            font-size: 2.5rem;
          }
          
          .project-number {
            font-size: 80px;
          }
          
          .project-scroll-content {
            padding: 0 20px;
          }
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
          .project-scroll-item {
            padding: 20px 0;
          }
          
          .project-scroll-content {
            padding: 30px 15px;
            text-align: center;
          }
          
          .project-number {
            position: relative;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            margin-bottom: 20px;
            font-size: 60px;
          }
          
          .project-title {
            font-size: 2rem;
            margin-bottom: 15px;
          }
          
          .project-subtitle {
            font-size: 1.1rem;
            margin-bottom: 25px;
          }
          
          .btn--primary {
            padding: 12px 30px;
            font-size: 14px;
          }
          
          .project-scroll-thumb {
            margin-bottom: 30px;
            border-radius: 15px;
          }
          
          .project-scroll-thumb:hover {
            transform: translateY(-5px) scale(1.01);
          }
        }
        
        @media (max-width: 576px) {
          .project-title {
            font-size: 1.8rem;
          }
          
          .project-subtitle {
            font-size: 1rem;
          }
          
          .project-number {
            font-size: 50px;
          }
          
          .project-scroll-content {
            padding: 20px 10px;
          }
          
          .btn--primary {
            padding: 10px 25px;
            font-size: 13px;
          }
        }
        
        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .project-scroll-thumb:hover {
            transform: none;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
          }
          
          .project-scroll-thumb:hover img {
            transform: none;
          }
          
          .btn--primary:hover {
            transform: none;
            background: linear-gradient(135deg, #ff7425 0%, #ff9900 100%);
          }
          
          .btn--primary:hover i {
            transform: none;
          }
        }
      `}</style>
    </>
  );
};

export default ProjectMain;
