import React, { useState } from "react";
import Image from "next/image";
const thumb = "/images/agency/faq-thumb.png";

const TecholixFaqMain = () => {
  const [imgTab, setImgTab] = useState(0);

  const faqData = [
    {
      question: "What services does Techolix offer?",
      answer: "Techolix offers comprehensive digital solutions including Web Development, WordPress Websites, Google Ads management, SEO Optimization, Shopify Development, and Digital Marketing. We specialize in creating custom solutions tailored to your business needs across USA and UK markets."
    },
    {
      question: "How long does it take to develop a custom website?",
      answer: "Website development timelines vary based on complexity. A standard business website typically takes 2-4 weeks, while complex e-commerce or custom applications can take 6-12 weeks. We provide detailed project timelines during our initial consultation and keep you updated throughout the development process."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive 24/7 support and maintenance packages. This includes regular updates, security monitoring, performance optimization, content updates, and technical support. Our support packages are tailored to your specific needs and business requirements."
    },
    {
      question: "What makes Techolix different from other digital agencies?",
      answer: "Techolix stands out with our dual USA-UK presence, allowing us to serve clients across different time zones effectively. We combine cutting-edge technology with proven methodologies, offer 24/7 support, and focus on delivering measurable results that drive business growth."
    },
    {
      question: "Can you help improve my website's search engine rankings?",
      answer: "Absolutely! Our SEO optimization services include comprehensive keyword research, on-page optimization, technical SEO, content strategy, and link building. We use white-hat techniques to improve your search engine rankings and drive organic traffic to your website."
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer: "Yes, we work with startups, small businesses, and large enterprises. Our scalable solutions are designed to grow with your business. Whether you need a simple website or a complex digital ecosystem, we have the expertise to deliver results."
    },
    {
      question: "What is your approach to Google Ads management?",
      answer: "Our Google Ads approach focuses on ROI-driven campaigns. We conduct thorough keyword research, create compelling ad copy, optimize landing pages, and continuously monitor and adjust campaigns for maximum performance. We provide detailed reporting to show your ad spend effectiveness."
    },
    {
      question: "Can you migrate my existing website to WordPress?",
      answer: "Yes, we specialize in seamless website migrations to WordPress. We ensure all your content, SEO rankings, and functionality are preserved during the migration process. Our team handles everything from content transfer to design optimization for the WordPress platform."
    },
    {
      question: "Do you provide e-commerce solutions with Shopify?",
      answer: "Absolutely! We create custom Shopify stores with advanced features including payment gateways, inventory management, shipping integration, and mobile optimization. We also provide ongoing support for product updates, theme customization, and performance optimization."
    },
    {
      question: "How do you measure the success of digital marketing campaigns?",
      answer: "We use comprehensive analytics and KPIs to measure campaign success including website traffic, conversion rates, lead generation, ROI, and user engagement metrics. We provide detailed monthly reports and insights to help you understand your digital marketing performance."
    },
    {
      question: "What are your pricing models?",
      answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and monthly retainers. Pricing depends on project scope, complexity, and timeline. We provide detailed quotes after understanding your specific requirements and always maintain transparency in our pricing."
    },
    {
      question: "How do I get started with Techolix?",
      answer: "Getting started is easy! Contact us through our website, phone, or email to schedule a free consultation. We'll discuss your project requirements, provide recommendations, and create a customized proposal. Our team is ready to help bring your digital vision to life."
    }
  ];

  return (
    <section className="section faq fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title">
                frequently asked questions
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">Everything You Need to Know About Techolix Services</h2>
              <p>Find answers to the most commonly asked questions about our digital services, processes, and how we can help grow your business.</p>
            </div>
          </div>
        </div>
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <div className="faq__thumb fade-left">
              <Image src={thumb} alt="Techolix FAQ" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="accordion" id="accordion">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className={
                    "accordion-item content__space fade-top" +
                    (imgTab === index ? " faq-one-active" : " ")
                  }
                >
                  <h5 className="accordion-header" id={`heading${index}`}>
                    <button
                      className={
                        (imgTab === index ? "  " : " collapsed") + " accordion-button"
                      }
                      onClick={() => setImgTab(imgTab === index ? -1 : index)}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded={imgTab === index ? "true" : "false"}
                      aria-controls={`collapse${index}`}
                    >
                      {faq.question}
                    </button>
                  </h5>
                  <div
                    id={`collapse${index}`}
                    className={`accordion-collapse collapse${
                      imgTab === index ? " show " : ""
                    }`}
                    aria-labelledby={`heading${index}`}
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="section__content-cta text-center">
              <p>Still have questions? We're here to help!</p>
              <div className="section__content-cta-group">
                <a href="contact-us" className="btn btn--primary">
                  Contact Us Today
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
                <a href="tel:+13025795453" className="btn btn--outline">
                  Call Now: +1 (302) 579-5453
                  <i className="fa-solid fa-phone"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TecholixFaqMain;

