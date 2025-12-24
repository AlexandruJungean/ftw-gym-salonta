'use client';

import Link from '@/components/ui/Link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Instagram, Facebook, ArrowRight } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/getDictionary';
import type { TEAM_MEMBERS } from '@/lib/constants';

interface TeamPageClientProps {
  locale: Locale;
  dictionary: Dictionary;
  members: typeof TEAM_MEMBERS;
}

export default function TeamPageClient({ locale, dictionary, members }: TeamPageClientProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/10 via-transparent to-transparent" />
        
        <div className="container-custom relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-xl mb-6">
              <span className="text-gradient">{dictionary.sections.ourTeam}</span>
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              {locale === 'ro' 
                ? 'Antrenori profesioniști, pasionați și dedicați succesului tău'
                : locale === 'hu'
                ? 'Professzionális, szenvedélyes és elkötelezett edzők a sikered érdekében'
                : 'Professional, passionate and dedicated trainers for your success'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-[var(--bg-darker)]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {members.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="card group hover:border-[var(--primary)] overflow-hidden">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Image */}
                    <div className="relative w-full md:w-48 h-64 md:h-auto rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 192px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-1">{member.name}</h2>
                      <p className="text-[var(--primary)] font-medium text-sm uppercase tracking-wider mb-3">
                        {dictionary.team.personalTrainer}
                      </p>
                      
                      {/* Title Badge for Tunde */}
                      {'title' in member && member.title && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary)]/20 border border-[var(--primary)]/30 mb-4">
                          <span className="text-xs font-medium text-[var(--primary)]">
                            {typeof member.title === 'object' ? member.title[locale] : member.title}
                          </span>
                        </div>
                      )}

                      {/* Specializations */}
                      <div className="mb-4">
                        <p className="text-sm text-[var(--text-muted)] mb-2">{dictionary.team.specializations}:</p>
                        <div className="flex flex-wrap gap-2">
                          {member.specializations.slice(0, 4).map((spec) => (
                            <span
                              key={spec}
                              className="px-3 py-1 text-xs rounded-full bg-[var(--bg-darker)] text-[var(--text-secondary)] border border-[var(--border-color)]"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-4 mt-auto pt-4">
                        <Link
                          href={`/${locale}/echipa/${member.slug}`}
                          className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold hover:gap-3 transition-all"
                        >
                          {dictionary.team.viewProfile}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        
                        <div className="flex gap-2 ml-auto">
                          {member.social.instagram && (
                            <a
                              href={member.social.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded-full bg-[var(--bg-darker)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-colors"
                            >
                              <Instagram className="w-4 h-4" />
                            </a>
                          )}
                          {member.social.facebook && (
                            <a
                              href={member.social.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded-full bg-[var(--bg-darker)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-colors"
                            >
                              <Facebook className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

