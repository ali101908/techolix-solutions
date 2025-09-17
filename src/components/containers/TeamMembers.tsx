import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import one from "public/images/teams/male-icon.png";
import two from "public/images/teams/male-icon.png";
import three from "public/images/teams/male-icon.png";
import four from "public/images/teams/male-icon.png";
import five from "public/images/teams/male-icon.png";
import six from "public/images/teams/male-icon.png";
import seven from "public/images/teams/male-icon.png";

const TeamMembers = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Ryan Parker",
      position: "Web Development Lead & Cyber Expert",
      image: one,
      link: "ryan-parker",
      quote: "Leading innovative web solutions with cutting-edge technologies and user-centric design approaches.",
      description: "Expert in modern web technologies, Ryan leads our development team with innovative solutions and clean, scalable code.",
      skills: ["React & Next.js", "Full-Stack Development", "Cyber Security"]
    },
    {
      id: 2,
      name: "Salman",
      position: "Project Manager",
      image: two,
      link: "salman",
      quote: "Orchestrating seamless project delivery through strategic planning and efficient team coordination.",
      description: "Master of project coordination and team leadership, ensuring every project meets deadlines and exceeds expectations.",
      skills: ["Project Planning", "Team Leadership", "Client Relations"]
    },
    {
      id: 3,
      name: "Rohaan",
      position: "SEO Specialist & Amazon Entrepreneur",
      image: three,
      link: "rohaan",
      quote: "Driving organic growth through advanced SEO strategies and data-driven optimization techniques.",
      description: "SEO expert with deep knowledge of search algorithms and ranking factors for organic traffic growth.",
      skills: ["Technical SEO", "Content Optimization", "Amazon Marketing"]
    },
    {
      id: 4,
      name: "Sam Collins",
      position: "WordPress Developer",
      image: four,
      link: "sam-collins",
      quote: "Crafting powerful WordPress solutions with custom themes and seamless functionality.",
      description: "WordPress specialist creating custom themes and plugins with focus on performance and user experience.",
      skills: ["WordPress Development", "Custom Themes", "PHP & MySQL"]
    },
    {
      id: 5,
      name: "Abraham",
      position: "Digital Marketing Expert",
      image: five,
      link: "team-single",
      quote: "Amplifying brand presence through strategic digital campaigns and creative marketing solutions.",
      description: "Digital marketing strategist with expertise in social media campaigns and brand development.",
      skills: ["Social Media Marketing", "Brand Strategy", "Campaign Management"]
    },
    {
      id: 6,
      name: "Oliver Mitchell",
      position: "Shopify Developer",
      image: six,
      link: "team-single",
      quote: "Building robust e-commerce solutions with Shopify expertise and conversion optimization.",
      description: "E-commerce developer specializing in Shopify store development and conversion optimization.",
      skills: ["Shopify Development", "E-commerce", "Conversion Optimization"]
    }
  ];

  return (
    <section className="section team-members-slider">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-8">
                  <div className="section__header text-center text-lg-start mb-0">
                    <span className="sub-title">
                      our awesome crew
                    </span>
                    <h2 className="title title-anim">
                      our techolix team members
                    </h2>
                  </div>
                </div>
                {/* <div className="col-12 col-lg-4">
                  <div className="text-center text-lg-end">
                    <Link
                      href="our-teams"
                      className="btn btn--primary text-capitalize"
                    >
                      view all teams
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-12">
            <div className="team-slider-container">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                speed={1200}
                loop={true}
                modules={[Autoplay, Navigation, Pagination]}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".team-next",
                  prevEl: ".team-prev",
                }}
                pagination={{
                  el: ".team-pagination",
                  clickable: true,
                  type: "bullets",
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                }}
                className="team-slider"
              >
                {teamMembers.map((member, index) => (
                  <SwiperSlide key={member.id}>
                    <div className="team-member-card">
                      <div className="member-image-wrapper">
                        <Link href={member.link}>
                          <Image 
                            src={member.image} 
                            alt={member.name}
                            width={300}
                            height={350}
                            style={{ objectFit: 'cover' }}
                          />
                        </Link>
                        <div className="member-overlay">
                          <p className="member-quote">"{member.quote}"</p>
                        </div>
                      </div>
                      
                      <div className="member-info">
                        <div className="member-basic">
                          <h4>
                            <Link href={member.link}>{member.name}</Link>
                          </h4>
                          <p className="position">{member.position}</p>
                        </div>
                        
                        <div className="member-description">
                          <p className="description">{member.description}</p>
                        </div>
                        
                        <div className="member-skills">
                          <div className="skills-list">
                            <h6>Expertise:</h6>
                            <div className="skills-tags">
                              {member.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} className="skill-tag">{skill}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div className="member-action">
                          <Link href={member.link} className="profile-link">
                            View Profile
                            <i className="fa-solid fa-arrow-right ml-2"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              {/* Navigation */}
              <div className="team-navigation">
                <button className="team-prev nav-btn">
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button className="team-next nav-btn">
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
              
              {/* Pagination */}
              <div className="team-pagination"></div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .team-members-slider {
          padding: 80px 0;
          position: relative;
        }
        
        .team-slider-container {
          position: relative;
          padding: 0 60px;
        }
        
        .team-member-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s ease;
          height: 100%;
          position: relative;
          margin: 0 15px;
          display: flex;
          flex-direction: column;
        }
        
        .team-member-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 116, 37, 0.1), transparent);
          transition: left 0.6s ease;
          z-index: 1;
        }
        
        .team-member-card:hover::before {
          left: 100%;
        }
        
        .team-member-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.08);
          border-color: #ff7425;
          box-shadow: 0 25px 50px rgba(255, 116, 37, 0.3);
        }
        
        .member-image-wrapper {
          position: relative;
          overflow: hidden;
          height: 280px;
          flex-shrink: 0;
        }
        
        .member-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 0.4s ease;
        }
        
        .team-member-card:hover .member-image-wrapper img {
          transform: scale(1.05);
        }
        
        .member-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.9));
          padding: 30px 20px 20px;
          transform: translateY(100%);
          transition: transform 0.4s ease;
          z-index: 2;
        }
        
        .team-member-card:hover .member-overlay {
          transform: translateY(0);
        }
        
        .member-quote {
          color: #fff;
          font-style: italic;
          font-size: 14px;
          line-height: 1.4;
          margin: 0;
        }
        
        .member-info {
          padding: 25px;
          position: relative;
          z-index: 2;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 350px;
        }
        
        .member-basic {
          flex-shrink: 0;
        }
        
        .member-description {
          flex: 1;
          display: flex;
          align-items: flex-start;
          margin: 15px 0;
        }
        
        .member-skills {
          flex-shrink: 0;
          margin-bottom: 15px;
        }
        
        .member-action {
          flex-shrink: 0;
          margin-top: auto;
        }
        
        .member-info h4 {
          color: #fff;
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 5px;
        }
        
        .member-info h4 a {
          color: #fff;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .member-info h4 a:hover {
          color: #ff7425;
        }
        
        .position {
          color: #ff7425;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .description {
          color: #d9d9d9;
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .skills-list h6 {
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 10px;
        }
        
        .skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 0;
          min-height: 60px;
          align-content: flex-start;
        }
        
        .skill-tag {
          background: rgba(255, 116, 37, 0.2);
          color: #ff7425;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 500;
          border: 1px solid rgba(255, 116, 37, 0.3);
          transition: all 0.3s ease;
        }
        
        .skill-tag:hover {
          background: rgba(255, 116, 37, 0.3);
          border-color: #ff7425;
          transform: translateY(-1px);
        }
        
        .profile-link {
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
        
        .profile-link:hover {
          color: #ff9900;
          transform: translateX(5px);
        }
        
        .profile-link .ml-2 {
          margin-left: 8px;
          transition: transform 0.3s ease;
        }
        
        .profile-link:hover .ml-2 {
          transform: translateX(3px);
        }
        
        /* Navigation Styles */
        .team-navigation {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          transform: translateY(-50%);
          display: flex;
          justify-content: space-between;
          pointer-events: none;
          z-index: 10;
        }
        
        .nav-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(255, 116, 37, 0.9), rgba(255, 153, 0, 0.9));
          border: none;
          color: white;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 25px rgba(255, 116, 37, 0.3);
          pointer-events: all;
        }
        
        .nav-btn:hover {
          background: linear-gradient(135deg, #ff7425, #ff9900);
          transform: scale(1.1);
          box-shadow: 0 12px 35px rgba(255, 116, 37, 0.5);
        }
        
        .nav-btn:active {
          transform: scale(0.95);
        }
        
        /* Pagination Styles */
        .team-pagination {
          display: flex;
          justify-content: center;
          margin-top: 40px;
        }
        
        :global(.team-pagination .swiper-pagination-bullet) {
          width: 12px;
          height: 12px;
          background: rgba(255, 116, 37, 0.3);
          border-radius: 50%;
          margin: 0 5px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        :global(.team-pagination .swiper-pagination-bullet-active) {
          background: #ff7425;
          transform: scale(1.2);
          box-shadow: 0 4px 15px rgba(255, 116, 37, 0.4);
        }
        
        /* Responsive Design */
        @media (max-width: 1199px) {
          .team-slider-container {
            padding: 0 50px;
          }
        }
        
        @media (max-width: 768px) {
          .team-members-slider {
            padding: 50px 0;
          }
          
          .team-slider-container {
            padding: 0 35px;
          }
          
          .nav-btn {
            width: 40px;
            height: 40px;
            font-size: 16px;
          }
          
          .member-image-wrapper {
            height: 250px;
          }
          
          .member-info {
            padding: 20px;
            min-height: 320px;
          }
          
          .member-info h4 {
            font-size: 20px;
          }
          
          .description {
            font-size: 13px;
          }
          
          .skill-tag {
            font-size: 10px;
            padding: 3px 6px;
          }
        }
        
        @media (max-width: 576px) {
          .team-slider-container {
            padding: 0 20px;
          }
          
          .nav-btn {
            width: 35px;
            height: 35px;
            font-size: 14px;
          }
        }
        
        /* Swiper Override Styles */
        :global(.team-slider .swiper-slide) {
          height: auto;
        }
        
        :global(.team-slider .swiper-wrapper) {
          align-items: stretch;
        }
      `}</style>
    </section>
  );
};

export default TeamMembers;


