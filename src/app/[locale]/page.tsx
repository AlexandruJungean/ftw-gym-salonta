import { getDictionary } from '@/lib/i18n/getDictionary';
import { type Locale } from '@/lib/i18n/config';
import HeroSection from '@/components/sections/HeroSection';
import AboutPreview from '@/components/sections/AboutPreview';
import TeamPreview from '@/components/sections/TeamPreview';
import PricingPreview from '@/components/sections/PricingPreview';
import AppSection from '@/components/sections/AppSection';
import GalleryPreview from '@/components/sections/GalleryPreview';
import ContactPreview from '@/components/sections/ContactPreview';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale as Locale);

  return (
    <>
      <HeroSection locale={locale as Locale} dictionary={dictionary} />
      <AboutPreview locale={locale as Locale} dictionary={dictionary} />
      <TeamPreview locale={locale as Locale} dictionary={dictionary} />
      <PricingPreview locale={locale as Locale} dictionary={dictionary} />
      <GalleryPreview locale={locale as Locale} dictionary={dictionary} />
      <AppSection locale={locale as Locale} dictionary={dictionary} />
      <ContactPreview locale={locale as Locale} dictionary={dictionary} />
    </>
  );
}

