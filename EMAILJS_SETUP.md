# EmailJS Setup Instructions

## Overview
The brochure download feature now requires users to fill out a contact form. The form data will be sent to **smdnisarahamed@gmail.com** using EmailJS.

## Setup Steps

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service
1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (since you're using a Gmail address)
4. Connect your Gmail account (smdnisarahamed@gmail.com)
5. Note down the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template content:

**Template Name:** Brochure Download Request

**Subject:** New Brochure Download Request from {{from_name}}

**Content:**
```
Hello,

You have received a new brochure download request:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Message: {{message}}

This request was submitted on {{request_date}}.

Best regards,
Aadhar Civil Consultancy Website
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key
1. Go to **Account** > **General**
2. Find your **Public Key** (e.g., `abc123XYZ`)

### 5. Update the Code
Open [`Brochure.tsx`](file:///c:/Users/sknik/Downloads/New%20folder/Aadhar-civil-consultancy/components/Brochure.tsx) and update these lines (around line 29-31):

```typescript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your actual Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your actual Template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your actual Public Key
```

Replace with:
```typescript
const serviceId = 'service_abc123'; // Your actual Service ID
const templateId = 'template_xyz789'; // Your actual Template ID
const publicKey = 'abc123XYZ'; // Your actual Public Key
```

### 6. Add Brochure PDF (Optional)
If you want to provide an actual PDF download:
1. Place your brochure PDF file in the `public` folder
2. Name it `brochure.pdf` (or update line 49 in Brochure.tsx with your filename)

If you don't have a PDF yet, the download will trigger but won't download anything (which is fine for testing).

## Testing

1. Navigate to the home page
2. Scroll to the Brochure section
3. Click "Request Brochure Download"
4. Fill out the form
5. Submit
6. Check the email inbox at smdnisarahamed@gmail.com

## EmailJS Free Tier Limits
- 200 emails per month (free plan)
- If you need more, consider upgrading to a paid plan

## Alternative: Using a Backend Service
If you prefer not to use EmailJS or need more control, you can:
1. Create a backend API (Node.js/Express, Python/Flask, etc.)
2. Use nodemailer or similar library to send emails
3. Update the form submission to POST to your backend endpoint

Let me know if you need help with any of these steps!
