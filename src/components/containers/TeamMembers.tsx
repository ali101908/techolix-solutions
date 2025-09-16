import React from "react";
import Image from "next/image";
import Link from "next/link";
import one from "public/images/teams/male-icon.png";
import two from "public/images/teams/male-icon.png";
import three from "public/images/teams/male-icon.png";

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
    }
  ];

  return (
    <section className="section team-members-static">
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
                <div className="col-12 col-lg-4">
                  <div className="text-center text-lg-end">
                    <Link
                      href="our-teams"
                      className="btn btn--primary text-capitalize"
                    >
                      view all teams
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center mt-5">
          {teamMembers.map((member, index) => (
            <div key={member.id} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="team-member-card fade-up">
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
                  <h4>
                    <Link href={member.link}>{member.name}</Link>
                  </h4>
                  <p className="position">{member.position}</p>
                  
                  <p className="description">{member.description}</p>
                  
                  <div className="skills-list">
                    <h6>Expertise:</h6>
                    <ul>
                      {member.skills.map((skill, skillIndex) => (
                        <li key={skillIndex}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href={member.link} className="profile-link">
                    View Profile
                    <i className="fa-solid fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .team-members-static {
          padding: 80px 0;
        }
        
        .team-member-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s ease;
          height: 100%;
          position: relative;
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
        }
        
        .member-image-wrapper img {
          width: 100%;
          height: 250px;
          object-fit: cover;
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
          margin-bottom: 20px;
        }
        
        .skills-list h6 {
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 10px;
        }
        
        .skills-list ul {
          list-style: none;
          padding: 0;
          margin: 0 0 20px 0;
        }
        
        .skills-list li {
          color: #ff7425;
          font-size: 13px;
          padding: 3px 0;
          position: relative;
          padding-left: 15px;
        }
        
        .skills-list li::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: #ff7425;
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
        
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s ease forwards;
        }
        
        .fade-up:nth-child(1) { animation-delay: 0.1s; }
        .fade-up:nth-child(2) { animation-delay: 0.3s; }
        .fade-up:nth-child(3) { animation-delay: 0.5s; }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .team-members-static {
            padding: 50px 0;
          }
          
          .team-member-card {
            margin-bottom: 30px;
          }
          
          .member-info {
            padding: 20px;
          }
          
          .member-info h4 {
            font-size: 20px;
          }
          
          .description {
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
};

export default TeamMembers;


