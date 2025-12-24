'use client';

import Link from '@/components/ui/Link';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/getDictionary';
import type { PRICING_PLANS } from '@/lib/constants';

interface PricingPageClientProps {
  locale: Locale;
  dictionary: Dictionary;
  plans: typeof PRICING_PLANS;
}

export default function PricingPageClient({ locale, dictionary, plans }: PricingPageClientProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/10 via-transparent to-transparent" />
        
        <div className="container-custom relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-xl mb-6">
              <span className="text-gradient">{dictionary.sections.ourPricing}</span>
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              {dictionary.sections.pricingSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="section-padding bg-[var(--bg-darker)]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const isPopular = 'popular' in plan && plan.popular;
              return (
              <div
                key={plan.id}
                className={`pricing-card ${isPopular ? 'popular' : ''}`}
              >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-[var(--primary)] text-white text-sm font-bold">
                      <Star className="w-4 h-4 fill-current" />
                      {dictionary.pricing.popular}
                    </div>
                  </div>
                )}

                {/* Plan Info */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {plan.name[locale]}
                  </h2>
                  <p className="text-[var(--text-muted)]">
                    {plan.duration[locale]}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <span className="price-tag">{plan.price}</span>
                  <span className="text-[var(--text-muted)] ml-2">RON</span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[var(--primary)]/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-[var(--primary)]" />
                      </div>
                      <span className="text-[var(--text-secondary)]">
                        {dictionary.pricing.features[feature as keyof typeof dictionary.pricing.features]}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={`/${locale}/contact`}
                  className={isPopular ? 'btn-primary w-full justify-center' : 'btn-outline w-full justify-center'}
                >
                  {dictionary.pricing.contactUs}
                </Link>
              </motion.div>
              </div>
              );
            })}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-6 sm:px-8 py-6 sm:py-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)]">
              <span className="text-[var(--text-secondary)] text-center sm:text-left">
                {locale === 'ro' 
                  ? 'Ai întrebări? Contactează-ne pentru mai multe detalii!'
                  : locale === 'hu'
                  ? 'Kérdésed van? Lépj kapcsolatba velünk további részletekért!'
                  : 'Have questions? Contact us for more details!'
                }
              </span>
              <Link href={`/${locale}/contact`} className="btn-primary py-2 px-6 whitespace-nowrap">
                {dictionary.hero.cta}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

