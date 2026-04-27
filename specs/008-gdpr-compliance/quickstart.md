# Quickstart: GDPR Compliance

**Branch**: `008-gdpr-compliance`

## Prerequisites

- Hugo Extended 0.160.0+ installed (`hugo version`)
- Node.js 20 + npm (`node --version`)
- npm dependencies installed (`npm install`)

## Testing Locally

```bash
hugo server
```

Open http://localhost:1313

## Verification Checklist

### 1. No Third-Party Font Requests

Open DevTools (F12) > Network tab > Filter by "googleapis" or "gstatic".

Expected: **0 results** on any page.

### 2. No Analytics Script

Open DevTools > Network tab > Filter by "cloudflareinsights" or "beacon".

Expected: **0 results** on any page.

### 3. Self-hosted Fonts Load

Network tab > Filter by "inter". Expected: requests to `/assets/fonts/inter-*.woff2` with 200 status.

### 4. Privacy Policy Pages

| URL | Expected |
|-----|----------|
| http://localhost:1313/privacy/ | EN privacy policy |
| http://localhost:1313/fr/politique-de-confidentialite/ | FR privacy policy |
| http://localhost:1313/es/politica-de-privacidad/ | ES privacy policy |

### 5. Legal Notices Pages

| URL | Expected |
|-----|----------|
| http://localhost:1313/legal/ | EN legal notices |
| http://localhost:1313/fr/mentions-legales/ | FR legal notices |
| http://localhost:1313/es/aviso-legal/ | ES legal notices |

### 6. Footer Links

Every page footer should have links to Privacy Policy and Legal Notices. Verify on homepage, about, blog, pricing, contact.

### 7. Contact Form Consent Checkbox

Visit http://localhost:1313/contact/ - try submitting without checking the consent box. Browser should block submission.

### 8. Hugo Build Clean

```bash
hugo --printPathWarnings
```

Expected: 0 warnings, 0 errors.
