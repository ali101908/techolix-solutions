import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
// import one from "public/images/projects/fpr.png";
// import two from "public/images/projects/prp.png";
// import three from "public/images/projects/brs.png";
// import four from "public/images/projects/mb1.png";
// import five from "public/images/projects/tprs.png";
// import six from "public/images/projects/bf1.png";

const HomeTwoPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  const handleTabClick = (filter: any) => {
    setActiveFilter(filter);
  };
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
              <div className="tech-item fade-top">
                <div className="tech-icon">
                  <i className="fab fa-react" style={{color: '#61DAFB', fontSize: '48px'}}></i>
                </div>
                <h5>React</h5>
              </div>
              
              <div className="tech-item fade-top">
                <div className="tech-icon">
                  <i className="fab fa-wordpress" style={{color: '#21759B', fontSize: '48px'}}></i>
                </div>
                <h5>WordPress</h5>
              </div>
              
              <div className="tech-item fade-top">
                <div className="tech-icon">
                  <i className="fab fa-js-square" style={{color: '#F7DF1E', fontSize: '48px'}}></i>
                </div>
                <h5>Next.js</h5>
              </div>
              
              <div className="tech-item fade-top">
                <div className="tech-icon">
                  <i className="fab fa-html5" style={{color: '#E34F26', fontSize: '48px'}}></i>
                </div>
                <h5>HTML5</h5>
              </div>
              
              <div className="tech-item fade-top">
                <div className="tech-icon">
                  <i className="fab fa-css3-alt" style={{color: '#1572B6', fontSize: '48px'}}></i>
                </div>
                <h5>CSS3</h5>
              </div>
              
              <div className="tech-item fade-top">
                <div className="tech-icon">
                  <i className="fab fa-bootstrap" style={{color: '#7952B3', fontSize: '48px'}}></i>
                </div>
                <h5>Bootstrap</h5>
              </div>
              
              <div className="tech-item fade-top">
                <div className="tech-icon">
                  <i className="fab fa-node-js" style={{color: '#339933', fontSize: '48px'}}></i>
                </div>
                <h5>Node.js</h5>
              </div>
              
              <div className="tech-item fade-top">
                <div className="tech-icon">
                  <i className="fab fa-shopify" style={{color: '#7AB55C', fontSize: '48px'}}></i>
                </div>
                <h5>Shopify</h5>
              </div>
              
              <div className="tech-item fade-top">
                <div className="tech-icon">
                  <i className="fas fa-shopping-cart" style={{color: '#96588A', fontSize: '48px'}}></i>
                </div>
                <h5>WooCommerce</h5>
              </div>
              
              <div className="tech-item fade-top">
                <div className="tech-icon">
                  <i className="fab fa-android" style={{color: '#3DDC84', fontSize: '48px'}}></i>
                </div>
                <h5>Flutter</h5>
              </div>
              
              <div className="tech-item fade-top">
                <div className="tech-icon">
                  <i className="fab fa-php" style={{color: '#777BB4', fontSize: '48px'}}></i>
                </div>
                <h5>PHP</h5>
              </div>
              
              <div className="tech-item fade-top">
                <div className="tech-icon">
                  <i className="fas fa-server" style={{color: '#68217A', fontSize: '48px'}}></i>
                </div>
                <h5>Express.js</h5>
              </div>
              
              <div className="tech-item fade-top">
                <div className="tech-icon">
                  <i className="fab fa-laravel" style={{color: '#FF2D20', fontSize: '48px'}}></i>
                </div>
                <h5>Laravel</h5>
              </div>
              
              <div className="tech-item fade-top">
                <div className="tech-icon">
                  <i className="fab fa-amazon" style={{color: '#FF9900', fontSize: '48px'}}></i>
                </div>
                <h5>Amazon VA</h5>
              </div>
              
              <div className="tech-item fade-top">
                <div className="tech-icon">
                  <i className="fas fa-shield-alt" style={{color: '#007ACC', fontSize: '48px'}}></i>
                </div>
                <h5>Cyber Security</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .tech-stack-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 30px;
          margin-top: 30px;
        }
        
        .tech-item {
          text-align: center;
          padding: 20px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .tech-item:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
        }
        
        .tech-icon {
          margin-bottom: 15px;
        }
        
        .tech-item h5 {
          color: #fff;
          margin: 0;
          font-weight: 600;
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
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 20px;
          }
          
          .tech-icon i {
            font-size: 36px !important;
          }
          
          .tech-icons-grid i {
            font-size: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeTwoPortfolio;


