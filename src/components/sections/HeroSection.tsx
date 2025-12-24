'use client';

import { useEffect, useState } from 'react';
import Link from '@/components/ui/Link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Dumbbell, Users, Trophy, Clock } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/getDictionary';

interface HeroSectionProps {
  locale: Locale;
  dictionary: Dictionary;
}

const stats = [
  { icon: Dumbbell, value: '500+', label: { ro: 'Membri activi', hu: 'Aktív tag', en: 'Active Members' } },
  { icon: Users, value: '4', label: { ro: 'Antrenori pro', hu: 'Profi edző', en: 'Pro Trainers' } },
  { icon: Trophy, value: '5+', label: { ro: 'Ani experiență', hu: 'Év tapasztalat', en: 'Years Experience' } },
  { icon: Clock, value: '13h', label: { ro: 'Program zilnic', hu: 'Napi nyitvatartás', en: 'Daily Hours' } },
];

const heroImages = [
  '/images/other/fit-world-gym-1.jpg',
  '/images/other/fit-world-gym-2.jpg',
  '/images/other/fit-world-gym-3.jpg',
];

export default function HeroSection({ locale, dictionary }: HeroSectionProps) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-4">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0">
        {heroImages.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={img}
              alt="FitWorld Gym"
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-dark)] via-[var(--bg-dark)]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)] via-transparent to-[var(--bg-dark)]/50" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--primary)] rounded-full blur-[150px] opacity-20 animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[var(--primary-light)] rounded-full blur-[100px] opacity-15 animate-float" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-28 sm:pt-32 md:pt-20 pb-24 sm:pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[var(--primary)]/20 border border-[var(--primary)]/30 mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
              <span className="text-sm font-medium text-[var(--primary)]">
                FitWorld Gym Salonta
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-xl mb-4 sm:mb-6"
          >
            <span className="text-white">{dictionary.hero.title1}</span>
            <br />
            <span className="text-gradient">{dictionary.hero.title2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl text-[var(--text-secondary)] mb-6 sm:mb-8 max-w-xl leading-relaxed"
          >
            {dictionary.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link href={`/${locale}/contact`} className="btn-primary">
              {dictionary.hero.cta}
            </Link>
            <Link href={`/${locale}/abonamente`} className="btn-outline">
              {dictionary.hero.cta2}
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mt-8 sm:mt-16 pt-5 sm:pt-8 border-t border-[var(--border-color)]"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2 sm:gap-3">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-4 h-4 sm:w-6 sm:h-6 text-[var(--primary)]" />
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-[var(--text-muted)]">{stat.label[locale]}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-12 h-1.5 rounded-full transition-all ${
              index === currentImage ? 'bg-[var(--primary)]' : 'bg-white/30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

