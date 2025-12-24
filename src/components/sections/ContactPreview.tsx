'use client';

import Link from '@/components/ui/Link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { CONTACT_INFO, WORKING_HOURS } from '@/lib/constants';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/getDictionary';

interface ContactPreviewProps {
  locale: Locale;
  dictionary: Dictionary;
}

export default function ContactPreview({ locale, dictionary }: ContactPreviewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden bg-[var(--bg-darker)]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots opacity-30" />
      
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border-color)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2731.5!2d21.6536!3d46.8019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDQ4JzA2LjgiTiAyMcKwMzknMTMuMCJF!5e0!3m2!1sen!2sro!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            {/* Location Pin Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0"
            >
              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-[var(--primary)] rounded-xl text-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">
                  {locale === 'ro' ? 'Deschide în Maps' : locale === 'hu' ? 'Megnyitás a Térképen' : 'Open in Maps'}
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[var(--primary)] font-semibold uppercase tracking-wider text-sm">
              {dictionary.contact.findUs}
            </span>
            <h2 className="heading-lg mt-4 mb-8">
              {dictionary.contact.title}
            </h2>

            {/* Contact Info Cards */}
            <div className="space-y-4 mb-8">
              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--primary)] transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--primary)] transition-colors">
                  <MapPin className="w-6 h-6 text-[var(--primary)] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{dictionary.contact.address}</h3>
                  <p className="text-[var(--text-secondary)]">{CONTACT_INFO.address}</p>
                </div>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-start gap-4 p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--primary)] transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--primary)] transition-colors">
                  <Phone className="w-6 h-6 text-[var(--primary)] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    {locale === 'ro' ? 'Telefon' : locale === 'hu' ? 'Telefon' : 'Phone'}
                  </h3>
                  <p className="text-[var(--text-secondary)]">{CONTACT_INFO.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-start gap-4 p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--primary)] transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--primary)] transition-colors">
                  <Mail className="w-6 h-6 text-[var(--primary)] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <p className="text-[var(--text-secondary)]">{CONTACT_INFO.email}</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[var(--primary)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{dictionary.contact.schedule}</h3>
                  <p className="text-[var(--text-secondary)]">
                    {dictionary.schedule.monday}-{dictionary.schedule.friday}: {WORKING_HOURS.weekdays}
                  </p>
                  <p className="text-[var(--text-secondary)]">
                    {dictionary.schedule.saturday}: {WORKING_HOURS.saturday}
                  </p>
                  <p className="text-red-400">
                    {dictionary.schedule.sunday}: {dictionary.schedule.closed}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link href={`/${locale}/contact`} className="btn-primary">
              {dictionary.hero.cta}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

