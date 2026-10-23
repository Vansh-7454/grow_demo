# Paws & Claws Pet Grooming — Gurugram (GROW Plan)

A fast, fully static, production-ready website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS** for **Paws & Claws Pet Grooming** in Gurugram, Haryana.

Designed for high local search visibility, Google Business Profile trust, and direct appointment conversion via WhatsApp.

---

## 1. Quick Start (Run Locally)

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

To test the optimized production build:
```bash
npm run build
npm run start
```

---

## 2. How to Edit All Site Text & Details

All copy, contact numbers, studio address, packages, and pricing placeholders are centralized in a single file:

📁 **`src/data/siteContent.ts`**

Open this file to update:
- `business.address`: Replace `[CONFIRM SHOP NUMBER]` with the registered Google Business Profile address.
- `business.phoneDisplay` & `business.whatsappRaw`: Add your actual mobile / WhatsApp number.
- `business.googleReviewUrl`: Paste your Google Business review link.
- `dogPackages` & `catPackages`: Update the `[Confirm Price: ...]` placeholders with your confirmed rates.
- `faqs`: Update or add answers to client questions.

---

## 3. How to Swap Gallery & Studio Photos

Per our zero-fake-claims rule, no artificial AI pet photos are used. Neutral placeholders define the exact aspect ratios and dimensions required:

1. Prepare your photos according to the specs in **`/gallery`**:
   - Aspect ratio: `4:3` (Recommended: `1200 x 900 px`)
   - Formats: `.jpg`, `.png`, or `.webp`
2. Place photos into the **`public/gallery/`** directory matching the filenames:
   - `golden-retriever-full-groom.jpg`
   - `shih-tzu-teddy-cut.jpg`
   - `indie-dog-bath.jpg`
   - `persian-cat-grooming.jpg`
   - `cat-dry-bath-nail-trim.jpg`
   - `cat-lion-cut.jpg`
3. Update `PhotoPlaceholder.tsx` or swap into `next/image` when files are added.

---

## 4. How to Deploy to Vercel

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "Complete Paws and Claws Pet Grooming GROW plan website"
   git push origin main
   ```
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import this repository (`grow_demo`).
4. Keep the default Next.js build settings:
   - Framework: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Click **"Deploy"**.

### Custom Domain & DNS Settings
To link your custom domain (e.g. `pawsandclaws-gurugram.in`):
1. Navigate to **Project Settings > Domains** in Vercel.
2. Enter your domain name and follow the DNS configuration:
   - **Type A**: Host `@` pointing to `76.76.21.21`
   - **Type CNAME**: Host `www` pointing to `cname.vercel-dns.com`

---

## 5. Security & Privacy Notes

- **Zero Tracking**: No marketing tracking scripts or third-party cookies.
- **Client Form Security**: The contact form does not store customer data in a cloud database; it normalizes the phone number and prepares a direct WhatsApp message.
- **Security Headers**: Configured in `next.config.ts` (Content-Security-Policy, X-Frame-Options, X-Content-Type-Options).
