'use client';

import Link from '@/components/ui/Link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Instagram, Facebook } from 'lucide-react';
import { TEAM_MEMBERS } from '@/lib/constants';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/getDictionary';

interface TeamPreviewProps {
  locale: Locale;
  dictionary: Dictionary;
}

export default function TeamPreview({ locale, dictionary }: TeamPreviewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden bg-[var(--bg-darker)]">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-30" />
      
      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[var(--primary)] font-semibold uppercase tracking-wider text-sm">
            {dictionary.sections.whoWeAre}
          </span>
          <h2 className="heading-lg mt-4 mb-6">
            {dictionary.sections.meetTrainers}
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">
            {locale === 'ro' 
              ? 'Antrenori profesioniști, pasionați și dedicați succesului tău'
              : locale === 'hu'
              ? 'Professzionális, szenvedélyes és elkötelezett edzők a sikered érdekében'
              : 'Professional, passionate and dedicated trainers for your success'
            }
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="trainer-card aspect-[3/4] relative">
                <Link href={`/${locale}/echipa/${member.slug}`} className="absolute inset-0 z-20" aria-label={member.name} />
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 25vw"
                  className="object-cover transition-transform duration-500"
                />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 pointer-events-none">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-[var(--primary)] font-medium text-sm uppercase tracking-wider">
                    {dictionary.team.personalTrainer}
                  </p>
                  
                  {/* Title Badge for Tunde */}
                  {'title' in member && member.title && (
                    <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary)]/20 border border-[var(--primary)]/30 w-fit">
                      <span className="text-xs font-medium text-[var(--primary)]">
                        {typeof member.title === 'object' ? member.title[locale] : member.title}
                      </span>
                    </div>
                  )}

                  {/* Social Links - Show on hover */}
                  <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-auto relative z-30">
                    {member.social.instagram && (
                      <a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-[var(--primary)] transition-colors"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.facebook && (
                      <a
                        href={member.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-[var(--primary)] transition-colors"
                      >
                        <Facebook className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-[var(--primary)]/0 group-hover:bg-[var(--primary)]/10 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link href={`/${locale}/echipa`} className="btn-outline">
            {dictionary.sections.viewAll}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

