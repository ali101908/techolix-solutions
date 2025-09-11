import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import emailjs from '@emailjs/browser';

const ContactMain = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string>('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    if (form.current) {
      emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        form.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      )
      .then((result: any) => {
        console.log(result.text);
        setSubmitStatus('Message sent successfully!');
        setIsSubmitting(false);
        // Reset form
        if (form.current) {
          form.current.reset();
        }
      }, (error: any) => {
        console.log(error.text);
        setSubmitStatus('Failed to send message. Please try again.');
        setIsSubmitting(false);
      });
    }
  };
  return (
    <section className="section contact-m fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src="/images/phone.png" alt="Image" width={60} height={60} />
              </div>
              <div className="content">
                <h4>Phone & Contact</h4>
                <p>
                  <Link href="tel:+13025795453">Mobile : +1 (302) 579-5453</Link>
                </p>
                <p>
                  <Link href="tel:+447727840213">Mobile : +44 (772) 7840213</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src="/images/mail.png" alt="Image" width={60} height={60} />
              </div>
              <div className="content">
                <h4>Email Support</h4>
                <p>
                  <Link href="mailto:Info@techolixsolutions.com">
                    Info@techolixsolutions.com
                  </Link>
                </p>
                <p>
                  <Link href="mailto:Info@techolixsolutions.com">
                    General Inquiries
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src="/images/location.png" alt="Image" width={60} height={60} />
              </div>
              <div className="content">
                <h4>Location</h4>
                <p>
                  <Link  href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=/maps/place/1460%2BBroadway,%2BNew%2BYork,%2BNY%2B10036,%2BUSA/data%3D!4m2!3m1!1s0x89c259ab29218b1d:0x34803c530c7340ec%3Fsa%3DX%26ved%3D1t:242%26ictx%3D111&ved=2ahUKEwiCjerp89CPAxWKVaQEHXzkOysQ8gF6BAgSEAI&usg=AOvVaw3ht_DPHJOk5N5olfpovW-2" target="_blank">
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                  1460 Broadway, New York, NY 10036, USA
                </Link>
                 <Link  href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=/maps/place/30%2BStamford%2BSt,%2BLondon%2BSE1%2B9LS,%2BUK/data%3D!4m2!3m1!1s0x487604b1cec7ed4d:0x24ab5debdff26773%3Fsa%3DX%26ved%3D1t:242%26ictx%3D111&ved=2ahUKEwjeidDs9NCPAxVXVqQEHSsSJQwQ8gF6BAgPEAI&usg=AOvVaw2Z4b36r2V9bkx7RawpQeAP">
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                  30 Stamford Street, London SE1 9LQ, United Kingdom
                </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src="/images/time.png" alt="Image" width={60} height={60} />
              </div>
              <div className="content">
                <h4>Office Hour</h4>
                <p>Mon - Fri 09 am - 05pm (USA)</p>
                <p>Sat    10am - 4pm (USA)</p>
                 <p>Mon - Fri 12 pm - 09pm (USA)</p>
                <p>Sat    12pm - 4pm (USA)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="map-wrapper">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-8 col-xl-6">
                  <div className="contact-main__form fade-top">
                    <h3>Leave A Message</h3>
                    <form
                      ref={form}
                      onSubmit={sendEmail}
                      className="section__content-cta"
                    >
                      <div className="group-wrapper">
                        <div className="group-input">
                          <input
                            type="text"
                            name="user_name"
                            id="contactName"
                            placeholder="Name"
                            required
                          />
                        </div>
                        <div className="group-input">
                          <input
                            type="email"
                            name="user_email"
                            id="contactEmail"
                            placeholder="Email"
                            required
                          />
                        </div>
                      </div>
                      <div className="group-input drt">
                        <select name="subject" className="subject" required>
                          <option value="">Select Service</option>
                          <option value="Web Development">Web Development</option>
                          <option value="WordPress Websites">WordPress Websites</option>
                          <option value="Shopify Development">Shopify Development</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                          <option value="SEO Optimization">SEO Optimization</option>
                          <option value="Google Ads">Google Ads</option>
                          <option value="Amazon Virtual Assistant">Amazon Virtual Assistant</option>
                          <option value="Cyber Security">Cyber Security</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Support">Support</option>
                          <option value="Pricing">Pricing</option>
                        </select>
                      </div>
                      <div className="group-input">
                        <textarea
                          name="message"
                          id="contactMessage"
                          placeholder="Message"
                          required
                        ></textarea>
                      </div>
                      <div className="form-cta justify-content-center">
                        <button 
                          type="submit" 
                          className="btn btn--primary"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                      </div>
                      {submitStatus && (
                        <div className={`submit-status ${submitStatus.includes('successfully') ? 'success' : 'error'}`}>
                          {submitStatus}
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .contact-main__form {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          padding: 40px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }
        
        .contact-main__form h3 {
          text-align: center;
          margin-bottom: 30px;
          color: #fff;
          font-size: 28px;
        }
        
        .submit-status {
          text-align: center;
          margin-top: 15px;
          padding: 10px;
          border-radius: 5px;
          font-weight: 500;
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
        
        .form-cta {
          text-align: center;
        }
        
        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        @media (max-width: 768px) {
          .contact-main__form {
            padding: 25px;
          }
          
          .contact-main__form h3 {
            font-size: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactMain;
