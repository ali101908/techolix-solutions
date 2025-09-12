import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import one from "public/images/teams/male-icon.png";

gsap.registerPlugin(ScrollTrigger);
const SamCollinsDetailsMain = () => {
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
                  <h4>Sam Collins</h4>
                  <p>WordPress Developer</p>
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
                  WordPress specialist with expertise in custom theme development, plugin creation, and performance optimization. 
                  I deliver robust and scalable WordPress solutions that combine beautiful design with powerful functionality. 
                  My deep understanding of WordPress architecture allows me to create custom solutions that are both 
                  user-friendly and developer-friendly.
                </p>
                <p>
                  I specialize in building high-performance WordPress websites that not only look great but also provide 
                  exceptional user experiences. From custom post types and fields to complex e-commerce integrations, 
                  I handle every aspect of WordPress development with attention to detail and best practices.
                </p>
                <p>
                  Focused on creating user-friendly, secure, and high-performance WordPress websites that drive business growth. 
                  I stay current with the latest WordPress trends and security practices to ensure every site I develop 
                  is future-proof and maintainable.
                </p>
              </div>
              <div className="skill-wrap">
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p>WordPress Development</p>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="94%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p>Custom Themes</p>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="91%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p>Plugin Development</p>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="87%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p>Performance Optimization</p>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="89%">
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

export default SamCollinsDetailsMain;
