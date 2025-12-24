'use client';

import Link from '@/components/ui/Link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';
import { PRICING_PLANS } from '@/lib/constants';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/getDictionary';

interface PricingPreviewProps {
  locale: Locale;
  dictionary: Dictionary;
}

export default function PricingPreview({ locale, dictionary }: PricingPreviewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Show only featured plans on homepage
  const featuredPlans = PRICING_PLANS.filter(
    (plan) => ['monthly', 'semester', 'annual'].includes(plan.id)
  );

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[var(--primary)] font-semibold uppercase tracking-wider text-sm">
            {dictionary.sections.ourPricing}
          </span>
          <h2 className="heading-lg mt-4 mb-6">
            {locale === 'ro' ? 'Alege abonamentul potrivit' : locale === 'hu' ? 'Válaszd ki a megfelelő bérletet' : 'Choose the right plan'}
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">
            {dictionary.sections.pricingSubtitle}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {featuredPlans.map((plan, index) => {
            const isPopular = 'popular' in plan && plan.popular;
            return (
            <div
              key={plan.id}
              className={`pricing-card ${isPopular ? 'popular' : ''}`}
            >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
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

              {/* Plan Name */}
              <h3 className="text-xl font-bold text-white mb-2">
                {plan.name[locale]}
              </h3>
              <p className="text-[var(--text-muted)] mb-6">
                {plan.duration[locale]}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="price-tag">{plan.price}</span>
                <span className="text-[var(--text-muted)] ml-2">RON</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8 text-left">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--primary)]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[var(--primary)]" />
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

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href={`/${locale}/abonamente`}
            className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold hover:gap-4 transition-all"
          >
            {locale === 'ro' ? 'Vezi toate abonamentele' : locale === 'hu' ? 'Összes bérlet megtekintése' : 'View all plans'}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

