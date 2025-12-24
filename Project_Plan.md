# FitWorld Gym Salonta - Project Plan

## 📋 Project Overview

A modern, responsive website for **FitWorld Gym** located in Salonta, Romania. The website will showcase the gym's services, team, pricing, and allow visitors to contact the gym directly.

**Website URL:** [fitworldgym.ro](https://fitworldgym.ro/)

---

## 🎯 Project Goals

1. Create a visually stunning, modern website that stands out from the current design
2. Improve user experience across all devices (mobile-first approach)
3. Support 3 languages: **Romanian** (default), **Hungarian**, and **English**
4. Integrate a functional contact form with email delivery
5. Display an interactive map with gym location

---

## 📄 Pages Structure

### 1. Home (Acasă)
- Hero section with compelling CTA
- Services/offerings overview
- Team preview (featured trainers)
- Testimonials (if available)
- Quick contact section

### 2. About Us (Despre Noi)
- Gym story and mission
- Facilities showcase
- Values and philosophy

### 3. Team (Echipa)
Personal trainer profiles (each has their own dedicated page):

#### Codruța Coroian - Personal Trainer
**Specializations:**
- Personal Training (strength & toning)
- Schwinn Cycling
- Stretching (flexibility & mobility)
- HIIT (high-intensity interval training)
- Booty Builder

**Social:** [Instagram](https://www.instagram.com/co_codruta/) | [Facebook](https://www.facebook.com/codruta.coroian)

---

#### Bianka Beidak - Personal Trainer
**Offerings:**
- Personalized fitness programs
- Group training sessions
- Technical & motivational support
- Balanced lifestyle coaching

**Social:** [Instagram](https://www.instagram.com/biutza_bmb/) | [Facebook](https://www.facebook.com/beidak.bianka)

---

#### Cristian Kovacs - Personal Trainer (Certified since 2019)
**Specializations:**
- Bodybuilding
- Functional Fitness
- Strength Training
- Sports Nutrition Counseling

**Social:** [Instagram](https://www.instagram.com/cristikovacs0707/) | [Facebook](https://www.facebook.com/cristi.kovacs.75)

---

#### Tunde Modi - Personal Trainer & Multiple National Champion
**Expertise:**
- Personalized training plans
- Advanced expertise (biomechanics, sports nutrition, training techniques)
- Competition-level coaching
- Motivation & leadership

**Social:** [Instagram](https://www.instagram.com/tundenagymaria/) | [Facebook](https://www.facebook.com/profile.php?id=100009023287859)

### 4. Media (Galerie)
- Photo gallery of the gym
- Training sessions images
- Before/after transformations (if available)

### 5. Pricing (Abonamente)

| Abonament | Durată | Preț | Beneficii |
|-----------|--------|------|-----------|
| Abonament 30 zile | 1 lună | 140 RON | Acces nelimitat zona Fitness + Clase de Grup |
| Abonament 60 zile | 2 luni | 250 RON | Acces nelimitat zona Fitness + Clase de Grup |
| Abonament 180 zile | 6 luni | 730 RON | Acces nelimitat zona Fitness + Clase de Grup |
| Abonament 365 zile | 1 an | 1400 RON | Acces nelimitat zona Fitness + Clase de Grup |
| Abonament 15 zile | 15 zile | 110 RON | Acces nelimitat zona Fitness + Clase de Grup |
| Abonament Ocazional | 1 intrare/zi | 20 RON | Acces nelimitat zona Fitness |

### 6. Contact
- Contact form (sends to contact@fitworldgym.ro)
- Interactive map with location pin
- Contact information:
  - 📍 Salonta, Str. Kulin Gyorgy, nr. 37
  - 📞 +40 755 082 832
  - 📧 contact@fitworldgym.ro
- Working hours:
  - Mon-Fri: 09:00 - 22:00
  - Saturday: 09:00 - 17:00
  - Sunday: Closed
- Social media links

### Social Media
- **YouTube**: https://www.youtube.com/@fitworldgymsalonta
- **Facebook**: https://www.facebook.com/FitworldGymSalonta
- **Instagram**: https://www.instagram.com/fitworldgymsalonta
- **TikTok**: https://www.tiktok.com/@fitworldgym

### 7. Legal Pages
- Terms & Conditions (Termeni și condiții)
- Privacy Policy (Politica de confidențialitate)

### 8. Mobile App Section
Members use the **GMA (Gym Management App)** for check-in at the gym entrance.

**App Download Links:**
- iOS: https://apps.apple.com/ro/app/gma-gym-management-app/id1496040256
- Android: https://play.google.com/store/apps/details?id=com.companyname.gma

**Features to highlight:**
- QR code for quick check-in
- View subscription status
- Book fitness classes
- Payment history
- Body measurements tracking
- Important notifications

### 9. Google Reviews Section
Display Google Maps reviews on the website to build trust.

**Google Business Profile:** FitWorld Gym Salonta
- Embed reviews from Google Maps
- Show star rating and review count
- Link to full Google Maps reviews page

---

## 🌍 Internationalization (i18n)

| Language | Code | Default |
|----------|------|---------|
| Romanian | `ro` | ✅ Yes |
| Hungarian | `hu` | No |
| English | `en` | No |

- Language switcher in header/navigation
- URL structure: `/ro/`, `/hu/`, `/en/` or query param
- All content translated in all 3 languages

---

## 🚀 Development Phases

### Phase 1: Foundation (Current)
- [x] Next.js 16.1.x setup with TypeScript
- [x] Tailwind CSS configuration
- [ ] Project structure setup
- [ ] i18n configuration

### Phase 2: Design & Layout
- [ ] Design system (colors, typography, spacing)
- [ ] Header/Navigation component
- [ ] Footer component
- [ ] Responsive layout framework

### Phase 3: Core Pages
- [ ] Home page
- [ ] About page
- [ ] Team page
- [ ] Pricing page
- [ ] Contact page

### Phase 4: Features
- [ ] Language switcher
- [ ] Interactive map (Google Maps/Leaflet)
- [ ] Contact form with email integration
- [ ] Image gallery/lightbox

### Phase 5: Polish & Launch
- [ ] SEO optimization
- [ ] Performance optimization
- [ ] Cross-browser testing
- [ ] Mobile responsiveness verification
- [ ] Deployment

---

## 📅 Timeline (Estimated)

| Phase | Duration |
|-------|----------|
| Phase 1 | ✅ Complete |
| Phase 2 | 2-3 days |
| Phase 3 | 4-5 days |
| Phase 4 | 2-3 days |
| Phase 5 | 1-2 days |
| **Total** | **~2 weeks** |

---

---

## 🔴 Current Website Issues (To Fix)

### Mobile Responsiveness
- [ ] Footer menu invisible (white text on white background)
- [ ] Text and buttons cut off on screen edges
- [ ] Poor spacing and layout adaptation
- [ ] CTA buttons partially visible

### Language Switcher
- [ ] Hard to find (small text in corner on desktop)
- [ ] Buried at bottom of mobile menu
- [ ] Not intuitive for users

### Map
- [ ] Dark theme makes location hard to see
- [ ] Pin needs better visibility

### Legal Pages
- [ ] Terms & Conditions page is empty
- [ ] Privacy Policy contains generic WordPress template text
- [ ] Not GDPR compliant

### General UX
- [ ] No mobile app promotion section
- [ ] Contact form design can be improved
- [ ] Page load speed optimization needed

---

## 📝 Notes

- **Admin functionality**: Deferred to future phase (Supabase integration)
- **Content**: ✅ Screenshots collected for all pages
- **Improvements tracking**: See `Client_Proposal.md` for comparison

---

## 🔄 Future Enhancements (Post-Launch)

1. Admin dashboard (Supabase integration)
   - Schedule management
   - Trainer profiles management
   - Pricing updates
   - Image gallery management
2. Online booking system
3. Member portal
4. Blog/News section

