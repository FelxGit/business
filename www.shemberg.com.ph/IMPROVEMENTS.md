# Shemberg Website Redesign - Improvement Notes

## What Was Redesigned

### Visual Design
- **Modern typography** with Playfair Display (headings) + Inter (body) replacing generic Wix fonts
- **Brand color scheme**: Navy (#0c2340), Green (#1a5632), Red accent (#c41e3a) replacing the generic Wix look
- **Full cinematic hero** with gradient overlays, animated scroll indicator, and dual CTAs
- **Sticky transparent navbar** that solidifies on scroll with smooth transitions
- **Card-based layouts** with hover animations, shadows, and border effects
- **Stats counter bar** with animated numbers
- **Scroll-triggered fade-in animations** throughout

### New Sections Added
1. **Stats Bar** — Key numbers (57+ years, 3 carrageenan types, 7K+ islands, 8+ industries)
2. **Vision / Mission / Quality Policy** — Dedicated section (previously embedded images, now properly structured)
3. **Product Carousel/Grid** — Kappa, Iota, Lambda with specific application lists
4. **Certifications Banner** — Dedicated strip with heading
5. **Applications Grid** — 8 industry cards with icons (Dairy, Meat, Pharma, Cosmetics, etc.)
6. **News & Updates** — 4 article cards with category badges
7. **CTA Banner** — Full-width call-to-action between news and contact
8. **Rich Footer** — 4-column layout with brand, links, products, social

### Interactive Features
- Smooth scroll navigation
- Mobile-responsive hamburger menu
- Animated stat counters on scroll
- Hover effects on all cards, buttons, and tags
- Intersection Observer for scroll animations
- Contact form with mailto fallback

---

## Recommended Future Improvements

### Content & SEO
- **Add unique page titles/descriptions** per section for crawlability
- **Add structured data (JSON-LD)** — Organization, Product, Breadcrumb schemas for rich snippets
- **Add a real blog** — Currently news items link nowhere. Create a `/news` or `/blog` route with individual article pages
- **Expand product pages** — Each carrageenan type should have its own dedicated page with technical specs, SDS/TDS downloads, and application guides
- **Add certifications detail** — Show what each certification (ISO, HACCP, HALAL, Kosher, GMP) means and link to certificate PDFs
- **Case studies / testimonials** — Client logos and success stories build trust
- **Add FAQ section** — Common carrageenan questions improve SEO (Google's "People Also Ask")

### Functionality
- **Real form backend** — Currently uses `mailto:`. Integrate with a service (Formspree, EmailJS, or a simple PHP/Node endpoint) for reliable lead capture
- **Product inquiry per type** — Add "Request a Quote" buttons on each product card that pre-fill the contact form with the product name
- **Language switcher** — If targeting Asian markets (China, Japan, Korea), add multilingual support
- **Live chat** — WhatsApp or chatbot for instant customer communication
- **Distributor/dealer locator** — Map showing global distribution network
- **Document downloads** — Brochures, spec sheets, certificates as downloadable PDFs with gated access (email capture)

### Performance
- **Convert images to WebP/AVIF** — The downloaded assets are JPG/PNG; modern formats save ~40% file size
- **Add lazy loading** — `loading="lazy"` on below-fold images
- **Minify CSS/JS** for production
- **Add a service worker** for offline caching (PWA)
- **CDN for assets** — Serve static files from a CDN (Cloudflare, CloudFront)

### Accessibility
- **Add skip-to-content link**
- **Verify all aria-labels** on interactive elements
- **Color contrast audit** — Ensure all text meets WCAG AA (4.5:1 ratio minimum)
- **Focus visible states** — Keyboard navigation focus rings
- **Alt text for all images** — Currently some are placeholder

### Brand & Marketing
- **Video hero option** — A short looping video of seaweed harvesting / production facility behind the hero text strengthens the brand story
- **Sustainability page** — ESG/sustainability commitment is increasingly important for B2B buyers. Shemberg's Philippine seaweed farming story is compelling
- **Trade show / event calendar** — Shemberg likely attends FI Europe, IFT, etc. Promote presence
- **Careers page** — Attract talent
- **Investor / company info** — If B2B, corporate structure, annual report, etc.
- **Newsletter signup** — Email marketing for product updates and industry insights

### Data & Analytics
- **Google Analytics 4** — Track page views, scroll depth, form submissions, product card clicks
- **Google Search Console** — Monitor keyword rankings, fix crawl errors
- **Heatmaps** — Hotjar or Clarity to understand user behavior
- **GTM implementation** — For managing marketing pixels without code deploys

### Infrastructure
- **SSL everywhere** — Enforce HTTPS (should already be in place)
- **Custom domain email** — `info@shemberg.com.ph` or similar (contact form uses this)
- **Uptime monitoring** — The old Wix site had reliability from Wix's infrastructure; self-hosted needs monitoring (UptimeRobot, etc.)
- **Automated backups** — If CMS-based; if flat files, git-based is sufficient
