# Requirements Checklist - FitWorld Gym Website

## ✅ What We Have

### Assets
- [x] Logo (SVG format) - `public/Logo-Fitworld-Gym.svg`
- [x] Trainer photos (4 trainers) - `public/trainers/`
- [x] Gym gallery images (11 photos) - `public/images/media/`
- [x] Background images - `public/images/other/`
- [x] Current website screenshots (desktop & mobile) - `public/images/screenshots/`

### Content
- [x] Trainer bios (Romanian) - all 4 trainers documented
- [x] Pricing information - all 6 subscription types
- [x] Contact information - address, phone, email
- [x] Working hours - Mon-Sat schedule
- [x] Social media links - YouTube, Facebook, Instagram, TikTok
- [x] Mobile app links - iOS & Android (GMA app)

### Technical Setup
- [x] Next.js 16.1.1 initialized
- [x] TypeScript 5.9.3 configured
- [x] Tailwind CSS 4.x ready
- [x] Project structure defined

---

## 📋 What We Need Before Building

### Translations
- [x] ✅ **Will be done by developer** - All Hungarian and English translations

### Legal Documents
- [ ] Terms & Conditions (Romanian only)
- [ ] Privacy Policy (Romanian only, GDPR-compliant)

### Content (Nice to Have)
- [ ] "About Us" page full text (Romanian original)
- [ ] Gym story/history text
- [ ] Any testimonials from members
- [ ] Special announcements or offers

### APIs & Services (Required for Full Functionality)

#### Email Service (for contact form)
- [ ] **Using**: Resend (recommended for Netlify) - Sign up at https://resend.com
  - Free tier: 3,000 emails/month
  - Easy integration with Next.js

#### Google Maps (for interactive map)
- [x] ✅ Google Maps API key configured
  - ✅ Maps JavaScript API enabled
  - ✅ Places API (New) enabled

### Domain & Hosting
- [x] **Hosting**: Netlify (confirmed)
- [ ] DNS configuration (point domain to Netlify)
- [x] SSL certificate (included with Netlify)

---

## 🎨 Design Decisions Needed

### Color Scheme
Current website uses:
- **Primary**: Orange (#F16822)
- **Background**: Dark green/black (#1a2e1a approximately)
- **Text**: White/Light gray

**Question**: Keep same colors or refresh the palette?

### Typography
**Question**: Any preferred fonts, or should I choose modern alternatives?

### Hero Images
- [ ] Do you have higher resolution hero/slider images?
- [ ] Any new photos of the gym or trainers to include?

---

## 🚀 Ready to Start

Once we have the translations and decide on email service, I can begin building:

1. **Phase 1** (Can start now): 
   - Layout components (Header, Footer, Navigation)
   - Homepage structure
   - Team page with trainer cards
   - Pricing page
   - Contact page with map
   - Mobile responsiveness

2. **Phase 2** (Needs translations):
   - i18n integration (RO/HU/EN)
   - All content in 3 languages

3. **Phase 3** (Needs API):
   - Contact form email functionality
   - Form validation & error handling

---

## ✅ Decisions Made

1. **Translations**: Developer will create all HU and EN translations
2. **Email**: Using Resend (works great with Netlify)
3. **Legal pages**: Romanian only - developer will draft templates
4. **Hosting**: Netlify
5. **Google Reviews**: Will be displayed on the website

---

## 📊 Summary

| Category | Status | Notes |
|----------|--------|-------|
| Technical Setup | ✅ Ready | Next.js + TypeScript + Tailwind |
| Romanian Content | ✅ Ready | All content documented |
| Hungarian Content | ✅ Ready | Developer will translate |
| English Content | ✅ Ready | Developer will translate |
| Images | ✅ Ready | All assets collected |
| Email API | ✅ Decided | Resend for Netlify |
| Hosting | ✅ Decided | Netlify |
| Legal Documents | 🔄 In Progress | RO only, dev will draft |
| Google Reviews | ✅ Planned | Will embed on website |

**✅ READY TO START BUILDING!**

