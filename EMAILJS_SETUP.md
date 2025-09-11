# EmailJS Setup Instructions

## 1. Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service
1. Go to Email Services
2. Add service (Gmail, Outlook, etc.)
3. Connect your email account
4. Note down the **Service ID**

## 3. Create Email Template
1. Go to Email Templates
2. Create new template
3. Use this template content:

```
Subject: New Contact Form Submission - {{subject}}

Hello,

You have received a new message from your website contact form:

Name: {{user_name}}
Email: {{user_email}}
Service: {{subject}}
Message: {{message}}

Best regards,
Your Website Contact Form
```

4. Note down the **Template ID**

## 4. Get Public Key
1. Go to Account settings
2. Copy your **Public Key**

## 5. Update ContactMain.tsx
Replace these values in the ContactMain.tsx file:
- `YOUR_SERVICE_ID` with your actual Service ID
- `YOUR_TEMPLATE_ID` with your actual Template ID  
- `YOUR_PUBLIC_KEY` with your actual Public Key

## 6. Test the Form
1. Fill out the contact form on your website
2. Check your email for the message
3. Verify all form data is being sent correctly

## Template Variables Used:
- `{{user_name}}` - Contact person's name
- `{{user_email}}` - Contact person's email
- `{{subject}}` - Selected service
- `{{message}}` - Contact message

## Services Available in Dropdown:
- Web Development
- WordPress Websites
- Shopify Development
- Digital Marketing
- SEO Optimization
- Google Ads
- Amazon Virtual Assistant
- Cyber Security
- General Inquiry
- Support
- Pricing
