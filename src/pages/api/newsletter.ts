import sgMail from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next';

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  // Newsletter/Services email to subscriber
  const newsletterMsg = {
    to: email,
    from: {
      email: "info@techolixsolutions.com",
      name: "TecholixSolutions"
    },
    subject: "🚀 Boost Your Business with TecholixSolutions - Digital Services Guide",
    html: `
      <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; color: white;">
          <h1 style="margin: 0; font-size: 28px; font-weight: bold;">TecholixSolutions</h1>
          <p style="margin: 10px 0 0; font-size: 16px; opacity: 0.9;">Digital Excellence, Delivered</p>
        </div>
        
        <div style="padding: 30px; background: #f9f9f9;">
          <h2 style="color: #667eea; margin-bottom: 20px;">🎯 Ready to Transform Your Business?</h2>
          
          <p>Hello there!</p>
          
          <p>Thank you for your interest in TecholixSolutions! We're excited to help you <strong>boost your traffic</strong> and <strong>grow your business</strong> with our comprehensive digital services.</p>
          
          <div style="background: white; padding: 25px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #667eea;">
            <h3 style="color: #667eea; margin-top: 0;">🚀 How We Can Boost Your Business:</h3>
            
            <div style="margin: 15px 0;">
              <h4 style="color: #333; margin-bottom: 8px;">💻 Web Development & Design</h4>
              <p style="margin: 0; color: #666;">Custom websites that convert visitors into customers with modern, responsive designs.</p>
            </div>
            
            <div style="margin: 15px 0;">
              <h4 style="color: #333; margin-bottom: 8px;">📈 Digital Marketing & SEO</h4>
              <p style="margin: 0; color: #666;">Increase your online visibility and drive qualified traffic to your website.</p>
            </div>
            
            <div style="margin: 15px 0;">
              <h4 style="color: #333; margin-bottom: 8px;">🛍️ E-commerce Solutions</h4>
              <p style="margin: 0; color: #666;">Shopify & WordPress stores that maximize your online sales potential.</p>
            </div>
            
            <div style="margin: 15px 0;">
              <h4 style="color: #333; margin-bottom: 8px;">💰 Google Ads & PPC</h4>
              <p style="margin: 0; color: #666;">Targeted advertising campaigns that deliver immediate results and ROI.</p>
            </div>
            
            <div style="margin: 15px 0;">
              <h4 style="color: #333; margin-bottom: 8px;">🔒 Cyber Security</h4>
              <p style="margin: 0; color: #666;">Protect your business and customer data with enterprise-level security.</p>
            </div>
          </div>
          
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px; text-align: center; margin: 25px 0;">
            <h3 style="margin: 0 0 15px; font-size: 20px;">🎁 Special Offer for New Clients</h3>
            <p style="margin: 0 0 15px; font-size: 16px;">Get a <strong>FREE consultation</strong> and <strong>20% discount</strong> on your first project!</p>
            <a href="https://www.techolixsolutions.com/contact-us" style="display: inline-block; background: white; color: #667eea; padding: 12px 25px; text-decoration: none; border-radius: 25px; font-weight: bold; margin-top: 10px;">Claim Your Offer →</a>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #667eea; margin-top: 0;">📊 Why Choose TecholixSolutions?</h3>
            <ul style="margin: 0; padding-left: 20px; color: #666;">
              <li>✅ <strong>Proven Results:</strong> 500+ successful projects delivered</li>
              <li>✅ <strong>Expert Team:</strong> Certified professionals in all digital domains</li>
              <li>✅ <strong>24/7 Support:</strong> Dedicated account managers for your success</li>
              <li>✅ <strong>Global Reach:</strong> Serving clients in USA, UK, and worldwide</li>
              <li>✅ <strong>ROI Focused:</strong> Every strategy designed to maximize your returns</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <h3 style="color: #667eea;">Ready to Get Started?</h3>
            <p style="margin-bottom: 20px;">Let's discuss how we can help boost your business traffic and growth!</p>
            
            <div style="margin: 20px 0;">
              <a href="https://www.techolixsolutions.com/contact-us" style="display: inline-block; background: #667eea; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; margin: 5px;">Start Your Project</a>
              <a href="https://www.techolixsolutions.com/our-services" style="display: inline-block; background: transparent; color: #667eea; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; margin: 5px; border: 2px solid #667eea;">View All Services</a>
            </div>
          </div>
          
          <div style="background: #f0f0f0; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0;">
            <h4 style="margin: 0 0 10px; color: #333;">📞 Connect With Us Today</h4>
            <p style="margin: 5px 0; color: #666;">📧 Email: info@techolixsolutions.com</p>
            <p style="margin: 5px 0; color: #666;">📱 USA: +1 (302) 579-5453</p>
            <p style="margin: 5px 0; color: #666;">📱 UK: +44 (772) 784-0213</p>
            <p style="margin: 5px 0; color: #666;">🌐 Website: <a href="https://www.techolixsolutions.com" style="color: #667eea;">www.techolixsolutions.com</a></p>
          </div>

        </div>
        
        <div style="background: #333; color: white; padding: 20px; text-align: center;">
          <p style="margin: 0; font-size: 14px;">© 2025 TecholixSolutions. All rights reserved.</p>
          <p style="margin: 5px 0 0; font-size: 12px; opacity: 0.7;">
            This email was sent because you subscribed to our newsletter. 
          
          </p>
        </div>
      </div>
    `,
  };

  // Admin notification for new newsletter subscription
  const adminNotificationMsg = {
    to: "info@techolixsolutions.com",
    from: {
      email: "info@techolixsolutions.com",
      name: "TecholixSolutions"
    },
    subject: `📧 New Newsletter Subscription - ${email}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #667eea; color: white; padding: 20px; text-align: center;">
          <h2 style="margin: 0;">New Newsletter Subscription</h2>
        </div>
        
        <div style="padding: 20px; background: #f9f9f9;">
          <h3>📧 New Subscriber Details:</h3>
          <div style="background: white; padding: 15px; border-radius: 5px; margin: 10px 0;">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subscription Date:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Source:</strong> Homepage CTA Newsletter</p>
          </div>
          
          <div style="background: #e8f4f8; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h4 style="color: #667eea; margin-top: 0;">📋 Next Steps:</h4>
            <ul>
              <li>Add subscriber to your email marketing list</li>
              <li>Consider following up with personalized services offer</li>
              <li>Track engagement for future campaigns</li>
            </ul>
          </div>
          
          <p><strong>Services email sent:</strong> ✅ Comprehensive business boost guide delivered</p>
        </div>
      </div>
    `,
  };

  try {
    // Send both emails
    await sgMail.send(newsletterMsg);
    await sgMail.send(adminNotificationMsg);
    
    res.status(200).json({ success: "Newsletter subscription successful! Check your email for our services guide." });
  } catch (error: any) {
    console.error('Newsletter API Error:', error);
    if (error.response) {
      console.error(error.response.body);
    }
    res.status(500).json({ error: "Failed to send newsletter. Please try again." });
  }
}
