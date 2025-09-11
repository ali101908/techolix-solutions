import React from "react";
import Image from "next/image";
import Link from "next/link";

const TeamMain = () => {
  return (
    <section className="section team-m fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
              <div className="thumb">
                <Link href="ryan-parker">
                  <Image src="/images/teams/male-icon.png" width={300} height={350} alt="Image" />
                </Link>
                <div
                  className="thumb__content"
                  style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                >
                  <div className="info">
                    <p>
                      &quot;Leading innovative web solutions with cutting-edge technologies and user-centric design approaches.&quot;
                    </p>
                  </div>
                  <h4>
                    <Link href="ryan-parker">Ryan Parker</Link>
                  </h4>
                  <p>Web Development Lead & Cyber Expert</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
              <div className="thumb">
                <Link href="salman">
                  <Image src="/images/teams/male-icon.png" width={300} height={350} alt="Image" />
                </Link>
                <div
                  className="thumb__content"
                  style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                >
                  <div className="info">
                    <p>
                      &quot;Orchestrating seamless project delivery through strategic planning and efficient team coordination.&quot;
                    </p>
                  </div>
                  <h4>
                    <Link href="salman">Salman</Link>
                  </h4>
                  <p>Project Manager</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
              <div className="thumb">
                <Link href="rohaan">
                  <Image src="/images/teams/male-icon.png" width={300} height={350} alt="Image" />
                </Link>
                <div
                  className="thumb__content"
                  style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                >
                  <div className="info">
                    <p>
                      &quot;Driving organic growth through advanced SEO strategies and data-driven optimization techniques.&quot;
                    </p>
                  </div>
                  <h4>
                    <Link href="rohaan">Rohaan</Link>
                  </h4>
                  <p>SEO Specialist & Amazon Entrepreneur</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
              <div className="thumb">
                <Link href="sam-collins">
                  <Image src="/images/teams/male-icon.png" width={300} height={350} alt="Image" />
                </Link>
                <div
                  className="thumb__content"
                  style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                >
                  <div className="info">
                    <p>
                      &quot;Crafting powerful WordPress solutions with custom themes and seamless functionality.&quot;
                    </p>
                  </div>
                  <h4>
                    <Link href="sam-collins">Sam Collins</Link>
                  </h4>
                  <p>WordPress Developer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
              <div className="thumb">
                <Link href="abraham">
                  <Image src="/images/teams/male-icon.png" width={300} height={350} alt="Image" />
                </Link>
                <div
                  className="thumb__content"
                  style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                >
                  <div className="info">
                    <p>
                      &quot;Amplifying brand presence through strategic digital campaigns and creative marketing solutions.&quot;
                    </p>
                  </div>
                  <h4>
                    <Link href="abraham">Abraham</Link>
                  </h4>
                  <p>Digital Marketing Expert</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
              <div className="thumb">
                <Link href="oliver-mitchell">
                  <Image src="/images/teams/male-icon.png" width={300} height={350} alt="Image" />
                </Link>
                <div
                  className="thumb__content"
                  style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                >
                  <div className="info">
                    <p>
                      &quot;Building robust e-commerce solutions with Shopify expertise and conversion optimization.&quot;
                    </p>
                  </div>
                  <h4>
                    <Link href="oliver-mitchell">Oliver Mitchell</Link>
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


