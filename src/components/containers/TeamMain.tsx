import React from "react";
import Image from "next/image";
import Link from "next/link";
import one from "/images/teams/male-icon.png";
import two from "/images/teams/male-icon.png";
import three from "/images/teams/male-icon.png";
import four from "/images/teams/male-icon.png";
import five from "/images/teams/male-icon.png";
import six from "/images/teams/male-icon.png";

const TeamMain = () => {
  return (
    <section className="section team-m fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
              <div className="thumb">
                <Link href="team-single">
                  <Image src={one} alt="Image" />
                </Link>
                <div
                  className="thumb__content"
                  style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                >
                  <div className="info">
                    <p>
                      "Leading innovative web solutions with cutting-edge technologies and user-centric design approaches."
                    </p>
                  </div>
                  <h4>
                    <Link href="team-single">Ryan Parker</Link>
                  </h4>
                  <p>Web Development Lead</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
              <div className="thumb">
                <Link href="team-single">
                  <Image src={two} alt="Image" />
                </Link>
                <div
                  className="thumb__content"
                  style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                >
                  <div className="info">
                    <p>
                      "Orchestrating seamless project delivery through strategic planning and efficient team coordination."
                    </p>
                  </div>
                  <h4>
                    <Link href="team-single">Salman</Link>
                  </h4>
                  <p>Project Manager</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
              <div className="thumb">
                <Link href="team-single">
                  <Image src={three} alt="Image" />
                </Link>
                <div
                  className="thumb__content"
                  style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                >
                  <div className="info">
                    <p>
                      "Driving organic growth through advanced SEO strategies and data-driven optimization techniques."
                    </p>
                  </div>
                  <h4>
                    <Link href="team-single">Rohaan</Link>
                  </h4>
                  <p>SEO Specialist</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
              <div className="thumb">
                <Link href="team-single">
                  <Image src={four} alt="Image" />
                </Link>
                <div
                  className="thumb__content"
                  style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                >
                  <div className="info">
                    <p>
                      "Crafting powerful WordPress solutions with custom themes and seamless functionality."
                    </p>
                  </div>
                  <h4>
                    <Link href="team-single">Sam Collins</Link>
                  </h4>
                  <p>WordPress Developer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
              <div className="thumb">
                <Link href="team-single">
                  <Image src={five} alt="Image" />
                </Link>
                <div
                  className="thumb__content"
                  style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                >
                  <div className="info">
                    <p>
                      "Amplifying brand presence through strategic digital campaigns and creative marketing solutions."
                    </p>
                  </div>
                  <h4>
                    <Link href="team-single">Abraham</Link>
                  </h4>
                  <p>Digital Marketing Expert</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
              <div className="thumb">
                <Link href="team-single">
                  <Image src={six} alt="Image" />
                </Link>
                <div
                  className="thumb__content"
                  style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                >
                  <div className="info">
                    <p>
                      "Building robust e-commerce solutions with Shopify expertise and conversion optimization."
                    </p>
                  </div>
                  <h4>
                    <Link href="team-single">Oliver Mitchell</Link>
                  </h4>
                  <p>Shopify Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-12">
            <div className="section__content-cta text-center">
              <button className="btn btn--secondary">Load More..</button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TeamMain;
