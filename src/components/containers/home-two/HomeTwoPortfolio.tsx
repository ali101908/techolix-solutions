import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const HomeTwoPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState("*");
  const [showAllTech, setShowAllTech] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabClick = (filter: any) => {
    setActiveFilter(filter);
  };

  const techStack = [
    { icon: "fab fa-react", color: "#61DAFB", name: "React" },
    { icon: "fab fa-wordpress", color: "#21759B", name: "WordPress" },
    { icon: "fab fa-js-square", color: "#F7DF1E", name: "Next.js" },
    { icon: "fab fa-html5", color: "#E34F26", name: "HTML5" },
    { icon: "fab fa-css3-alt", color: "#1572B6", name: "CSS3" },
    { icon: "fab fa-bootstrap", color: "#7952B3", name: "Bootstrap" },
    { icon: "fab fa-node-js", color: "#339933", name: "Node.js" },
    { icon: "fab fa-shopify", color: "#7AB55C", name: "Shopify" },
    { icon: "fas fa-shopping-cart", color: "#96588A", name: "WooCommerce" },
    { icon: "fab fa-android", color: "#3DDC84", name: "Flutter" },
    { icon: "fab fa-php", color: "#777BB4", name: "PHP" },
    { icon: "fas fa-server", color: "#68217A", name: "Express.js" },
    { icon: "fab fa-laravel", color: "#FF2D20", name: "Laravel" },
    { icon: "fab fa-amazon", color: "#FF9900", name: "Amazon VA" },
    { icon: "fas fa-shield-alt", color: "#007ACC", name: "Cyber Security" }
  ];

  const handleViewMore = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setShowAllTech(true);
      setIsAnimating(false);
    }, 100);
  };

  const handleViewLess = () => {
    setIsAnimating(true);
    // Add fade-out class to extra items
    const extraItems = document.querySelectorAll('.tech-item:nth-child(n+5)');
    extraItems.forEach(item => item.classList.add('fade-out'));
    
    setTimeout(() => {
      setShowAllTech(false);
      setIsAnimating(false);
    }, 400);
  };

  const visibleTech = showAllTech ? techStack : techStack.slice(0, 4);
  return (
    <section className="section portfolio portfolio-two portfolio-filter fade-wrapper">
   
      {/* <div className="portfolio__text-slider-w">
        <Swiper
          slidesPerView="auto"
          spaceBetween={40}
          speed={5000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false,
          }}
          className="portfolio__text-slider"
        >
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="portfolio">
                  digital portfolio
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                <Link href="portfolio">
                  digital portfolio
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="portfolio">
                  digital portfolio
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                <Link href="portfolio">
                  digital portfolio
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="portfolio">
                  digital portfolio
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                <Link href="portfolio">
                  digital portfolio
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="portfolio">
                  digital portfolio
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div> */}
      <div className="container">
        {/* <div className="row justify-content-center">
          <div className="col-12 col-lg-6 col-xl-4 text-center">
            <div className="portfolio-two__filter-btn section__header g-ind">
              <button
                aria-label="Filter Portfolio"
                className={activeFilter === "*" ? "active" : ""}
                onClick={() => handleTabClick("*")}
              >
                <span>01</span>
                All
              </button>
              <button
                aria-label="Filter Portfolio"
                className={activeFilter === ".design" ? "active" : ""}
                onClick={() => handleTabClick(".design")}
              >
                <span>02</span>
                Design
              </button>
              <button
                aria-label="Filter Portfolio"
                className={activeFilter === ".development" ? "active" : ""}
                onClick={() => handleTabClick(".development")}
              >
                <span>03</span>
                Development
              </button>
              <button
                aria-label="Filter Portfolio"
                className={activeFilter === ".technology" ? "active" : ""}
                onClick={() => handleTabClick(".technology")}
              >
                <span>04</span>
                Technology
              </button>
            </div>
          </div>
        </div> */}
        {/* <div className="row masonry-grid">
          Technology Filter - Show Tech Stack Icons
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main technology ${
              activeFilter === ".technology" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single portfolio__single-active topy-tilt fade-top tech-showcase">
              <div className="tech-showcase-content">
                <div className="tech-icons-grid">
                  <i className="fab fa-react" style={{color: '#61DAFB', fontSize: '32px'}}></i>
                  <i className="fab fa-wordpress" style={{color: '#21759B', fontSize: '32px'}}></i>
                  <i className="fab fa-js-square" style={{color: '#F7DF1E', fontSize: '32px'}}></i>
                  <i className="fab fa-html5" style={{color: '#E34F26', fontSize: '32px'}}></i>
                </div>
              </div>
              <div className="portfolio__single-content">
                <Link href="our-projects">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="our-projects">Frontend Technologies</Link>
                </h4>
              </div>
            </div>
          </div>
          All Projects for Design
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main design ${
              activeFilter === ".design" || activeFilter === "*" ? "" : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="our-projects">
                <Image src={one} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="our-projects">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="our-projects">Digital Agency USA</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main design ${
              activeFilter === ".design" || activeFilter === "*" ? "" : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="our-projects">
                <Image src={two} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="our-projects">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="our-projects">Painting Company USA</Link>
                </h4>
              </div>
            </div>
          </div>
          All Projects for Development
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${
              activeFilter === ".development" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="our-projects">
                <Image src={one} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="our-projects">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="our-projects">Digital Agency USA</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${
              activeFilter === ".development" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="our-projects">
                <Image src={two} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="our-projects">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="our-projects">Painting Company USA</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${
              activeFilter === ".development" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="our-projects">
                <Image src={three} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="our-projects">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="our-projects">Digital Agency UK</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main technology ${
              activeFilter === ".technology" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top tech-showcase">
              <div className="tech-showcase-content">
                <div className="tech-icons-grid">
                  <i className="fab fa-php" style={{color: '#777BB4', fontSize: '32px'}}></i>
                  <i className="fab fa-laravel" style={{color: '#FF2D20', fontSize: '32px'}}></i>
                  <i className="fab fa-node-js" style={{color: '#339933', fontSize: '32px'}}></i>
                  <i className="fas fa-database" style={{color: '#336791', fontSize: '32px'}}></i>
                </div>
              </div>
              <div className="portfolio__single-content">
                <Link href="our-projects">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="our-projects">Backend Technologies</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main design ${
              activeFilter === ".design" || activeFilter === "*" ? "" : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="our-projects">
                <Image src={three} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="our-projects">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="our-projects">Digital Agency UK</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main design ${
              activeFilter === ".design" || activeFilter === "*" ? "" : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="our-projects">
                <Image src={four} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="our-projects">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="our-projects">Breakdown Recovery UK</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main design ${
              activeFilter === ".design" || activeFilter === "*" ? "" : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="our-projects">
                <Image src={five} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="our-projects">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="our-projects">Car Recovery Leicester</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main design ${
              activeFilter === ".design" || activeFilter === "*" ? "" : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="our-projects">
                <Image src={six} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="our-projects">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="our-projects">Fencing Services UK</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${
              activeFilter === ".development" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="our-projects">
                <Image src={four} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="our-projects">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="our-projects">Breakdown Recovery UK</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${
              activeFilter === ".development" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="our-projects">
                <Image src={five} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="our-projects">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="our-projects">Car Recovery Leicester</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${
              activeFilter === ".development" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="our-projects">
                <Image src={six} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="our-projects">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="our-projects">Fencing Services UK</Link>
                </h4>
              </div>
            </div>
          </div>
          
          More Technology Cards
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main technology ${
              activeFilter === ".technology" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top tech-showcase">
              <div className="tech-showcase-content">
                <div className="tech-icons-grid">
                  <i className="fab fa-shopify" style={{color: '#7AB55C', fontSize: '32px'}}></i>
                  <i className="fab fa-wordpress" style={{color: '#21759B', fontSize: '32px'}}></i>
                  <i className="fas fa-shopping-cart" style={{color: '#96588A', fontSize: '32px'}}></i>
                  <i className="fab fa-bootstrap" style={{color: '#7952B3', fontSize: '32px'}}></i>
                </div>
              </div>
              <div className="portfolio__single-content">
                <Link href="our-projects">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="our-projects">E-commerce Solutions</Link>
                </h4>
              </div>
            </div>
          </div>
          
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main technology ${
              activeFilter === ".technology" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top tech-showcase">
              <div className="tech-showcase-content">
                <div className="tech-icons-grid">
                  <i className="fab fa-android" style={{color: '#3DDC84', fontSize: '32px'}}></i>
                  <i className="fab fa-apple" style={{color: '#000000', fontSize: '32px'}}></i>
                  <i className="fas fa-mobile-alt" style={{color: '#02569B', fontSize: '32px'}}></i>
                  <i className="fas fa-code" style={{color: '#F7931E', fontSize: '32px'}}></i>
                </div>
              </div>
              <div className="portfolio__single-content">
                <Link href="our-projects">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="our-projects">Mobile Development</Link>
                </h4>
              </div>
            </div>
          </div>
        </div> */}
        
        {/* Technology Stack Section */}
        <div className="row justify-content-center mt-5">
          <div className="col-12">
            <div className="section__header text-center mb-4">
              <span className="sub-title">
                technologies we use
                {/* <i className="fa-solid fa-arrow-right"></i> */}
              </span>
              <h3 className="title">Our Tech Stack</h3>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="tech-stack-grid">
              {visibleTech.map((tech, index) => (
                <div key={index} className="tech-item fade-top">
                  <div className="tech-icon">
                    <i className={tech.icon} style={{color: tech.color, fontSize: '48px'}}></i>
                  </div>
                  <h5>{tech.name}</h5>
                </div>
              ))}
            </div>
            
            {!showAllTech && (
              <div className="text-center mt-4">
                <button 
                  className="btn btn--secondary view-more-btn"
                  onClick={handleViewMore}
                  disabled={isAnimating}
                >
                  {isAnimating ? 'Loading...' : 'View More Technologies'}
                  <i className={`fa-solid ${isAnimating ? 'fa-spinner fa-spin' : 'fa-arrow-down'} ml-2`}></i>
                </button>
              </div>
            )}
            
            {showAllTech && (
              <div className="text-center mt-4">
                <button 
                  className="btn btn--tertiary view-less-btn"
                  onClick={handleViewLess}
                  disabled={isAnimating}
                >
                  {isAnimating ? 'Loading...' : 'View Less'}
                  <i className={`fa-solid ${isAnimating ? 'fa-spinner fa-spin' : 'fa-arrow-up'} ml-2`}></i>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .tech-stack-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 30px;
          margin-top: 30px;
          transition: all 0.8s ease;
          overflow: hidden;
        }
        
        .tech-item {
          text-align: center;
          padding: 20px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.5s ease;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.6s ease forwards;
        }
        
        .tech-item:nth-child(1) { animation-delay: 0.1s; }
        .tech-item:nth-child(2) { animation-delay: 0.2s; }
        .tech-item:nth-child(3) { animation-delay: 0.3s; }
        .tech-item:nth-child(4) { animation-delay: 0.4s; }
        .tech-item:nth-child(5) { animation-delay: 0.5s; }
        .tech-item:nth-child(6) { animation-delay: 0.6s; }
        .tech-item:nth-child(7) { animation-delay: 0.7s; }
        .tech-item:nth-child(8) { animation-delay: 0.8s; }
        .tech-item:nth-child(9) { animation-delay: 0.9s; }
        .tech-item:nth-child(10) { animation-delay: 1.0s; }
        .tech-item:nth-child(11) { animation-delay: 1.1s; }
        .tech-item:nth-child(12) { animation-delay: 1.2s; }
        .tech-item:nth-child(13) { animation-delay: 1.3s; }
        .tech-item:nth-child(14) { animation-delay: 1.4s; }
        .tech-item:nth-child(15) { animation-delay: 1.5s; }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeOutDown {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(30px);
          }
        }
        
        .tech-item.fade-out {
          animation: fadeOutDown 0.4s ease forwards;
        }
        
        .tech-item:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .tech-icon {
          margin-bottom: 15px;
          transition: transform 0.3s ease;
        }
        
        .tech-item:hover .tech-icon {
          transform: scale(1.1);
        }
        
        .tech-item h5 {
          color: #fff;
          margin: 0;
          font-weight: 600;
          font-size: 14px;
        }
        
        .view-more-btn,
        .view-less-btn {
          padding: 15px 35px;
          border-radius: 30px;
          font-weight: 600;
          transition: all 0.4s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 14px;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        
        .view-more-btn {
          // background: linear-gradient(135deg, #ff7425 0%, #ff9900 100%);
          color:  #ff7425;
          box-shadow: 0 4px 15px rgba(255, 116, 37, 0.3);
        }
        
        .view-more-btn:hover {
          background:  #ff7425;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(255, 116, 37, 0.5);
          color: black;
        }
        
        .view-more-btn:active {
          transform: translateY(0);
          box-shadow: 0 4px 15px rgba(255, 116, 37, 0.3);
        }
        
        .view-less-btn {
          background: transparent;
          border: 2px solid #ff7425;
          color: #ff7425;
          box-shadow: 0 4px 15px rgba(255, 116, 37, 0.1);
        }
        
        .view-less-btn:hover {
          background: #ff7425;
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(255, 116, 37, 0.4);
        }
        
        .view-less-btn:active {
          transform: translateY(0);
          box-shadow: 0 4px 15px rgba(255, 116, 37, 0.3);
        }
        
        /* Button ripple effect */
        .view-more-btn::before,
        .view-less-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.4s ease, height 0.4s ease;
        }
        
        .view-more-btn:active::before,
        .view-less-btn:active::before {
          width: 300px;
          height: 300px;
        }
        
        .ml-2 {
          margin-left: 8px;
        }
        
        .tech-showcase {
          position: relative;
        }
        
        .tech-showcase-content {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.1);
        }
        
        .tech-icons-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 20px;
          align-items: center;
          justify-items: center;
        }
        
        .tech-showcase:hover .tech-showcase-content {
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%);
          border-color: rgba(255,255,255,0.2);
        }
        
        @media (max-width: 768px) {
          .tech-stack-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          
          .tech-icon i {
            font-size: 36px !important;
          }
          
          .tech-icons-grid i {
            font-size: 24px !important;
          }
          
          .view-more-btn,
          .view-less-btn {
            padding: 10px 25px;
            font-size: 13px;
          }
        }
        
        @media (max-width: 480px) {
          .tech-stack-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }
          
          .tech-item {
            padding: 15px 10px;
          }
          
          .tech-icon i {
            font-size: 32px !important;
          }
          
          .tech-item h5 {
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeTwoPortfolio;


