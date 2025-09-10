import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import hrone from "public/images/projects/fpr.png";
import hrtwo from "public/images/projects/prp.png";
import hrthree from "public/images/projects/tprs.png";
import hrfour from "public/images/projects/brs.png";
import hrfive from "public/images/projects/bf1.png";
import hrsix from "public/images/projects/mb1.png";

gsap.registerPlugin(ScrollTrigger);
const ProjectMain = () => {
  const slider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ele = slider.current;

    if (window.innerWidth >= 992 && ele) {
      gsap.registerPlugin(ScrollTrigger);

      const rightSections = gsap.utils.toArray(".project-sl__single");

      const pin = gsap.to(rightSections, {
        xPercent: -100 * (rightSections.length - 3),
        ease: "none",
        scrollTrigger: {
          trigger: ele,
          pin: true,
          invalidateOnRefresh: true,
          start: "center center-=100",
          scrub: 1,
          end: () => "+=" + (slider.current?.offsetWidth || 0),
          markers: false,
        },
      });

      return () => {
        pin.kill();
      };
    }
  }, []);

  return (
    <section className="section project-sl" ref={slider}>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="https://firstpagerankerz.com/" target="_blank">
            <Image src={hrone} alt="Digital Agency Website - USA Client" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="https://firstpagerankerz.com/" target="_blank">
              digital agency
              <br />
              website (USA)
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="https://priceritepainting.com/" target="_blank">
            <Image src={hrtwo} alt="Painting Company Website - USA Client" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="https://priceritepainting.com/" target="_blank">
              painting company
              <br />
              website (USA)
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="https://toprecoveryservicesleicester.com/" target="_blank">
            <Image src={hrthree} alt="Car Recovery Leicester - UK Client" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="https://toprecoveryservicesleicester.com/" target="_blank">
              car recovery
              <br />
              Leicester (UK)
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="http://brightreachsolutions.com/" target="_blank">
            <Image src={hrfour} alt="Digital Agency Website - UK Client" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="http://brightreachsolutions.com/" target="_blank">
              digital agency
              <br />
              website (UK)
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="https://boundaryfencingservices.com/" target="_blank">
            <Image src={hrfive} alt="Fencing Services Landing Page - UK Client" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="https://boundaryfencingservices.com/" target="_blank">
              fencing services
              <br />
              landing page (UK)
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="https://carbreakdownrecovery247.com/" target="_blank">
            <Image src={hrsix} alt="Car Breakdown Recovery - UK Client" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="https://carbreakdownrecovery247.com/" target="_blank">
              car breakdown
              <br />
              recovery (UK)
            </Link>
          </h2>
        </div>
      </div>
      {/* <div className="project-sl__single">
        <div className="thumb">
          <Link href="project-single">
            <Image src={hrone} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="project-single">
              mobile app
              <br />
              development
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="project-single">
            <Image src={hrtwo} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="project-single">
              brand identity
              <br />
              difference
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="project-single">
            <Image src={hrthree} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="project-single">
              marketing app
              <br />
              solutions
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="project-single">
            <Image src={hrfour} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="project-single">
              LMS web app
              <br />
              lication
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="project-single">
            <Image src={hrfive} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="project-single">
              brand identity
              <br />
              difference
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="project-single">
            <Image src={hrsix} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="project-single">
              digital website
              <br />
              development
            </Link>
          </h2>
        </div>
      </div> */}
    </section>
  );
};

export default ProjectMain;
