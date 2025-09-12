const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// SendGrid setup
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Contact form route
app.post("/contact", async (req, res) => {
  const { name, email, message, service_type } = req.body;

  if (!name || !email || !message || !service_type) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // 1️⃣ Email to Admin (shows user as reply-to)
  const adminMsg = {
    to: "info@techolixsolutions.com", // your admin email
    from: {
      email: "info@techolixsolutions.com",
      name: "TecholixSolutions"
    }, // must be your verified domain email
    replyTo: email, // makes reply go to user
    subject: `📩 New Contact Form Submission – ${name}`,
    headers: {
      Priority: "urgent",
      Importance: "high",
    },
    html: `
      <p>Dear Techolix Solutions Team,</p>

      <p>You have received a new contact form submission from your website.</p>

      <p><strong>CLIENT DETAILS:</strong></p>
      <pre style="font-family: monospace; background:#f4f4f4; padding:10px; border-radius:5px;">
Name: ${name}
Email: ${email}
Service Requested: ${service_type}
      </pre>

      <p><strong>CLIENT MESSAGE:</strong></p>
      <p>${message}</p>

      <p><strong>ADDITIONAL INFORMATION:</strong></p>
      <pre style="font-family: monospace; background:#f4f4f4; padding:10px; border-radius:5px;">
Source: Website Contact Form
Website: techolixsolutions.com
Priority: ${service_type} Inquiry
      </pre>

      <p>⚡ <strong>ACTION REQUIRED:</strong> Please respond to this inquiry within 24 hours.</p>

      <p>Best regards,<br/>Website Contact Form System</p>
    `,
  };

  // 2️⃣ Auto-Reply to User (always from admin mail)
  const autoReplyMsg = {
    to: email,
    from: {
      email: "info@techolixsolutions.com",
      name: "TecholixSolutions"
    },
    subject: "We've received your inquiry – Techolix Solutions",
    html: `
      <p>Dear ${name},</p>

      <p>Thank you for contacting <strong>Techolix Solutions</strong>! We've received your inquiry about <strong>${service_type}</strong> and our team will get back to you within 24 hours.</p>

      <p><strong>Your Inquiry:</strong></p>
      <p>${message}</p>

      <p>
        📧 Email: info@techolixsolutions.com<br/>
        📱 USA: +1 (302) 579-5453<br/>
        📱 UK: +44 (772) 784-0213
      </p>

      <p>Meanwhile, feel free to explore our services at <a href="https://www.techolixsolutions.com/our-services">www.techolixsolutions.com/our-services</a>.</p>

      <p>Best regards,<br/>Techolix Solutions Team</p>

      <hr/>
      <p style="font-size:12px;color:#777;">This is an automated response. Please do not reply to this email directly.</p>
    `,
  };

  try {
    await sgMail.send(adminMsg);
    await sgMail.send(autoReplyMsg);
    res.status(200).json({ success: "Message sent and auto-reply delivered!" });
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
    res.status(500).json({ error: "Failed to send messages." });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
