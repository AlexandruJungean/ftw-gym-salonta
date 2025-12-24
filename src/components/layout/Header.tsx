'use client';

import { useState, useEffect } from 'react';
import Link from '@/components/ui/Link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { locales, localeNames, type Locale } from '@/lib/i18n/config';
import FlagIcon from '@/components/ui/FlagIcon';
import type { Dictionary } from '@/lib/i18n/getDictionary';

interface HeaderProps {
  locale: Locale;
  dictionary: Dictionary;
}

const navItems = [
  { key: 'home', href: '' },
  { key: 'about', href: '/despre-noi' },
  { key: 'team', href: '/echipa' },
  { key: 'media', href: '/media' },
  { key: 'pricing', href: '/abonamente' },
  { key: 'contact', href: '/contact' },
];

export default function Header({ locale, dictionary }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => {
    const fullPath = `/${locale}${href}`;
    if (href === '') {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname.startsWith(fullPath);
  };

  const switchLocale = (newLocale: Locale) => {
    const currentPath = pathname.replace(`/${locale}`, '');
    window.location.href = `/${newLocale}${currentPath}`;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href={`/${locale}`} className="relative z-10 flex items-center gap-3">
              <Image
                src="/Logo-Fitworld-Gym.svg"
                alt="FitWorld Gym"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={`/${locale}${item.href}`}
                  className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
                >
                  {dictionary.nav[item.key as keyof typeof dictionary.nav]}
                </Link>
              ))}
            </div>

            {/* Language Switcher & CTA */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[var(--border-color)] hover:border-[var(--primary)] transition-colors"
                >
                  <FlagIcon locale={locale} className="w-6 h-4" />
                  <span className="text-sm font-medium uppercase">{locale}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full right-0 mt-2 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg overflow-hidden shadow-lg"
                    >
                      {locales.map((loc) => (
                        <button
                          key={loc}
                          onClick={() => {
                            switchLocale(loc);
                            setIsLangOpen(false);
                          }}
                          className={`flex items-center gap-3 w-full px-4 py-3 hover:bg-[var(--bg-card-hover)] transition-colors ${
                            loc === locale ? 'text-[var(--primary)]' : 'text-[var(--text-secondary)]'
                          }`}
                        >
                          <FlagIcon locale={loc} className="w-6 h-4" />
                          <span className="font-medium">{localeNames[loc]}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA Button */}
              <Link href={`/${locale}/contact`} className="btn-primary py-3 px-6">
                {dictionary.hero.cta}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden relative z-10 p-2 text-white"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between mb-8">
          <Image
            src="/Logo-Fitworld-Gym.svg"
            alt="FitWorld Gym"
            width={140}
            height={50}
            className="h-10 w-auto"
          />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-white"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {navItems.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/${locale}${item.href}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-lg text-lg font-semibold transition-colors ${
                  isActive(item.href)
                    ? 'bg-[var(--primary)] text-white'
                    : 'text-[var(--text-secondary)] hover:text-white hover:bg-[var(--bg-card)]'
                }`}
              >
                {dictionary.nav[item.key as keyof typeof dictionary.nav]}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Language Switcher */}
        <div className="mt-8 pt-8 border-t border-[var(--border-color)]">
          <p className="text-sm text-[var(--text-muted)] mb-4 uppercase tracking-wider">
            Language
          </p>
          <div className="flex gap-2">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border transition-colors ${
                  loc === locale
                    ? 'border-[var(--primary)] bg-[var(--primary)] text-white'
                    : 'border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--primary)]'
                }`}
              >
                <FlagIcon locale={loc} className="w-6 h-4" />
              </button>
            ))}
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="mt-8">
          <Link
            href={`/${locale}/contact`}
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn-primary w-full justify-center"
          >
            {dictionary.hero.cta}
          </Link>
        </div>
      </div>
    </>
  );
}

