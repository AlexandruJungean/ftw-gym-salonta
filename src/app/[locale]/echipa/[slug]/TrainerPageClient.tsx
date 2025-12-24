'use client';

import Link from '@/components/ui/Link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, Instagram, Facebook, Award } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/getDictionary';
import type { TEAM_MEMBERS } from '@/lib/constants';

interface TrainerPageClientProps {
  locale: Locale;
  dictionary: Dictionary;
  member: (typeof TEAM_MEMBERS)[number];
}

export default function TrainerPageClient({ locale, dictionary, member }: TrainerPageClientProps) {
  return (
    <>
      {/* Back Link */}
      <div className="container-custom pt-8">
        <Link
          href={`/${locale}/echipa`}
          className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {dictionary.team.backToTeam}
        </Link>
      </div>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="sticky top-32">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)] via-transparent to-transparent" />
                </div>

                {/* Social Links */}
                <div className="flex gap-4 mt-6">
                  {member.social.instagram && (
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                      <span className="font-medium">Instagram</span>
                    </a>
                  )}
                  {member.social.facebook && (
                    <a
                      href={member.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                      <span className="font-medium">Facebook</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              {/* Header */}
              <div className="mb-8">
                <h1 className="heading-lg mb-2">{member.name}</h1>
                <p className="text-[var(--primary)] font-semibold uppercase tracking-wider">
                  {dictionary.team.personalTrainer}
                </p>
                
                {/* Title Badge */}
                {'title' in member && member.title && (
                  <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/20 border border-[var(--primary)]/30">
                    <Award className="w-4 h-4 text-[var(--primary)]" />
                    <span className="font-medium text-[var(--primary)]">
                      {typeof member.title === 'object' ? member.title[locale] : member.title}
                    </span>
                  </div>
                )}
              </div>

              {/* Specializations */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-white mb-4">{dictionary.team.specializations}</h2>
                <div className="flex flex-wrap gap-3">
                  {member.specializations.map((spec) => (
                    <span
                      key={spec}
                      className="px-4 py-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)]"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bio */}
              <div className="prose prose-invert max-w-none">
                <div className="text-[var(--text-secondary)] leading-relaxed whitespace-pre-line text-lg">
                  {member.bio[locale]}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 flex flex-wrap gap-4">
                <Link href={`/${locale}/contact`} className="btn-primary">
                  {dictionary.hero.cta}
                </Link>
                <Link href={`/${locale}/abonamente`} className="btn-outline">
                  {dictionary.hero.cta2}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

