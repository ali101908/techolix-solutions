import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import star from "public/images/testimonial/star.png";

const HomeTwoCta = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);

  // Auto-hide success message after 3 seconds
  useEffect(() => {
    if (submitStatus.includes("successful")) {
      const timer = setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setSubmitStatus('Please enter your email address.');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitStatus('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitStatus("Newsletter subscription successful! Check your email for our services guide.");
        setEmail(''); // Clear form
      } else {
        setSubmitStatus(data.error || "Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error('Newsletter submission error:', error);
      setSubmitStatus("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="cta-s">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="cta__wrapper"
              data-background="assets/images/cta-bg.png"
            >
              <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-9">
                  <div className="section__header text-center">
                    <h2 className="title">
                      Stay Ahead With Our Top Notch Digital Services
                    </h2>
                  </div>
                  <div className="footer__single-form">
                    <form ref={formRef} onSubmit={handleSubmit}>
                      <div className="input-email">
                        <input
                          type="email"
                          name="subscribe-news"
                          id="subscribeNews"
                          placeholder="Enter Your Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          disabled={isSubmitting}
                        />
                        <button type="submit" className="subscribe" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <i className="fa-solid fa-spinner fa-spin"></i>
                          ) : (
                            <i className="fa-sharp fa-solid fa-paper-plane"></i>
                          )}
                        </button>
                      </div>
                    </form>
                    {submitStatus && (
                      <div className={`submit-status ${submitStatus.includes("successful") ? "success" : "error"}`}>
                        {submitStatus}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <Image src={star} alt="Image" className="star" />
              <Image src={star} alt="Image" className="star-two" />
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .submit-status {
          text-align: center;
          margin-top: 15px;
          padding: 12px;
          border-radius: 8px;
          font-weight: 500;
          font-size: 14px;
          transition: all 0.3s ease;
        }
        
        .submit-status.success {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
          border: 1px solid rgba(34, 197, 94, 0.3);
        }
        
        .submit-status.error {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.3);
        }
        
        .input-email input:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .subscribe:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .fa-spinner {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @media (max-width: 768px) {
          .submit-status {
            font-size: 13px;
            padding: 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeTwoCta;


