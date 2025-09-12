import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";

const TermsAndConditions = () => {
  return (
    <Layout header={2} footer={2} video={false}>
      <CmnBanner title="Terms & Conditions" navigation="Terms & Conditions" />
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="section__header">
                <h2 className="title title-anim">Terms and Conditions</h2>
                <p className="primary-text">
                  Welcome to Techolix Solutions. These terms and conditions outline the rules and regulations for the use of our services and website.
                </p>
              </div>
              
              <div className="content-wrapper">
                <div className="terms-section">
                  <h3>1. Introduction</h3>
                  <p>
                    By accessing this website and using our services, we assume you accept these terms and conditions. Do not continue to use Techolix Solutions&apos; services if you do not agree to take all of the terms and conditions stated on this page.
                  </p>
                </div>

                <div className="terms-section">
                  <h3>2. Services</h3>
                  <p>
                    Techolix Solutions provides digital services including web development, WordPress websites, Google Ads management, SEO optimization, Shopify development, and digital marketing services to clients in the USA and UK.
                  </p>
                </div>

                <div className="terms-section">
                  <h3>3. Payment Terms</h3>
                  <ul className="terms-list">
                    <li>Payment terms will be specified in individual project contracts</li>
                    <li>All payments must be made in the agreed currency (USD/GBP)</li>
                    <li>Late payment fees may apply for overdue invoices</li>
                    <li>Refunds are subject to our return policy</li>
                  </ul>
                </div>

                <div className="terms-section">
                  <h3>4. Intellectual Property</h3>
                  <p>
                    Upon full payment, clients retain ownership of their custom-developed websites and content. Techolix Solutions retains rights to our proprietary tools, frameworks, and methodologies used in service delivery.
                  </p>
                </div>

                <div className="terms-section">
                  <h3>5. Service Limitations</h3>
                  <ul className="terms-list">
                    <li>Service delivery times are estimates and may vary based on project complexity</li>
                    <li>We reserve the right to refuse service for projects that violate our ethical standards</li>
                    <li>Third-party service dependencies may affect project timelines</li>
                  </ul>
                </div>

                <div className="terms-section">
                  <h3>6. Liability and Warranties</h3>
                  <p>
                    While we strive to provide the highest quality services, Techolix Solutions provides services as is without warranties of any kind. Our liability is limited to the amount paid for services rendered.
                  </p>
                </div>

                <div className="terms-section">
                  <h3>7. Privacy and Data Protection</h3>
                  <p>
                    We are committed to protecting your privacy and comply with applicable data protection laws including GDPR (for UK clients) and relevant US privacy regulations.
                  </p>
                </div>

                <div className="terms-section">
                  <h3>8. Termination</h3>
                  <p>
                    Either party may terminate services with written notice. Termination terms and conditions will be specified in individual service agreements.
                  </p>
                </div>

                <div className="terms-section">
                  <h3>9. Governing Law</h3>
                  <p>
                    These terms shall be governed by and interpreted in accordance with the laws of the jurisdiction where the service contract is established (USA or UK).
                  </p>
                </div>

                <div className="terms-section">
                  <h3>10. Contact Information</h3>
                  <p>
                    If you have any questions about these Terms and Conditions, please contact us:
                  </p>
                  <ul className="contact-list">
                    <li>Email: Info@techolixsolutions.com</li>
                    <li>Phone: +1 (302) 579-5453</li>
                  </ul>
                </div>

                <div className="terms-section">
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

export default TermsAndConditions;
