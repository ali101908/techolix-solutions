import React from "react";
import Image from "next/image";
import thumbone from "public/images/service/cyber1.jpg";
import thumbtwo from "public/images/service/cyber2.jpg";

const CyberSecurityMain = () => {
  return (
    <section className="section service-details fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="service-details__slider">
              <div className="service-details__slider-single">
                <div className="poster fade-top">
                  <Image src={thumbone} alt="Cyber Security Services by Techolix" />
                </div>
                <div className="details-group section__cta text-start">
                  <h3 className="title-anim">Comprehensive Cyber Security Solutions</h3>
                  <p>
                    Protect your digital assets with Techolix&apos;s advanced cyber security services. Our certified security experts provide comprehensive protection for businesses across the USA and UK, implementing robust security frameworks, threat detection systems, and incident response protocols to safeguard your organization from evolving cyber threats.
                  </p>
                  <p>
                    From vulnerability assessments and penetration testing to managed security services and compliance consulting, we deliver enterprise-grade security solutions that protect your data, systems, and reputation while ensuring business continuity and regulatory compliance across both regions.
                  </p>
                </div>
                <div className="section__content-cta">
                  <div className="row gaper">
                    <div className="col-12 col-lg-7">
                      <div className="details-group">
                        <h3 className="title-anim">Advanced Threat Protection & Risk Management</h3>
                        <p>
                          Our cyber security specialists utilize cutting-edge technologies and industry best practices to create multi-layered defense systems that adapt to emerging threats and protect your business around the clock.
                        </p>
                        <p>
                          Whether you need endpoint protection, network security, or complete security transformation, our team provides the expertise and solutions necessary to maintain a strong security posture and achieve compliance with industry standards.
                        </p>
                        <ul className="service-list">
                          <li><i className="fa-solid fa-circle-check"></i> Security Assessment & Vulnerability Testing</li>
                          <li><i className="fa-solid fa-circle-check"></i> Penetration Testing & Ethical Hacking</li>
                          <li><i className="fa-solid fa-circle-check"></i> Network Security & Firewall Management</li>
                          <li><i className="fa-solid fa-circle-check"></i> Endpoint Protection & Monitoring</li>
                          <li><i className="fa-solid fa-circle-check"></i> Incident Response & Recovery</li>
                          <li><i className="fa-solid fa-circle-check"></i> Compliance & Risk Management</li>
                          <li><i className="fa-solid fa-circle-check"></i> Security Awareness Training</li>
                          <li><i className="fa-solid fa-circle-check"></i> 24/7 Security Monitoring (SOC)</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="poster-small">
                        <Image src={thumbtwo} alt="Cyber Security Solutions" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section__content-cta">
                  <div className="details-group">
                    <h3 className="title-anim">Specialized Security Services</h3>
                    <div className="row gaper">
                      <div className="col-12 col-md-6">
                        <div className="service-item">
                          <h4><i className="fa-solid fa-shield-alt"></i> Threat Detection & Response</h4>
                          <p>Advanced threat hunting, real-time monitoring, and rapid incident response to minimize impact and prevent future attacks.</p>
                        </div>
                        <div className="service-item">
                          <h4><i className="fa-solid fa-lock"></i> Data Protection & Encryption</h4>
                          <p>Comprehensive data security solutions including encryption, access controls, and data loss prevention systems.</p>
                        </div>
                        <div className="service-item">
                          <h4><i className="fa-solid fa-network-wired"></i> Network Security</h4>
                          <p>Secure network architecture design, firewall configuration, and intrusion detection/prevention systems.</p>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="service-item">
                          <h4><i className="fa-solid fa-search"></i> Security Audits & Compliance</h4>
                          <p>Thorough security assessments, compliance auditing for GDPR, HIPAA, SOX, and other regulatory requirements.</p>
                        </div>
                        <div className="service-item">
                          <h4><i className="fa-solid fa-cloud"></i> Cloud Security</h4>
                          <p>Secure cloud migration, configuration management, and ongoing protection for AWS, Azure, and Google Cloud platforms.</p>
                        </div>
                        <div className="service-item">
                          <h4><i className="fa-solid fa-graduation-cap"></i> Security Training</h4>
                          <p>Employee security awareness programs, phishing simulations, and security culture development initiatives.</p>
                        </div>
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

export default CyberSecurityMain;
