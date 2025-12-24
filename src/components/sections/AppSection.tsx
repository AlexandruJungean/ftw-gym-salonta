'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Smartphone, QrCode, CreditCard, Bell, Calendar, Activity } from 'lucide-react';
import { MOBILE_APP } from '@/lib/constants';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/getDictionary';

interface AppSectionProps {
  locale: Locale;
  dictionary: Dictionary;
}

const features = [
  { icon: QrCode, key: 'qr' },
  { icon: CreditCard, key: 'subscription' },
  { icon: Calendar, key: 'classes' },
  { icon: Activity, key: 'payments' },
  { icon: Smartphone, key: 'measurements' },
  { icon: Bell, key: 'notifications' },
];

export default function AppSection({ locale, dictionary }: AppSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark)] via-[var(--primary)]/5 to-[var(--bg-dark)]" />
      
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[var(--primary)] font-semibold uppercase tracking-wider text-sm">
              {dictionary.sections.downloadApp}
            </span>
            <h2 className="heading-lg mt-4 mb-6">
              {dictionary.app.title}
            </h2>
            <p className="text-[var(--text-secondary)] text-lg mb-8">
              {dictionary.app.description}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)]"
                >
                  <feature.icon className="w-5 h-5 text-[var(--primary)]" />
                  <span className="text-sm text-[var(--text-secondary)]">
                    {dictionary.app.features[feature.key as keyof typeof dictionary.app.features]}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={MOBILE_APP.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-black rounded-xl border border-white/10 hover:border-white/30 transition-colors"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="text-lg font-semibold text-white">App Store</div>
                </div>
              </a>
              
              <a
                href={MOBILE_APP.android}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-black rounded-xl border border-white/10 hover:border-white/30 transition-colors"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 01-.609-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" fill="#3DDC84"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="text-lg font-semibold text-white">Google Play</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Phone Mockup Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-[var(--primary)] rounded-full blur-[100px] opacity-30 animate-pulse-slow" />
            </div>
            
            {/* Phone Frame */}
            <div className="relative w-72 h-[580px]">
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-card)] to-[var(--bg-darker)] rounded-[3rem] border-4 border-[var(--border-color)] shadow-2xl overflow-hidden">
                {/* Screen Content Placeholder */}
                <div className="absolute inset-4 rounded-[2.5rem] bg-[var(--bg-dark)] overflow-hidden">
                  <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-20 h-20 rounded-2xl bg-[var(--primary)] flex items-center justify-center mb-6">
                      <Smartphone className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">GMA</h3>
                    <p className="text-sm text-[var(--text-muted)]">
                      Gym Management App
                    </p>
                    <div className="mt-8 w-32 h-32 bg-white rounded-xl p-2">
                      <div className="w-full h-full bg-[var(--bg-dark)] rounded-lg flex items-center justify-center">
                        <QrCode className="w-16 h-16 text-[var(--primary)]" />
                      </div>
                    </div>
                    <p className="mt-4 text-xs text-[var(--text-muted)]">
                      {locale === 'ro' ? 'Scanează pentru check-in' : locale === 'hu' ? 'Szkenneld a bejelentkezéshez' : 'Scan for check-in'}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

