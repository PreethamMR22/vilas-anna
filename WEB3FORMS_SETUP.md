# Web3Forms Setup Guide

This guide will help you configure Web3Forms to send emails directly from the frontend without any backend server.

## What is Web3Forms?

Web3Forms is a free service that allows you to receive form submissions directly to your email without any backend setup. It's perfect for contact forms on static websites.

## Steps to Configure Web3Forms

### 1. Create Web3Forms Account
1. Go to [https://web3forms.com/](https://web3forms.com/)
2. Sign up for a free account (you can use Google/GitHub for quick signup)
3. Verify your email address

### 2. Get Your Access Key
1. After logging in, go to your dashboard
2. You'll see your **Access Key** - it looks like `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`
3. Copy this access key

### 3. Configure Your Email
1. In the Web3Forms dashboard, go to "Settings"
2. Add your email address: `preethamarivu22@gmail.com`
3. Configure any additional settings (redirect URL, success message, etc.)

### 4. Update the Contact.jsx File
Replace the placeholder access key in `src/pages/Contact.jsx`:

```javascript
formDataToSend.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY'); // Replace with your actual Web3Forms access key
```

Change it to:
```javascript
formDataToSend.append('access_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'); // Your actual access key
```

### 5. Test the Configuration
1. Start your development server: `npm run dev`
2. Navigate to the Contact page
3. Fill out the form and submit
4. Check your email for the submission
5. Check the browser Network tab - you should see a POST request to `api.web3forms.com`

## Features

✅ **Free Plan Benefits:**
- 50 submissions per month
- No backend required
- Direct email delivery
- Anti-spam protection
- Custom redirect URLs

✅ **What gets sent:**
- Name, Email, Phone
- Interested Field, Preferred Slot
- Program Name and Timing
- Custom message with all details

✅ **Security:**
- Access key is safe to use in frontend
- No server-side code needed
- HTTPS secure submission

## Troubleshooting

If emails are not sending:

1. **Check Access Key**: Make sure you replaced `YOUR_WEB3FORMS_ACCESS_KEY` with your actual Web3Forms access key
2. **Check Network Tab**: Look for the POST request to `api.web3forms.com` in browser dev tools
3. **Check Console**: Look for any error messages in the browser console
4. **Check Web3Forms Dashboard**: Verify your email is configured correctly
5. **Check Spam Folder**: Sometimes emails go to spam folder

## Alternative: Formspree

If Web3Forms doesn't work, you can also use Formspree:

1. Go to [https://formspree.io/](https://formspree.io/)
2. Create a new form
3. Get your form endpoint URL
4. Replace the fetch URL in Contact.jsx:
```javascript
const response = await fetch('https://formspree.io/f/your-form-id', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
});
```

## Current Implementation

The form now:
- Sends data to Web3Forms API
- Shows loading state during submission
- Handles success/error responses
- Resets form after successful submission
- Sends all form data including program details

You'll see actual network requests in the browser dev tools when the form is submitted!
