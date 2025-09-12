import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";

const ReturnPolicy = () => {
  return (
    <Layout header={2} footer={2} video={false}>
      <CmnBanner title="Return Policy" navigation="Return Policy" />
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="section__header">
                <h2 className="title title-anim">Return Policy</h2>
                <p className="primary-text">
                  At Techolix Solutions, we are committed to delivering high-quality digital services. Please review our return policy below.
                </p>
              </div>
              
              <div className="content-wrapper">
                <div className="policy-section">
                  <h3>1. Service Satisfaction Guarantee</h3>
                  <p>
                    We stand behind the quality of our work. If you are not satisfied with our services, we will work with you to address any concerns and make necessary revisions at no additional cost during the revision period specified in your project contract.
                  </p>
                </div>

                <div className="policy-section">
                  <h3>2. Refund Eligibility</h3>
                  <p>
                    Refunds may be considered under the following circumstances:
                  </p>
                  <ul className="policy-list">
                    <li>Service delivery failure due to our inability to complete the project as agreed</li>
                    <li>Technical issues on our end that prevent project completion</li>
                    <li>Breach of contract terms by Techolix Solutions</li>
                  </ul>
                </div>

                <div className="policy-section">
                  <h3>3. Non-Refundable Services</h3>
                  <p>
                    The following services are generally non-refundable:
                  </p>
                  <ul className="policy-list">
                    <li>Completed work that meets project specifications</li>
                    <li>Third-party costs (domain registration, hosting, software licenses)</li>
                    <li>Time spent on approved project phases</li>
                    <li>Custom development work that has been delivered and approved</li>
                  </ul>
                </div>

                <div className="policy-section">
                  <h3>4. Partial Refunds</h3>
                  <p>
                    In cases where projects are partially completed, refunds will be calculated based on:
                  </p>
                  <ul className="policy-list">
                    <li>Work completed and delivered</li>
                    <li>Time invested in the project</li>
                    <li>Resources utilized</li>
                    <li>Third-party costs incurred</li>
                  </ul>
                </div>

                <div className="policy-section">
                  <h3>5. Digital Marketing Services</h3>
                  <p>
                    For ongoing services like Google Ads management, SEO, and digital marketing:
                  </p>
                  <ul className="policy-list">
                    <li>Monthly retainer fees are non-refundable once the service period begins</li>
                    <li>Ad spend and third-party platform costs are non-refundable</li>
                    <li>Services can be cancelled with 30 days written notice</li>
                  </ul>
                </div>

                <div className="policy-section">
                  <h3>6. Refund Process</h3>
                  <p>
                    To request a refund:
                  </p>
                  <ul className="policy-list">
                    <li>Contact us within 30 days of service completion or issue occurrence</li>
                    <li>Provide detailed explanation of the issue</li>
                    <li>Allow us opportunity to resolve the issue before requesting refund</li>
                    <li>Approved refunds will be processed within 10-15 business days</li>
                  </ul>
                </div>

                <div className="policy-section">
                  <h3>7. Client Responsibilities</h3>
                  <p>
                    Refunds may not be available if:
                  </p>
                  <ul className="policy-list">
                    <li>Client fails to provide necessary materials or information</li>
                    <li>Client requests changes beyond original project scope</li>
                    <li>Client terminates project without valid reason</li>
                    <li>Client violates terms of service agreement</li>
                  </ul>
                </div>

                <div className="policy-section">
                  <h3>8. Dispute Resolution</h3>
                  <p>
                    We encourage clients to communicate any concerns directly with our team. Most issues can be resolved through discussion and compromise. For formal disputes, we follow the dispute resolution process outlined in our service agreements.
                  </p>
                </div>

                <div className="policy-section">
                  <h3>9. Contact for Refund Requests</h3>
                  <p>
                    To discuss refund requests or service concerns, please contact us:
                  </p>
                  <ul className="contact-list">
                    <li>Email: Info@techolixsolutions.com</li>
                    <li>Phone: +1 (302) 579-5453</li>
                    <li>Include your project details and specific concerns</li>
                  </ul>
                </div>

                <div className="policy-section">
                  <p className="last-updated">
                    <strong>Last updated:</strong> September 10, 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ReturnPolicy;
