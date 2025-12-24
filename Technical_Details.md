# FitWorld Gym Salonta - Technical Details

## 🛠 Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Next.js (App Router) | 16.1.1 |
| Language | TypeScript | 5.9.3 |
| UI Library | React | 19.2.3 |
| Styling | Tailwind CSS | 4.x |
| Linting | ESLint | 9.x |
| Package Manager | npm | - |

---

## 📁 Project Structure

```
web-ftw-gym/
├── src/
│   ├── app/
│   │   ├── [locale]/              # i18n routing
│   │   │   ├── page.tsx           # Home
│   │   │   ├── despre-noi/        # About
│   │   │   ├── echipa/            # Team
│   │   │   ├── media/             # Gallery
│   │   │   ├── abonamente/        # Pricing
│   │   │   ├── contact/           # Contact
│   │   │   └── layout.tsx
│   │   ├── layout.tsx             # Root layout
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/                    # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── ...
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── LanguageSwitcher.tsx
│   │   ├── sections/              # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── TeamPreview.tsx
│   │   │   └── ...
│   │   ├── ContactForm.tsx
│   │   └── Map.tsx
│   ├── lib/
│   │   ├── i18n/
│   │   │   ├── config.ts
│   │   │   ├── dictionaries/
│   │   │   │   ├── ro.json
│   │   │   │   ├── hu.json
│   │   │   │   └── en.json
│   │   │   └── getDictionary.ts
│   │   └── utils.ts
│   └── types/
│       └── index.ts
├── public/
│   ├── images/
│   │   ├── team/
│   │   ├── gallery/
│   │   └── ...
│   └── fonts/
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── postcss.config.mjs
```

---

## 🌍 Internationalization (i18n) Strategy

### Approach: App Router with Dynamic Segments

Using Next.js App Router's built-in support for internationalized routing.

```typescript
// src/lib/i18n/config.ts
export const locales = ['ro', 'hu', 'en'] as const;
export const defaultLocale = 'ro';

export type Locale = (typeof locales)[number];
```

### Dictionary Structure

```json
// src/lib/i18n/dictionaries/ro.json
{
  "navigation": {
    "home": "Acasă",
    "about": "Despre noi",
    "team": "Echipa",
    "media": "Media",
    "pricing": "Abonamente",
    "contact": "Contact"
  },
  "hero": {
    "title": "Vrei să devii mai sănătos, mai puternic și mai pregătit?",
    "cta": "Contactează-ne!"
  },
  // ... more translations
}
```

### URL Structure

| Page | Romanian (default) | Hungarian | English |
|------|-------------------|-----------|---------|
| Home | `/` or `/ro` | `/hu` | `/en` |
| About | `/ro/despre-noi` | `/hu/rolunk` | `/en/about` |
| Team | `/ro/echipa` | `/hu/csapat` | `/en/team` |
| Pricing | `/ro/abonamente` | `/hu/berletek` | `/en/pricing` |
| Contact | `/ro/contact` | `/hu/kapcsolat` | `/en/contact` |

---

## 📧 Contact Form Implementation

### Email Service Options

| Service | Pros | Cons |
|---------|------|------|
| **Resend** | Easy setup, generous free tier | Requires domain verification |
| **SendGrid** | Reliable, good free tier | More complex setup |
| **Nodemailer + SMTP** | Direct, no third-party | Requires SMTP credentials |
| **Formspree** | Zero-code, simple | External dependency |

### Recommended: Resend or Server Action with SMTP

```typescript
// src/app/api/contact/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();
  
  await resend.emails.send({
    from: 'FitWorld Gym <noreply@fitworldgym.ro>',
    to: 'contact@fitworldgym.ro',
    subject: `Mesaj nou de la ${name}`,
    html: `
      <h2>Mesaj nou de pe website</h2>
      <p><strong>Nume:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      <p><strong>Mesaj:</strong> ${message}</p>
    `
  });
  
  return Response.json({ success: true });
}
```

---

## 🗺 Map Integration

### Option 1: Google Maps (Recommended)

```typescript
// Using @react-google-maps/api
const GYM_LOCATION = {
  lat: 46.8019,  // Salonta coordinates
  lng: 21.6536,
  address: "Str. Kulin Gyorgy, nr. 37, Salonta"
};
```

### Option 2: Leaflet (Free, No API Key)

```typescript
// Using react-leaflet
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
```

### Dependencies to Install

```bash
# For Google Maps
npm install @react-google-maps/api

# OR for Leaflet (free alternative)
npm install leaflet react-leaflet
npm install -D @types/leaflet
```

---

## 🎨 Design System

### Color Palette (To Be Defined)

```css
:root {
  /* Primary - Brand colors */
  --primary: #...;
  --primary-dark: #...;
  --primary-light: #...;
  
  /* Secondary */
  --secondary: #...;
  
  /* Neutrals */
  --background: #...;
  --foreground: #...;
  --muted: #...;
  
  /* Accents */
  --accent: #...;
  --success: #...;
  --error: #...;
}
```

### Typography

```css
/* Headings - Bold, impactful */
font-family: 'Font TBD', sans-serif;

/* Body - Readable, clean */
font-family: 'Font TBD', sans-serif;
```

---

## 📦 Additional Dependencies to Install

```bash
# i18n (if using next-intl)
npm install next-intl

# Map
npm install leaflet react-leaflet
npm install -D @types/leaflet

# Email (choose one)
npm install resend
# OR
npm install nodemailer
npm install -D @types/nodemailer

# Animations (optional)
npm install framer-motion

# Icons
npm install lucide-react
```

---

## 🔗 Social Media Links

```typescript
// src/lib/constants.ts
export const SOCIAL_LINKS = {
  youtube: 'https://www.youtube.com/@fitworldgymsalonta',
  facebook: 'https://www.facebook.com/FitworldGymSalonta',
  instagram: 'https://www.instagram.com/fitworldgymsalonta',
  tiktok: 'https://www.tiktok.com/@fitworldgym',
} as const;

export const CONTACT_INFO = {
  address: 'Salonta, Str. Kulin Gyorgy, nr. 37',
  phone: '+40 755 082 832',
  email: 'contact@fitworldgym.ro',
  coordinates: {
    lat: 46.8019,
    lng: 21.6536,
  },
} as const;

export const WORKING_HOURS = {
  weekdays: '09:00 - 22:00',  // Mon-Fri
  saturday: '09:00 - 17:00',
  sunday: 'Închis / Closed / Zárva',
} as const;

export const TEAM_MEMBERS = [
  {
    id: 'codruta-coroian',
    name: 'Codruța Coroian',
    role: 'Personal Trainer',
    image: '/images/team/codruta-coroian.jpg',
    specializations: [
      'Personal Training',
      'Schwinn Cycling',
      'Stretching',
      'HIIT',
      'Booty Builder',
    ],
    bio: {
      ro: `Codruța Coroian este instructoare de fitness, cu o experiență vastă în susținerea unui stil de viață activ și sănătos, apreciată pentru atitudinea ei pozitivă si capacitatea de a motiva clientii sa isi atinga potențialul maxim.

Specializările sale, acreditate si certificate, includ:
• Personal Training: Programe personalizate pentru forță și tonus.
• Schwinn Cycling: Antrenamente cardio dinamice și motivante.
• Stretching: Exerciții pentru flexibilitate și mobilitate.
• HIIT: Exerciții de intensitate ridicată pentru performanță și arderea caloriilor.
• Booty Builder: Program special dedicat pentru creșterea și definirea mușchilor fesieri.`,
      hu: '', // To be translated
      en: '', // To be translated
    },
    social: {
      instagram: 'https://www.instagram.com/co_codruta/',
      facebook: 'https://www.facebook.com/codruta.coroian',
    },
  },
  {
    id: 'bianka-beidak',
    name: 'Bianka Beidak',
    role: 'Personal Trainer',
    image: '/images/team/bianka-beidak.jpg',
    specializations: [
      'Personalized Fitness Programs',
      'Group Training',
      'Technical & Motivational Support',
      'Balanced Lifestyle Coaching',
    ],
    bio: {
      ro: `Bianka Beidak este instructor de fitness certificat, cu o pasiune puternică pentru un stil de viață sănătos și activ. Cu o pregătire solidă în domeniul fitness-ului și o abordare dedicată fiecărui client, Bianka se asigură că fiecare antrenament devine o experiență plăcută și eficientă.

Ce poate oferi Bianka:
• Programe personalizate de fitness: Fie că îți dorești să slăbești, sau să-ți îmbunătățești condiția fizică, Bianka îți creează un plan de antrenament adaptat nevoilor și obiectivelor tale.
• Antrenamente de grup: Dinamice și pline de energie, sesiunile de grup conduse de Bianka sunt ideale pentru a-ți menține motivația și a te bucura de sprijinul unei comunități active.
• Suport și îndrumare: Bianka este alături de tine la fiecare pas, oferind îndrumare tehnică și motivațională pentru a-ți atinge potențialul maxim.
• Promovarea unui stil de viață echilibrat: Cu Bianka, fitness-ul nu înseamnă doar exerciții, ci și o abordare și un mindset pozitiv.

Cu o atitudine prietenoasă și profesională, Bianka Beidak este aici pentru a te inspira să-ți depășești limitele și să-ți transformi stilul de viață. Indiferent de nivelul tău de experiență, Bianka îți va oferi sprijinul de care ai nevoie pentru a-ți atinge obiectivele tale.`,
      hu: '', // To be translated
      en: '', // To be translated
    },
    social: {
      instagram: 'https://www.instagram.com/biutza_bmb/',
      facebook: 'https://www.facebook.com/beidak.bianka',
    },
  },
  {
    id: 'cristian-kovacs',
    name: 'Cristian Kovacs',
    role: 'Personal Trainer',
    certifiedSince: 2019,
    image: '/images/team/cristian-kovacs.jpg',
    specializations: [
      'Bodybuilding',
      'Functional Fitness',
      'Strength Training',
      'Sports Nutrition Counseling',
    ],
    bio: {
      ro: `Cristian Kovacs este un instructor de fitness certificat în bodybuilding și fitness din 2019, cu o pasiune profundă pentru sport și un angajament constant față de transformările pozitive ale clienților săi.

Cu o abordare profesionistă și adaptată fiecărei persoane, Cristian oferă îndrumare și suport pentru atingerea obiectivelor de forță, masă musculară, tonifiere sau pierdere în greutate.

Specializările sale includ:
• Bodybuilding: Programe personalizate pentru dezvoltarea masei musculare și definirea corpului.
• Fitness Funcțional: Exerciții pentru creșterea rezistenței și îmbunătățirea performanței fizice generale.
• Antrenamente de Forță: Sesiuni dedicate creșterii forței și stabilității musculare.
• Consiliere pe Nutriție Sportivă: Recomandări pentru alimentația corectă, adaptate nevoilor individuale.

Cu un stil motivațional și o atitudine prietenoasă, Cristian este dedicat să inspire și să susțină clienții săi în fiecare pas al transformării lor. Crede cu tărie în disciplina, consecvența și puterea sportului de a schimba vieți. Fie că ești începător sau avansat, Cristian te va ghida pentru a-ți atinge potențialul maxim într-un mod sănătos și sustenabil.`,
      hu: '', // To be translated
      en: '', // To be translated
    },
    social: {
      instagram: 'https://www.instagram.com/cristikovacs0707/',
      facebook: 'https://www.facebook.com/cristi.kovacs.75',
    },
  },
  {
    id: 'tunde-modi',
    name: 'Tunde Modi',
    role: 'Personal Trainer',
    title: 'Multiple National Champion',
    image: '/images/team/tunde-modi.jpg',
    specializations: [
      'Personalized Training Plans',
      'Advanced Biomechanics',
      'Sports Nutrition',
      'Competition-Level Coaching',
    ],
    bio: {
      ro: `Instructor Personal de Fitness și Bodybuilding Certificat
Multipla Campioană Națională

Tunde Modi este un nume de referință în lumea fitnessului și bodybuildingului din România, având o carieră strălucită care include titluri de multipla campioană națională. Cu o pregătire profesională solidă și o pasiune de neegalat pentru performanța fizică, Tunde aduce la FitWorld Gym nu doar experiență, ci și inspirație pentru toți cei care doresc să își transforme viața.

Competențele lui Tunde Modi:
• Planuri de antrenament personalizate: Fie că vrei să pierzi în greutate, să crești masa musculară sau să-ți îmbunătățești condiția fizică generală, Tunde adaptează fiecare program pentru a răspunde obiectivelor tale unice.
• Expertiză avansată: Cu certificări naționale și o vastă experiență în competiții de bodybuilding, Tunde oferă o îndrumare precisă și profesională în biomecanică, nutriție sportivă și tehnici de antrenament.
• Motivație și leadership: Ca multipla campioană, Tunde știe ce înseamnă să muncești din greu pentru succes și își motivează clienții să își depășească limitele și să își atingă potențialul maxim.

Alături de expertiza și dedicarea lui Tunde Modi, FitWorld Gym este locul ideal pentru a-ți descoperi adevărata forță interioară. Vino să faci parte din comunitatea noastră și să îți atingi obiectivele cu ajutorul celor mai buni!`,
      hu: '', // To be translated
      en: '', // To be translated
    },
    social: {
      instagram: 'https://www.instagram.com/tundenagymaria/',
      facebook: 'https://www.facebook.com/profile.php?id=100009023287859',
    },
  },
] as const;

export const PRICING_PLANS = [
  {
    id: 'monthly',
    name: { ro: 'Abonament 30 zile', hu: '30 napos bérlet', en: '30 Days Subscription' },
    duration: { ro: '1 lună', hu: '1 hónap', en: '1 month' },
    days: 30,
    price: 140,
    currency: 'RON',
    features: {
      ro: ['Acces nelimitat zona Fitness', 'Clase de Grup'],
      hu: ['Korlátlan hozzáférés a Fitness zónához', 'Csoportos órák'],
      en: ['Unlimited Fitness Zone Access', 'Group Classes'],
    },
  },
  {
    id: 'bimonthly',
    name: { ro: 'Abonament 60 zile', hu: '60 napos bérlet', en: '60 Days Subscription' },
    duration: { ro: '2 luni', hu: '2 hónap', en: '2 months' },
    days: 60,
    price: 250,
    currency: 'RON',
    features: {
      ro: ['Acces nelimitat zona Fitness', 'Clase de Grup'],
      hu: ['Korlátlan hozzáférés a Fitness zónához', 'Csoportos órák'],
      en: ['Unlimited Fitness Zone Access', 'Group Classes'],
    },
  },
  {
    id: 'semester',
    name: { ro: 'Abonament 180 zile', hu: '180 napos bérlet', en: '180 Days Subscription' },
    duration: { ro: '6 luni', hu: '6 hónap', en: '6 months' },
    days: 180,
    price: 730,
    currency: 'RON',
    features: {
      ro: ['Acces nelimitat zona Fitness', 'Clase de Grup'],
      hu: ['Korlátlan hozzáférés a Fitness zónához', 'Csoportos órák'],
      en: ['Unlimited Fitness Zone Access', 'Group Classes'],
    },
    popular: true,
  },
  {
    id: 'annual',
    name: { ro: 'Abonament 365 zile', hu: '365 napos bérlet', en: '365 Days Subscription' },
    duration: { ro: '1 an', hu: '1 év', en: '1 year' },
    days: 365,
    price: 1400,
    currency: 'RON',
    features: {
      ro: ['Acces nelimitat zona Fitness', 'Clase de Grup'],
      hu: ['Korlátlan hozzáférés a Fitness zónához', 'Csoportos órák'],
      en: ['Unlimited Fitness Zone Access', 'Group Classes'],
    },
  },
  {
    id: 'halfmonth',
    name: { ro: 'Abonament 15 zile', hu: '15 napos bérlet', en: '15 Days Subscription' },
    duration: { ro: '15 zile', hu: '15 nap', en: '15 days' },
    days: 15,
    price: 110,
    currency: 'RON',
    features: {
      ro: ['Acces nelimitat zona Fitness', 'Clase de Grup'],
      hu: ['Korlátlan hozzáférés a Fitness zónához', 'Csoportos órák'],
      en: ['Unlimited Fitness Zone Access', 'Group Classes'],
    },
  },
  {
    id: 'daily',
    name: { ro: 'Abonament ocazional', hu: 'Alkalmi belépő', en: 'Day Pass' },
    duration: { ro: '1 intrare/zi', hu: '1 belépés/nap', en: '1 entry/day' },
    days: 1,
    price: 20,
    currency: 'RON',
    features: {
      ro: ['Acces nelimitat zona Fitness'],
      hu: ['Korlátlan hozzáférés a Fitness zónához'],
      en: ['Unlimited Fitness Zone Access'],
    },
  },
] as const;

export const MOBILE_APP = {
  name: 'GMA - Gym Management App',
  ios: 'https://apps.apple.com/ro/app/gma-gym-management-app/id1496040256',
  android: 'https://play.google.com/store/apps/details?id=com.companyname.gma',
  features: [
    'QR code for quick check-in',
    'View subscription status',
    'Book fitness classes',
    'Payment history',
    'Body measurements tracking',
    'Important notifications',
  ],
} as const;
```

---

## 🔧 Environment Variables

Create a `.env.local` file with these variables:

```env
# Google Maps (CONFIGURED ✅)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here

# Email Service (Resend) - Get key from https://resend.com
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

### Netlify Environment Variables

Add these in Netlify Dashboard → Site Settings → Environment Variables:
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` 
- `RESEND_API_KEY`

---

## 📁 Available Assets

### Logo
- `public/Logo-Fitworld-Gym.svg` - Main logo (SVG format)

### Trainer Photos
- `public/trainers/codruta-coroian.jpg`
- `public/trainers/Bianka-Beidak.jpg`
- `public/trainers/Cristian-Kovacs.jpg`
- `public/trainers/Tunde-Modi.jpg`

### Gym Gallery (11 images)
- `public/images/media/fit-world-gym-salonta-01.jpg` to `fit-world-gym-salonta-12.jpg`

### Background/Other Images
- `public/images/other/bkg-echipa.png` - Team section background
- `public/images/other/bkg-contact.jpg` - Contact section background
- `public/images/other/fit-world-gym-1.jpg` to `fit-world-gym-3.jpg`

### Screenshots (for reference)
- `public/images/screenshots desktop/` - Desktop website screenshots
- `public/images/screenshots mobile/` - Mobile website screenshots (showing issues)

---

## 📱 Responsive Breakpoints

| Breakpoint | Size | Target |
|------------|------|--------|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

---

## 🚀 Build & Deployment

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm run start
```

### Deployment Options

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **Self-hosted** (Node.js server)

---

## 📊 Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | > 90 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Time to Interactive | < 3s |

---

## 🔒 Security Considerations

1. **Contact Form**: Rate limiting, CSRF protection, input sanitization
2. **Environment Variables**: Never expose server-side secrets
3. **Headers**: Security headers via next.config.ts
4. **HTTPS**: Enforce HTTPS in production

