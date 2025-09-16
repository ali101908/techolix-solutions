import React from "react";
import Link from "next/link";

const TecholixHomeTwoOffer = () => {
  const services = [
    {
      id: "01",
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies to drive your business forward.",
      link: "web-development",
      icon: "fas fa-code"
    },
    {
      id: "02", 
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and increase conversions.",
      link: "digital-marketing",
      icon: "fas fa-chart-line"
    },
    {
      id: "03",
      title: "SEO Optimization", 
      description: "Improve your search engine rankings and drive organic traffic with our proven SEO strategies.",
      link: "seo-optimization",
      icon: "fas fa-search"
    }
  ];

  return (
    <section className="section offer-two">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title">
                what Techolix offers
              </span>
              <h2 className="title title-anim">our premium services</h2>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center mt-5">
          {services.map((service, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="service-card fade-top">
                <div className="service-number">
                  <span>{service.id}</span>
                </div>
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <div className="service-content">
                  <h3>
                    <Link href={service.link}>{service.title}</Link>
                  </h3>
                  <p>{service.description}</p>
                  <Link href={service.link} className="service-link">
                    Learn More
                    <i className="fa-solid fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row justify-content-center mt-5">
          <div className="col-12 text-center">
            <Link href="our-services" className="btn btn--primary view-all-services">
              View All Services
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .service-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 40px 30px;
          text-align: center;
          height: 100%;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 116, 37, 0.1), transparent);
          transition: left 0.6s ease;
        }
        
        .service-card:hover::before {
          left: 100%;
        }
        
        .service-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.08);
          border-color: #ff7425;
          box-shadow: 0 20px 40px rgba(255, 116, 37, 0.2);
        }
        
        .service-number {
          display: inline-block;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #ff7425, #ff9900);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          font-weight: 700;
          color: white;
          font-size: 18px;
        }
        
        .service-icon {
          margin-bottom: 25px;
        }
        
        .service-icon i {
          font-size: 50px;
          color: #ff7425;
          transition: all 0.3s ease;
        }
        
        .service-card:hover .service-icon i {
          transform: scale(1.1);
          color: #ff9900;
        }
        
        .service-content h3 {
          color: #fff;
          margin-bottom: 15px;
          font-size: 24px;
          font-weight: 600;
        }
        
        .service-content h3 a {
          color: inherit;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .service-content h3 a:hover {
          color: #ff7425;
        }
        
        .service-content p {
          color: #d9d9d9;
          line-height: 1.6;
          margin-bottom: 25px;
          font-size: 15px;
        }
        
        .service-link {
          display: inline-flex;
          align-items: center;
          color: #ff7425;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }
        
        .service-link:hover {
          color: #ff9900;
          transform: translateX(5px);
        }
        
        .service-link .ml-2 {
          margin-left: 8px;
          transition: transform 0.3s ease;
        }
        
        .service-link:hover .ml-2 {
          transform: translateX(3px);
        }
        
        .view-all-services {
          padding: 15px 40px;
          background: linear-gradient(135deg, #ff7425, #ff9900);
          color: white;
          text-decoration: none;
          border-radius: 30px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.4s ease;
          display: inline-flex;
          align-items: center;
          box-shadow: 0 8px 25px rgba(255, 116, 37, 0.3);
        }
        
        .view-all-services:hover {
          background: linear-gradient(135deg, #ff9900, #ff7425);
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(255, 116, 37, 0.5);
          color: white;
        }
        
        .view-all-services .ml-2 {
          margin-left: 10px;
          transition: transform 0.3s ease;
        }
        
        .view-all-services:hover .ml-2 {
          transform: translateX(5px);
        }
        
        @media (max-width: 768px) {
          .service-card {
            padding: 30px 20px;
            margin-bottom: 20px;
          }
          
          .service-icon i {
            font-size: 40px;
          }
          
          .service-content h3 {
            font-size: 20px;
          }
          
          .service-content p {
            font-size: 14px;
          }
          
          .view-all-services {
            padding: 12px 30px;
            font-size: 14px;
          }
        }
        
        .fade-top {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s ease forwards;
        }
        
        .fade-top:nth-child(1) { animation-delay: 0.1s; }
        .fade-top:nth-child(2) { animation-delay: 0.3s; }
        .fade-top:nth-child(3) { animation-delay: 0.5s; }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default TecholixHomeTwoOffer;


