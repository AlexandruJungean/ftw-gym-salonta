# FitWorld Gym Salonta 🏋️

Modern, responsive website for **FitWorld Gym Salonta** - a fitness center in Salonta, Romania.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC?logo=tailwind-css)

## ✨ Features

- 🌐 **Multi-language** - Romanian (default), Hungarian, English
- 📱 **Fully Responsive** - Mobile-first design
- ⚡ **Fast** - Optimized images, lazy loading, prefetch disabled
- 🔍 **SEO Optimized** - Sitemap, robots.txt, structured data (JSON-LD), meta tags
- 🗺️ **Google Maps** - Embedded location map
- 📧 **Contact Form** - Ready for email integration
- 🎨 **Modern UI** - Smooth animations, dark theme, gradient accents
- 👥 **Team Profiles** - Individual pages for each trainer

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 16.x | React framework |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Styling |
| [Framer Motion](https://www.framer.com/motion/) | 11.x | Animations |
| [Lucide React](https://lucide.dev/) | - | Icons |

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/web-ftw-gym.git
cd web-ftw-gym

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
# Add your NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── [locale]/          # Localized pages (ro, hu, en)
│   │   ├── despre-noi/    # About page
│   │   ├── echipa/        # Team pages
│   │   ├── media/         # Gallery page
│   │   ├── abonamente/    # Pricing page
│   │   └── contact/       # Contact page
│   ├── layout.tsx         # Root layout with SEO metadata
│   └── sitemap.ts         # Dynamic sitemap generation
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Page sections (Hero, Team, Pricing, etc.)
│   ├── seo/               # Structured data components
│   └── ui/                # Reusable UI components
├── lib/
│   ├── constants.ts       # Team data, social links, contact info
│   └── i18n/              # Internationalization (dictionaries, config)
public/
├── images/                # Gallery and background images
├── trainers/              # Team member photos
└── Logo-Fitworld-Gym.svg  # Main logo
```

## 🌍 Internationalization

The site supports 3 languages with URL prefixes:

| Language | URL | Example |
|----------|-----|---------|
| Romanian | `/ro` | `fitworldgym.ro/ro` |
| Hungarian | `/hu` | `fitworldgym.ro/hu` |
| English | `/en` | `fitworldgym.ro/en` |

Translations are stored in `src/lib/i18n/dictionaries/`.

## 🔧 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

## 📦 Deployment

This project is configured for **Netlify** deployment.

```bash
# Build for production
npm run build
```

## 📄 License

Private project for FitWorld Gym Salonta.

---

## 📱 Contact

- **Website**: [fitworldgym.ro](https://fitworldgym.ro)
- **Email**: contact@fitworldgym.ro
- **Phone**: +40 755 082 832
- **Address**: Str. Kulin Gyorgy, nr. 37, Salonta, Romania

### Social Media

[![Facebook](https://img.shields.io/badge/Facebook-FitworldGymSalonta-blue?logo=facebook)](https://www.facebook.com/FitworldGymSalonta)
[![Instagram](https://img.shields.io/badge/Instagram-fitworldgymsalonta-E4405F?logo=instagram)](https://www.instagram.com/fitworldgymsalonta)
[![YouTube](https://img.shields.io/badge/YouTube-fitworldgymsalonta-red?logo=youtube)](https://www.youtube.com/@fitworldgymsalonta)
[![TikTok](https://img.shields.io/badge/TikTok-fitworldgym-black?logo=tiktok)](https://www.tiktok.com/@fitworldgym)
