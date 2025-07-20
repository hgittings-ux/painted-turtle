# Painted Turtle LLC Website

A modern, responsive website for Painted Turtle LLC, a creative business founded by Penelope, a teenage artist from Northern Michigan. The site showcases watercolor cards and art, highlights a conservation mission, and will eventually support e-commerce.

## Features
- Nature-inspired, minimal design using Tailwind CSS
- Home, Shop (placeholder), About, Giving Back, and Contact pages
- 100% of profits are donated to protect local wildlife
- Placeholder shop and cart for future e-commerce
- Donation transparency section
- Responsive and accessible layout

## Tech Stack
- [Next.js](https://nextjs.org/) (Pages Router)
- [Tailwind CSS](https://tailwindcss.com/)
- React

## Editing Content
- **Images:** Replace placeholder SVGs in `/public` with your own artwork or logo. Update image paths in page files as needed.
- **Text:** Edit the page files in `/app` (e.g., `about/page.tsx`, `giving-back/page.tsx`) to update Penelope's story, mission, or donation info.
- **Shop:** Update `app/shop/page.tsx` to add real products and connect a payment system (Stripe/PayPal integration recommended).
- **Styling:** Adjust colors and fonts in `tailwind.config.js` and `app/globals.css`.

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Visit [http://localhost:3000](http://localhost:3000) to view the site.

## Customization
- **Logo:** Replace `/public/file.svg` with a hand-drawn, watercolor-style painted turtle logo.
- **Fonts:** Uses Google Fonts (Pacifico for handwritten, Inter for sans-serif).
- **Colors:** Custom palette inspired by Northern Michigan nature (see `tailwind.config.js`).

## Future Improvements
- Add real product images and Stripe/PayPal integration
- Improve donation transparency with live updates
- Add blog or news section for conservation updates

---

*Created with love for art, nature, and wildlife conservation.*
