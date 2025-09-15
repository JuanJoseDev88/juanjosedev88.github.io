# Email Service Setup Instructions

Your contact form is ready to work with any of these free email services. Choose one:

## Option 1: Formspree (Recommended - Easiest)

### Setup Steps:
1. Go to [https://formspree.io](https://formspree.io)
2. Sign up with your email address
3. Create a new form
4. Copy your form endpoint (looks like: `https://formspree.io/f/xpzkgqny`)
5. Replace `YOUR_FORM_ID` in `src/components/Contact.astro` with your actual form ID

### Example:
```html
<!-- Replace this line in Contact.astro -->
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">

<!-- With your actual form ID -->
<form class="contact-form" action="https://formspree.io/f/xpzkgqny" method="POST">
```

**Free Tier**: 50 submissions/month

---

## Option 2: EmailJS (Client-side email)

### Setup Steps:
1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Sign up and create a service
3. Create an email template
4. Get your service ID, template ID, and public key
5. Update the contact form JavaScript

### Implementation:
Add this to your `contactForm.ts`:
```javascript
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init('YOUR_PUBLIC_KEY');

// In your form submit handler:
const response = await emailjs.sendForm(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  form
);
```

**Free Tier**: 200 emails/month

---

## Option 3: Web3Forms (No signup required)

### Setup Steps:
1. Go to [https://web3forms.com](https://web3forms.com)
2. Enter your email address
3. Get your access key
4. Update the form action

### Example:
```html
<form class="contact-form" action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
  <!-- rest of your form fields -->
</form>
```

**Free Tier**: Unlimited submissions

---

## Option 4: Netlify Forms (If deploying to Netlify)

### Setup Steps:
1. Add `data-netlify="true"` to your form
2. Deploy to Netlify
3. Forms will automatically work

### Example:
```html
<form class="contact-form" data-netlify="true" name="contact">
  <!-- your form fields -->
</form>
```

**Free Tier**: 100 submissions/month

---

## Current Form Features ✅

Your contact form already includes:
- ✅ Proper form validation
- ✅ JavaScript form handling
- ✅ Success/error messages
- ✅ Spam protection (honeypot field)
- ✅ Responsive design
- ✅ Multi-language support (ES/EN)

## Next Steps:

1. **Choose a service** from the options above
2. **Follow the setup steps** for your chosen service
3. **Test the form** by submitting a message
4. **Check your email** to confirm it's working

**Recommendation**: Start with **Formspree** as it's the easiest to set up and your form is already configured for it!