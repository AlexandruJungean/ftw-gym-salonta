import { getDictionary } from '@/lib/i18n/getDictionary';
import { type Locale } from '@/lib/i18n/config';
import { PRICING_PLANS } from '@/lib/constants';
import PricingPageClient from './PricingPageClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale as Locale);
  
  return {
    title: dictionary.nav.pricing,
    description: dictionary.sections.pricingSubtitle,
  };
}

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale as Locale);

  return <PricingPageClient locale={locale as Locale} dictionary={dictionary} plans={PRICING_PLANS} />;
}

