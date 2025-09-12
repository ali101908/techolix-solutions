import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import one from "public/images/teams/male-icon.png";

gsap.registerPlugin(ScrollTrigger);
const AbrahamDetailsMain = () => {
  useEffect(() => {
    const percentElements = document.querySelectorAll("[data-percent]");

    percentElements.forEach((el) => {
      const skillBarPercent = el.querySelector(
        ".skill-bar-percent"
      ) as HTMLElement | null;
      const percentValue = el.parentNode?.querySelector(
        ".percent-value"
      ) as HTMLElement | null;

      if (skillBarPercent && percentValue) {
        const percent = el.getAttribute("data-percent") || "0%";
        skillBarPercent.style.width = percent;
        percentValue.textContent = percent;
      }
    });

    const axProgressBar = document.querySelectorAll(".skill-bar-single");
    axProgressBar.forEach((element) => {
      const skillBarPercent = element.querySelector(
        ".skill-bar-percent"
      ) as HTMLElement | null;
      const percentValue = element.querySelector(
        ".percent-value"
      ) as HTMLElement | null;

      if (skillBarPercent && percentValue) {
        const target = percentValue.textContent || "0%";

        const axBarTimeline = gsap.timeline({
          defaults: {
            duration: 2,
          },
          scrollTrigger: {
            trigger: element,
          },
        });

        axBarTimeline.fromTo(
          skillBarPercent,
          {
            width: 0,
          },
          {
            width: target,
          }
        );

        axBarTimeline.from(
          percentValue,
          {
            textContent: "0%",
            snap: {
              textContent: 5,
            },
          },
          "<"
        );
      }
    });
  }, []);

  return (
    <section className="section pb-0 team-det fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-5 col-xxl-4">
            <div className="team-det__thumb fade-top">
              <Image src={one} alt="Image" />
              {/* <div className="social-alt">
                <Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  aria-label="share us on facebook"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
                <Link
                  href="https://www.twitter.com/"
                  target="_blank"
                  aria-label="share us on twitter"
                >
                  <i className="fa-brands fa-twitter"></i>
                </Link>
                <Link
                  href="https://www.linkedin.com/"
                  target="_blank"
                  aria-label="share us on linkedin"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </Link>
              </div> */}
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xxl-8">
            <div className="team-det__content fade-top">
              <div className="intro">
                <div className="intro-left">
                  <h4>Abraham</h4>
                  <p>Digital Marketing Expert</p>
                </div>
                <div className="intro-right">
                  <Link href="contact-us" className="btn btn--primary">
                    Contact Us
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
              <div className="content">
                <h5>About Me</h5>
                <p>
                  Digital marketing strategist with expertise in social media marketing, PPC campaigns, and content marketing. 
                  I create data-driven campaigns that deliver exceptional ROI and build lasting brand connections. My approach 
                  combines creative storytelling with analytical precision to achieve measurable business results.
                </p>
                <p>
                  I specialize in developing comprehensive digital marketing strategies that span multiple channels and platforms. 
                  From Facebook and Google Ads to influencer partnerships and email marketing, I orchestrate integrated campaigns 
                  that maximize reach and engagement while optimizing conversion rates and customer acquisition costs.
                </p>
                <p>
                  Dedicated to building brand awareness and driving conversions through innovative digital marketing strategies. 
                  I stay ahead of industry trends and platform changes to ensure my clients maintain competitive advantages 
                  in the ever-evolving digital landscape.
                </p>
              </div>
              <div className="skill-wrap">
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p>Social Media Marketing</p>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="92%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p>PPC Campaigns</p>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="89%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p>Content Strategy</p>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="86%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p>Analytics & Reporting</p>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="91%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
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

export default AbrahamDetailsMain;
