import React, { useState } from "react";

const CloudInfrastructureProcess = () => {
  const [openStep, setOpenStep] = useState(-1);
  return (
    <section className="section ux-process fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-5">
            <div className="section__header text-center">
              <span className="sub-title">
                Cloud Infrastructure Process
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Our Proven Cloud Implementation Methodology
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="service-f-wrapper">
              {/* Step 1 */}
              <div className={"service-f-single fade-top" + (openStep === 0 ? " service-f-single-active" : "") }>
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Assessment & Strategy</h4>
                  </div>
                  {/* <div className="body-cn">
                    <p>
                      We begin with a comprehensive assessment of your current infrastructure, applications, and business requirements. Our cloud architects analyze workloads, dependencies, and compliance needs to develop a customized cloud strategy that aligns with your business objectives and budget constraints.
                    </p>
                  </div> */}
                </div>
                <button
                  aria-label="service-f"
                  className="toggle-service-f"
                  onClick={() => setOpenStep(openStep === 0 ? -1 : 0)}
                ></button>
                {openStep === 0 && (
                  <div className="p-single">
                    <div className="row gaper">
                      <div className="col-12 col-lg-6">
                        <ul>
                          <li>Current Infrastructure Audit</li>
                          <li>Application Dependency Mapping</li>
                          <li>Cloud Readiness Assessment</li>
                          <li>Migration Strategy Development</li>
                        </ul>
                      </div>
                      <div className="col-12 col-lg-6">
                        <ul>
                          <li>Cost-Benefit Analysis</li>
                          <li>Risk Assessment & Mitigation</li>
                          <li>Compliance Requirements Review</li>
                          <li>Timeline & Milestone Planning</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* Step 2 */}
              <div className={"service-f-single fade-top" + (openStep === 1 ? " service-f-single-active" : "") }>
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Architecture Design & Planning</h4>
                  </div>
                  {/* <div className="body-cn">
                    <p>
                      Our certified cloud architects design scalable, secure, and cost-effective cloud architectures tailored to your specific needs. We create detailed infrastructure blueprints, security frameworks, and automation strategies using industry best practices and cloud-native technologies.
                    </p>
                  </div> */}
                </div>
                <button
                  aria-label="service-f"
                  className="toggle-service-f"
                  onClick={() => setOpenStep(openStep === 1 ? -1 : 1)}
                ></button>
                {openStep === 1 && (
                  <div className="p-single">
                    <div className="row gaper">
                      <div className="col-12 col-lg-6">
                        <ul>
                          <li>Cloud Architecture Design</li>
                          <li>Network & Security Planning</li>
                          <li>Auto-scaling Configuration</li>
                          <li>Disaster Recovery Design</li>
                        </ul>
                      </div>
                      <div className="col-12 col-lg-6">
                        <ul>
                          <li>Multi-Cloud Strategy</li>
                          <li>DevOps Pipeline Design</li>
                          <li>Monitoring & Alerting Setup</li>
                          <li>Cost Optimization Planning</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* Step 3 */}
              <div className={"service-f-single fade-top" + (openStep === 2 ? " service-f-single-active" : "") }>
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Migration & Implementation</h4>
                  </div>
                  <div className="body-cn">
                    {/* <p>
                      We execute seamless cloud migrations using proven methodologies and automation tools. Our phased approach minimizes downtime and business disruption while ensuring data integrity and application performance throughout the migration process.
                    </p> */}
                  </div>
                </div>
                <button
                  aria-label="service-f"
                  className="toggle-service-f"
                  onClick={() => setOpenStep(openStep === 2 ? -1 : 2)}
                ></button>
                {openStep === 2 && (
                  <div className="p-single">
                    <div className="row gaper">
                      <div className="col-12 col-lg-6">
                        <ul>
                          <li>Environment Provisioning</li>
                          <li>Application Migration</li>
                          <li>Data Transfer & Sync</li>
                          <li>Security Implementation</li>
                        </ul>
                      </div>
                      <div className="col-12 col-lg-6">
                        <ul>
                          <li>Infrastructure as Code</li>
                          <li>CI/CD Pipeline Setup</li>
                          <li>Performance Testing</li>
                          <li>User Training & Documentation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* Step 4 */}
              <div className={"service-f-single fade-top" + (openStep === 3 ? " service-f-single-active" : "") }>
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Optimization & Monitoring</h4>
                  </div>
                  <div className="body-cn">
                    {/* <p>
                      Post-migration, we continuously monitor and optimize your cloud infrastructure for performance, security, and cost-efficiency. Our 24/7 support team ensures maximum uptime while implementing ongoing improvements and updates.
                    </p> */}
                  </div>
                </div>
                <button
                  aria-label="service-f"
                  className="toggle-service-f"
                  onClick={() => setOpenStep(openStep === 3 ? -1 : 3)}
                ></button>
                {openStep === 3 && (
                  <div className="p-single">
                    <div className="row gaper">
                      <div className="col-12 col-lg-6">
                        <ul>
                          <li>Performance Monitoring</li>
                          <li>Cost Optimization</li>
                          <li>Security Monitoring</li>
                          <li>Backup Verification</li>
                        </ul>
                      </div>
                      <div className="col-12 col-lg-6">
                        <ul>
                          <li>24/7 Technical Support</li>
                          <li>Regular Health Checks</li>
                          <li>Capacity Planning</li>
                          <li>Continuous Improvement</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudInfrastructureProcess;