import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import emailjs from '@emailjs/browser';

const ContactMain = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  
  const services = [
    'Web Development',
    'WordPress Websites', 
    'Shopify Development',
    'Digital Marketing',
    'SEO Optimization',
    'Google Ads',
    'Amazon Virtual Assistant',
    'Cyber Security',
    'General Inquiry',
    'Support',
    'Pricing'
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.custom-dropdown')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate that a service is selected
    if (!selectedService) {
      setSubmitStatus('Please select a service before submitting.');
      return;
    }
    
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
          setSelectedService('');
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
                 <p>Mon - Fri 12 pm - 09pm (UK)</p>
                <p>Sat    12pm - 4pm (UK)</p>
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
                      <div className="group-input ">
                        <div className="custom-dropdown">
                          <div 
                            className="dropdown-toggle" 
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              console.log('Toggle clicked. Current state:', isDropdownOpen);
                              console.log('Event target:', e.target);
                              console.log('Services array:', services);
                              const newState = !isDropdownOpen;
                              setIsDropdownOpen(newState);
                              console.log('Setting new state to:', newState);
                              // Force re-render check
                              setTimeout(() => {
                                console.log('State after timeout:', isDropdownOpen);
                                const menuElement = document.querySelector('.dropdown-menu');
                                console.log('Menu element found:', menuElement);
                                console.log('Menu element styles:', menuElement ? window.getComputedStyle(menuElement) : 'not found');
                              }, 100);
                            }}
                          >
                            <span>{selectedService || 'Select Service'} 
                               </span>
                            <i className={`fa-solid fa-chevron-down ${isDropdownOpen ? 'rotate' : ''}`}></i>
                          </div>
                          {isDropdownOpen && (
                            <div className="dropdown-menu show">
                              {/* <div style={{padding: '10px', color: 'white', background: 'red'}}>
                                DEBUG: Dropdown is open! Services count: {services.length}
                              </div> */}
                              {services.map((service, index) => (
                                <div 
                                  key={index}
                                  className={`dropdown-item ${selectedService === service ? 'active' : ''}`}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    console.log('Service selected:', service);
                                    setSelectedService(service);
                                    setIsDropdownOpen(false);
                                  }}
                                >
                                  {service}
                                </div>
                              ))}
                            </div>
                          )}
                          {/* Hidden input for form submission */}
                          <input 
                            type="hidden" 
                            name="subject" 
                            value={selectedService}
                          />
                        </div>
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
        
        .custom-dropdown {
          position: relative;
          width: 100%;
        }
        
        .dropdown-toggle {
          width: 100%;
          padding: 15px 50px 15px 20px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          color: #fff;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-height: 54px;
        }
        
        .dropdown-toggle::after {
          display: none !important;
          content: none !important;
        }
        
        .dropdown-toggle:hover {
          border-color: rgba(255, 255, 255, 0.4);
          background: rgba(255, 255, 255, 0.12);
        }
        
        .dropdown-toggle i {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          transition: transform 0.3s ease;
        }
        
        .dropdown-toggle i.rotate {
          transform: rotate(180deg);
        }
        
        .dropdown-menu {
          position: absolute;
          top: calc(100% + 5px);
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.95);
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 8px;
          z-index: 9999;
          max-height: 300px;
          overflow-y: auto;
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          animation: dropdownFadeIn 0.2s ease-out;
          margin-top: 2px;
        }
        
        .dropdown-menu.show {
          display: block !important;
          opacity: 1 !important;
          visibility: visible !important;
        }
        
        @keyframes dropdownFadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .dropdown-item {
          padding: 12px 20px;
          color: #fff;
          cursor: pointer;
          transition: all 0.2s ease;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .dropdown-item:last-child {
          border-bottom: none;
        }
        
        .dropdown-item:hover {
          background: rgba(0, 123, 255, 0.8);
          color: #fff;
        }
        
        .dropdown-item.active {
          background: rgba(0, 123, 255, 0.6);
          color: #fff;
        }
        
        .dropdown-menu::-webkit-scrollbar {
          width: 6px;
        }
        
        .dropdown-menu::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        
        .dropdown-menu::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
        }
        
        .dropdown-menu::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
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
        
        /* Improve other form inputs styling to match */
        .group-input input,
        .group-input textarea {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fff;
          transition: all 0.3s ease;
        }
        
        .group-input input:focus,
        .group-input textarea:focus {
          border-color: #007bff;
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
          outline: none;
        }
        
        .group-input input:hover,
        .group-input textarea:hover {
          border-color: rgba(255, 255, 255, 0.4);
          background: rgba(255, 255, 255, 0.12);
        }
        
        .group-input input::placeholder,
        .group-input textarea::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }
        
        @media (max-width: 768px) {
          .contact-main__form {
            padding: 25px;
          }
          
          .contact-main__form h3 {
            font-size: 24px;
          }
          
          .dropdown-toggle {
            padding: 12px 45px 12px 15px;
            font-size: 15px;
          }
        }
        
        /* For Internet Explorer */
        select::-ms-expand {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ContactMain;
