# EmailJS Setup Guide

This guide will help you configure EmailJS to send emails directly from the frontend without any backend server.

## Steps to Configure EmailJS

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create an Email Service
1. After logging in, go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account and grant permissions
5. Note down your **Service ID** (it will look like `service_xxxxxxxxx`)

### 3. Create an Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use the following template structure:

**Subject:** `New Contact Form Submission from {{from_name}}`

**Email Content:**
```
Hello,

You have received a new contact form submission from Blue Grass Academy website.

Contact Details:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Interested Field: {{interested_field}}
- Preferred Slot: {{preferred_slot}}
- Program Name: {{program_name}}
- Program Timing: {{program_timing}}

Message: {{message}}

Best regards,
Blue Grass Academy Website
```

4. Save the template and note down your **Template ID** (it will look like `template_xxxxxxxxx`)

### 4. Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (it will look like `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`)

### 5. Update the Contact.jsx File
Replace the placeholder values in the `handleSubmit` function in `src/pages/Contact.jsx`:

```javascript
await emailjs.send(
    'YOUR_SERVICE_ID', // Replace with your actual Service ID
    'YOUR_TEMPLATE_ID', // Replace with your actual Template ID
    emailParams,
    'YOUR_PUBLIC_KEY' // Replace with your actual Public Key
);
```

### 6. Test the Configuration
1. Start your development server: `npm run dev`
2. Navigate to the Contact page
3. Fill out the form and submit
4. Check your email (the one connected to EmailJS) for the test email

## Important Notes

- **Free Plan Limitations**: EmailJS free plan allows 200 emails per month with 3 email templates
- **Security**: Your public key is safe to expose in frontend code as it has limited permissions
- **Email Address**: The form is configured to send emails to `preethamarivu22@gmail.com`
- **Form Data**: All form fields including name, email, phone, interested field, preferred slot, and program details will be included in the email

## Troubleshooting

If emails are not sending:
1. Check that all IDs are correctly replaced in the code
2. Verify your email service is properly connected
3. Check the browser console for error messages
4. Ensure your template variables match the ones in the code

## Alternative: Using Mailto Link (Fallback)

If EmailJS doesn't work, you can use a simple mailto link as a fallback:

```javascript
const handleMailto = () => {
    const subject = encodeURIComponent('Contact Form Submission');
    const body = encodeURIComponent(`
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Interested Field: ${formData.interestedField}
        Preferred Slot: ${formData.preferredSlot}
        Program Name: ${formData.programName}
        Program Timing: ${formData.programTiming}
    `);
    
    window.location.href = `mailto:preethamarivu22@gmail.com?subject=${subject}&body=${body}`;
};
```

This will open the user's default email client with the form data pre-filled.
