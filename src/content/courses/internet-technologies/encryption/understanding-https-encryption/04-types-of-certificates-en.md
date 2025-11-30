---
title: "Types of certificates and what to look for"
duration: 4 min
learningObjectives:
  - Know the difference between DV, OV, and EV certificates
  - Understand what level of verification each type provides
  - Recognize warning signs of invalid certificates
  - Know what to check before trusting a website
---

## Types of certificates and what to look for

Not all TLS certificates are created equal. They come in three main types, each requiring different levels of verification before being issued.

### Domain Validation (DV) certificates

Domain Validation certificates are the simplest and most common type. The CA only verifies that you control the domain name. No identity checks, no business verification.

**How verification works:**
The CA sends a challenge (like an email to admin@yourdomain.com or a special file to place on your website). If you complete it, you get the certificate.

**What it proves:**
Someone who controls this domain requested a certificate. That is all.

**Common uses:**
- Personal websites and blogs
- Small business sites
- Any site needing basic encryption

**Cost:**
Often free (Let's Encrypt) or very inexpensive.

DV certificates are perfectly fine for most websites. They encrypt your connection just as strongly as any other certificate. The difference is only in how much the CA verified about the certificate requester.

### Organization Validation (OV) certificates

Organization Validation certificates require more verification. The CA checks that your organization actually exists before issuing the certificate.

**How verification works:**
The CA verifies:
- Domain ownership
- Organization name and legal existence
- Physical address
- Phone number

This typically involves checking government databases and making phone calls.

**What it proves:**
A verified organization controls this website.

**Common uses:**
- Business websites
- Government sites
- Organizations wanting to display verified identity

**Cost:**
Moderate (typically $50-200 per year).

When you view an OV certificate, you can see the organization name in the certificate details.

### Extended Validation (EV) certificates

Extended Validation certificates require the most rigorous verification process.

**How verification works:**
The CA performs thorough checks including:
- All OV requirements
- Legal, operational, and physical existence of the organization
- Identity of specific individuals requesting the certificate
- Verification that the requester is authorized by the organization
- Face-to-face or video verification in some cases

This process can take days or weeks.

**What it proves:**
A thoroughly verified organization controls this website, and specific authorized individuals requested the certificate.

**Common uses:**
- Banks and financial institutions
- Major e-commerce sites
- Healthcare organizations
- Any site handling highly sensitive data

**Cost:**
Higher (typically $100-500+ per year).

Browsers used to display EV certificates with a green address bar and company name. Most browsers no longer do this, but you can still see the organization name by viewing the certificate details.

### Comparing certificate types

| Feature | DV | OV | EV |
|---------|-----|-----|-----|
| Encrypts data | Yes | Yes | Yes |
| Verifies domain control | Yes | Yes | Yes |
| Verifies organization exists | No | Yes | Yes |
| Extensive legal verification | No | No | Yes |
| Issuance time | Minutes | Days | Days to weeks |
| Typical cost | Free-$50 | $50-200 | $100-500+ |

### What to look for as a user

Here is the practical guidance for staying safe:

**Always check for HTTPS**

Before entering any sensitive information, confirm you see "https://" at the start of the address. Look for the padlock icon.

**Verify you are on the correct domain**

The most common attack is not breaking encryption. It is tricking you into visiting the wrong website. Always check the domain name carefully:
- yourbank.com (correct)
- your-bank.com (suspicious)
- yourbank.secure-login.com (wrong: you are on secure-login.com)

**Watch for certificate warnings**

If your browser shows any certificate warning, stop. Do not proceed unless you completely understand why the warning appeared. Common warnings include:

- "Your connection is not private"
- "This site's security certificate is not trusted"
- "The security certificate has expired"

**Know the difference between padlock and trust**

A padlock means your connection is encrypted. It does not mean the website is legitimate. Scam sites can have valid certificates too. Always verify you are on the website you intended to visit.

### Summary: Your HTTPS checklist

Before entering passwords, payment info, or personal data:

1. Confirm the address starts with https://
2. Look for the padlock icon
3. Double-check you are on the correct domain
4. Never ignore certificate warnings
5. Remember: HTTPS means secure connection, not trustworthy website

Understanding HTTPS and certificates gives you a crucial skill for navigating the internet safely. You now know what happens behind the scenes when you see that padlock icon, and more importantly, you know what to look for before trusting a website with your information.
