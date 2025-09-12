import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import chroma from "chroma-js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const FooterTwo = () => {
  const currentYear = new Date().getFullYear();

  const animatedTextRef = useRef<any>(null);
  const [animatedTextContent, setAnimatedTextContent] = useState("");

  useEffect(() => {
    const animatedChars = document.querySelectorAll(".animated-char");

    if (animatedChars.length > 0) {
      const folksBD = gsap.timeline({
        repeat: -1,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".animated-text",
          start: "bottom 100%-=50px",
        },
      });

      const folksGradient = chroma.scale(["#ff7425", "#ffffff"]);

      animatedChars.forEach((charElement, index) => {
        const delay = index * 0.04;

        folksBD.to(
          charElement,
          {
            duration: 0.5,
            scaleY: 0.6,
            ease: "power3.out",
            transformOrigin: "center bottom",
          },
          delay
        );

        folksBD.to(
          charElement,
          {
            yPercent: -20,
            ease: "elastic",
            duration: 0.8,
          },
          delay + 0.5
        );

        folksBD.to(
          charElement,
          {
            scaleY: 1,
            ease: "elastic.out(2.5, 0.2)",
            duration: 1.5,
          },
          delay + 0.5
        );

        folksBD.to(
          charElement,
          {
            color: () => {
              return folksGradient(index / animatedChars.length).hex();
            },
            ease: "power2.out",
            duration: 0.3,
          },
          delay + 0.5
        );

        folksBD.to(
          charElement,
          {
            yPercent: 0,
            ease: "back",
            duration: 0.8,
          },
          delay + 0.7
        );

        folksBD.to(
          charElement,
          {
            color: "#ffffff",
            duration: 1.4,
          },
          delay + 0.9
        );
      });
    }
  }, [animatedTextContent]);

  useEffect(() => {
    const animatedText = animatedTextRef.current;
    const textContent = animatedTextRef.current?.textContent;
    if (textContent) {
      setAnimatedTextContent(textContent);
      animatedText.innerHTML = "";
    }
  }, []);

  return (
    <footer className="footer-two section pb-0">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-5 col-xl-4">
            <div className="footer-two__left">
              <div className="logo">
                <Link href="/">
                  <Image src="/images/agency/tech-icon.png"  priority alt="Image" height={100} width={200}/>
                </Link>
              </div>
              <div className="paragraph">
                <p>
                  Welcome to Techolix Solutions. We specialize in helping businesses like yours succeed online with comprehensive digital services. From website design and development to digital marketing across USA and UK markets.
                </p>
              </div>
              <div className="section__content-cta">
                <h2>
                  <Link
                    href="mailto:Info@techolixsolutions.com"
                    className="folks-text animated-text"
                    ref={animatedTextRef}
                  >
                    Info@techolixsolutions.com
                    {animatedTextContent.split("").map((char, index) => (
                      <span
                        aria-hidden="true"
                        className="animated-char"
                        key={index}
                      >
                        {char}
                      </span>
                    ))}
                  </Link>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xl-7 offset-xl-1 col-xxl-5 offset-xxl-3">
            <div className="footer-two__right">
              {/* <div className="social justify-content-start justify-content-lg-start">
                <Link href="https://www.facebook.com/" target="_blank">
                  <i className="fa-brands fa-facebook-f"></i>
                  <span>Facebook</span>
                </Link>
                <Link href="https://www.twitter.com/" target="_blank">
                  <i className="fa-brands fa-twitter"></i>
                  <span>Twitter</span>
                </Link>
                <Link href="https://www.pinterest.com/" target="_blank">
                  <i className="fa-brands fa-linkedin-in"></i>
                  <span>Linkedin</span>
                </Link>
                <Link href="https://www.instagram.com/" target="_blank">
                  <i className="fa-brands fa-instagram"></i>
                  <span>Instagram</span>
                </Link>
                <Link href="https://www.dribble.com/" target="_blank">
                  <i className="fa-light fa-basketball"></i>
                  <span>Dribble</span>
                </Link>
              </div> */}
              <div className="footer__single-meta section__content-cta">
                <Link  href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=/maps/place/1460%2BBroadway,%2BNew%2BYork,%2BNY%2B10036,%2BUSA/data%3D!4m2!3m1!1s0x89c259ab29218b1d:0x34803c530c7340ec%3Fsa%3DX%26ved%3D1t:242%26ictx%3D111&ved=2ahUKEwiCjerp89CPAxWKVaQEHXzkOysQ8gF6BAgSEAI&usg=AOvVaw3ht_DPHJOk5N5olfpovW-2" target="_blank">
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                  1460 Broadway, New York, NY 10036, USA
                </Link>
                 <Link  href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=/maps/place/30%2BStamford%2BSt,%2BLondon%2BSE1%2B9LS,%2BUK/data%3D!4m2!3m1!1s0x487604b1cec7ed4d:0x24ab5debdff26773%3Fsa%3DX%26ved%3D1t:242%26ictx%3D111&ved=2ahUKEwjeidDs9NCPAxVXVqQEHSsSJQwQ8gF6BAgPEAI&usg=AOvVaw2Z4b36r2V9bkx7RawpQeAP">
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                  30 Stamford Street, London SE1 9LQ, United Kingdom
                </Link>
                <Link href="tel:+13025795453">
                  <i className="fa-sharp fa-solid fa-phone-volume"></i>
                  +1 (302) 579-5453
                </Link>
                <Link href="mailto:Info@techolixsolutions.com">
                  <i className="fa-sharp fa-solid fa-envelope"></i>
                  Info@techolixsolutions.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">
          <div className="row align-items-center gaper">
            <div className="col-12 col-xl-6">
              <div className="footer__copyright-text text-center text-xl-start">
                <p>
                  Copyright &copy;
                  <span id="copyYear">{currentYear}</span> Techolix Solutions. All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-12 col-xl-6">
              <ul className="justify-content-center justify-content-xl-end">
                {/* <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="about-us">About</Link>
                </li>
                <li>
                  <Link href="our-services">Services</Link>
                </li> */}
                <li>
                  <Link href="terms-and-conditions">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="return-policy">Return Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;

