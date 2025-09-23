import React from "react";
import Image from "next/image";
import thumbone from "public/images/service/cis.jpg";
import thumbtwo from "public/images/service/cis2.jpg";

const CloudInfrastructureMain = () => {
  return (
    <section className="section service-details fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="service-details__slider">
              <div className="service-details__slider-single">
                <div className="poster fade-top">
                  <Image src={thumbone} alt="Techolix Cloud Infrastructure Services" />
                </div>
                <div className="details-group section__cta text-start">
                  <h3 className="title-anim">Enterprise Cloud Infrastructure Solutions by Techolix</h3>
                  <p>
                    Techolix delivers cutting-edge cloud infrastructure services across the USA and UK, empowering businesses to scale efficiently, reduce costs, and enhance operational agility. Our certified cloud architects design, implement, and manage robust cloud environments on AWS, Microsoft Azure, and Google Cloud Platform, ensuring optimal performance and security for your critical business applications.
                  </p>
                  <p>
                    From cloud migration and multi-cloud strategies to DevOps automation and disaster recovery, we provide comprehensive cloud solutions tailored to your specific industry requirements. Our 24/7 monitoring and support services guarantee maximum uptime and performance, while our cost optimization strategies help reduce your cloud spending by up to 40% without compromising functionality or security.
                  </p>
                </div>
                <div className="section__content-cta">
                  <div className="row gaper">
                    <div className="col-12 col-lg-7">
                      <div className="details-group">
                        <h3 className="title-anim">Our Cloud Infrastructure Expertise</h3>
                        <p>
                          With offices in both the USA and UK, Techolix combines global expertise with local market knowledge to deliver world-class cloud infrastructure solutions. Our team of AWS, Azure, and GCP certified professionals ensures seamless cloud adoption, whether you're migrating legacy systems or building cloud-native applications.
                        </p>
                        <p>
                          We specialize in designing scalable, secure, and cost-effective cloud architectures that support high-availability applications, big data analytics, machine learning workloads, and enterprise-grade backup solutions. Our infrastructure-as-code approach ensures consistent deployments and simplified management across all environments.
                        </p>
                        <ul className="service-list">
                          <li><i className="fa-solid fa-circle-check"></i> Cloud Migration & Modernization</li>
                          <li><i className="fa-solid fa-circle-check"></i> Multi-Cloud Architecture Design</li>
                          <li><i className="fa-solid fa-circle-check"></i> DevOps & CI/CD Implementation</li>
                          <li><i className="fa-solid fa-circle-check"></i> Container Orchestration (Kubernetes)</li>
                          <li><i className="fa-solid fa-circle-check"></i> Cloud Security & Compliance</li>
                          <li><i className="fa-solid fa-circle-check"></i> Disaster Recovery & Backup Solutions</li>
                          <li><i className="fa-solid fa-circle-check"></i> 24/7 Monitoring & Support</li>
                          <li><i className="fa-solid fa-circle-check"></i> Cost Optimization & Management</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="poster-small">
                        <Image src={thumbtwo} alt="Techolix Cloud Architecture" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudInfrastructureMain;