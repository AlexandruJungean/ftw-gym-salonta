'use client';

import Link from '@/components/ui/Link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Target, Heart, Zap } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/getDictionary';

interface AboutPreviewProps {
  locale: Locale;
  dictionary: Dictionary;
}

const features = [
  {
    icon: Target,
    title: { ro: 'Obiective Clare', hu: 'Világos Célok', en: 'Clear Goals' },
    description: { 
      ro: 'Te ajutăm să îți stabilești și să îți atingi obiectivele de fitness',
      hu: 'Segítünk fitness céljaid meghatározásában és elérésében',
      en: 'We help you set and achieve your fitness goals'
    },
  },
  {
    icon: Heart,
    title: { ro: 'Comunitate', hu: 'Közösség', en: 'Community' },
    description: {
      ro: 'Fă parte dintr-o comunitate motivată și prietenoasă',
      hu: 'Légy része egy motivált és barátságos közösségnek',
      en: 'Be part of a motivated and friendly community'
    },
  },
  {
    icon: Zap,
    title: { ro: 'Rezultate', hu: 'Eredmények', en: 'Results' },
    description: {
      ro: 'Transformări reale cu antrenori profesioniști',
      hu: 'Valódi átalakulások profi edzőkkel',
      en: 'Real transformations with professional trainers'
    },
  },
];

export default function AboutPreview({ locale, dictionary }: AboutPreviewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/media/fit-world-gym-salonta-01.jpg"
                alt="FitWorld Gym Interior"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)] via-transparent to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[var(--primary)] flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">5+</span>
                </div>
                <div>
                  <div className="text-lg font-bold text-white">
                    {locale === 'ro' ? 'Ani de Experiență' : locale === 'hu' ? 'Év Tapasztalat' : 'Years Experience'}
                  </div>
                  <div className="text-[var(--text-muted)]">
                    {locale === 'ro' ? 'În Salonta' : locale === 'hu' ? 'Salontán' : 'In Salonta'}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[var(--primary)] rounded-xl opacity-30" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[var(--primary)]/10 rounded-full blur-2xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[var(--primary)] font-semibold uppercase tracking-wider text-sm">
              {dictionary.sections.whoWeAre}
            </span>
            <h2 className="heading-lg mt-4 mb-6">
              {dictionary.sections.whatWeOffer}
            </h2>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
              {dictionary.sections.whatWeOfferText}
            </p>

            {/* Features */}
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{feature.title[locale]}</h3>
                    <p className="text-[var(--text-secondary)]">{feature.description[locale]}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              href={`/${locale}/despre-noi`}
              className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold hover:gap-4 transition-all"
            >
              {locale === 'ro' ? 'Află mai multe despre noi' : locale === 'hu' ? 'Tudj meg többet rólunk' : 'Learn more about us'}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

