'use client';

import Link from '@/components/ui/Link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Images } from 'lucide-react';
import { GALLERY_IMAGES } from '@/lib/constants';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/getDictionary';

interface GalleryPreviewProps {
  locale: Locale;
  dictionary: Dictionary;
}

export default function GalleryPreview({ locale, dictionary }: GalleryPreviewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Show only 6 images on homepage
  const previewImages = GALLERY_IMAGES.slice(0, 6);

  return (
    <section ref={ref} className="section-padding relative overflow-hidden bg-[var(--bg-darker)]">
      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[var(--primary)] font-semibold uppercase tracking-wider text-sm">
            {dictionary.sections.gallery}
          </span>
          <h2 className="heading-lg mt-4 mb-6">
            {dictionary.sections.gallerySubtitle}
          </h2>
        </motion.div>

        {/* Gallery Grid - Bento Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {previewImages.map((image, index) => {
            // Define span classes for bento layout
            const spanClasses = index === 0 
              ? 'col-span-2 row-span-2' 
              : index === 3 
              ? 'col-span-2 md:col-span-1' 
              : '';
            
            return (
            <Link
              key={image}
              href={`/${locale}/media`}
              className={`relative overflow-hidden rounded-xl group cursor-pointer block ${spanClasses}`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full h-full"
              >
                <Image
                  src={image}
                  alt={`FitWorld Gym Gallery ${index + 1}`}
                  fill
                  sizes={index === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[var(--bg-dark)]/0 group-hover:bg-[var(--bg-dark)]/40 transition-colors duration-300" />
                
                {/* Icon on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-[var(--primary)] flex items-center justify-center">
                    <Images className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            </Link>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href={`/${locale}/media`} className="btn-outline">
            {locale === 'ro' ? 'Vezi toată galeria' : locale === 'hu' ? 'Teljes galéria megtekintése' : 'View full gallery'}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

