'use client';

import Link from '@/components/ui/Link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Youtube, Facebook, Instagram } from 'lucide-react';
import { SOCIAL_LINKS, CONTACT_INFO, WORKING_HOURS } from '@/lib/constants';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/getDictionary';

interface FooterProps {
  locale: Locale;
  dictionary: Dictionary;
}

// TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export default function Footer({ locale, dictionary }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { key: 'home', href: '' },
    { key: 'about', href: '/despre-noi' },
    { key: 'team', href: '/echipa' },
    { key: 'pricing', href: '/abonamente' },
    { key: 'contact', href: '/contact' },
  ];

  return (
    <footer className="relative bg-[var(--bg-darker)] border-t border-[var(--border-color)]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
      
      <div className="container-custom relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="inline-block mb-6">
              <Image
                src="/Logo-Fitworld-Gym.svg"
                alt="FitWorld Gym"
                width={180}
                height={60}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
              {dictionary.metadata.description}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">
              {dictionary.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {dictionary.nav[link.key as keyof typeof dictionary.nav]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">
              {dictionary.contact.title}
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={CONTACT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                >
                  <MapPin className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                  <span>{CONTACT_INFO.address}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center gap-3 text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                >
                  <Phone className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-3 text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                >
                  <Mail className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Schedule */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">
              {dictionary.contact.schedule}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[var(--text-secondary)]">
                <Clock className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
                <div>
                  <span className="block font-medium text-white">
                    {dictionary.schedule.monday} - {dictionary.schedule.friday}
                  </span>
                  <span>{WORKING_HOURS.weekdays}</span>
                </div>
              </li>
              <li className="flex items-center gap-3 text-[var(--text-secondary)]">
                <Clock className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
                <div>
                  <span className="block font-medium text-white">
                    {dictionary.schedule.saturday}
                  </span>
                  <span>{WORKING_HOURS.saturday}</span>
                </div>
              </li>
              <li className="flex items-center gap-3 text-[var(--text-secondary)]">
                <Clock className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
                <div>
                  <span className="block font-medium text-white">
                    {dictionary.schedule.sunday}
                  </span>
                  <span className="text-red-400">{dictionary.schedule.closed}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--border-color)] py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[var(--text-muted)] text-sm">
              © {currentYear} FitWorld Gym Salonta. {dictionary.footer.rights}.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href={`/${locale}/termeni-si-conditii`}
                className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors"
              >
                {dictionary.footer.terms}
              </Link>
              <Link
                href={`/${locale}/politica-confidentialitate`}
                className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors"
              >
                {dictionary.footer.privacy}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

