import React from "react";
import Image from "next/image";

const ClientFeedbackMain = () => {
  return (
    <section className="section feedback-s fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-md-6 col-xl-4">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="content">
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <p>
                  Techolix Solutions delivered an outstanding digital agency website that perfectly represents our brand. The modern design and seamless functionality have impressed all our clients. Lead generation increased by 400% within the first month!
                </p>
              </div>
              <hr />
              <div className="author">
                <div className="thumb">
                  <Image src="/images/testimonial/client.png" alt="Image" width={60} height={60} />
                </div>
                <div className="author-meta">
                  <h5>Mark Stevens</h5>
                  <p>CEO, Creative Digital Agency USA</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="content">
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <p>
                  Techolix created an amazing website for our painting company. The professional design showcases our work beautifully and the SEO optimization has brought us 250% more local customers. Online bookings have never been easier for our clients!
                </p>
              </div>
              <hr />
              <div className="author">
                <div className="thumb">
                  <Image src="/images/testimonial/client.png" alt="Image" width={60} height={60} />
                </div>
                <div className="author-meta">
                  <h5>Robert Martinez</h5>
                  <p>Owner, Premium Painting Company USA</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="content">
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <p>
                  Our car recovery business in Leicester needed a strong online presence. Techolix delivered exactly what we needed - a responsive website with real-time booking system. Emergency calls increased by 300% and customer satisfaction is at an all-time high.
                </p>
              </div>
              <hr />
              <div className="author">
                <div className="thumb">
                  <Image src="/images/testimonial/client.png" alt="Image" width={60} height={60} />
                </div>
                <div className="author-meta">
                  <h5>David Wilson</h5>
                  <p>Director, Leicester Car Recovery Services UK</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="content">
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <p>
                  Techolix Solutions completely transformed our digital agency with their cutting-edge web development. The modern, responsive design and advanced features have attracted high-profile clients. Our UK market presence has grown exponentially thanks to their expertise.
                </p>
              </div>
              <hr />
              <div className="author">
                <div className="thumb">
                  <Image src="/images/testimonial/client.png" alt="Image" width={60} height={60} />
                </div>
                <div className="author-meta">
                  <h5>Sarah Thompson</h5>
                  <p>Managing Director, Elite Digital Agency UK</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="content">
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <p>
                  Techolix created a professional landing page for our fencing services that perfectly showcases our work. The lead generation forms and contact system work flawlessly. We've seen a 350% increase in quote requests since the website launch!
                </p>
              </div>
              <hr />
              <div className="author">
                <div className="thumb">
                  <Image src="/images/testimonial/client.png" alt="Image" width={60} height={60} />
                </div>
                <div className="author-meta">
                  <h5>James Cooper</h5>
                  <p>Owner, Premium Fencing Services UK</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="feedback-s__single topy-tilt fade-top">
              <div className="content">
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <p>
                  Our car breakdown recovery service needed urgent digital transformation. Techolix delivered a comprehensive website with GPS tracking, emergency booking system, and mobile optimization. Customer response time improved by 200% and satisfaction rates soared.
                </p>
              </div>
              <hr />
              <div className="author">
                <div className="thumb">
                  <Image src="/images/testimonial/client.png" alt="Image" width={60} height={60} />
                </div>
                <div className="author-meta">
                  <h5>Michael Hughes</h5>
                  <p>Director, UK Car Breakdown Recovery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-12">
            <div className="section__content-cta text-center">
              <button className="btn btn--secondary">Load More</button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ClientFeedbackMain;
