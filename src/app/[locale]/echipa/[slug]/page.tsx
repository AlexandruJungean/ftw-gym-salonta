import { notFound } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/getDictionary';
import { type Locale } from '@/lib/i18n/config';
import { TEAM_MEMBERS } from '@/lib/constants';
import TrainerPageClient from './TrainerPageClient';

export async function generateStaticParams() {
  const params = [];
  const locales = ['ro', 'hu', 'en'];
  
  for (const locale of locales) {
    for (const member of TEAM_MEMBERS) {
      params.push({ locale, slug: member.slug });
    }
  }
  
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const member = TEAM_MEMBERS.find((m) => m.slug === slug);
  
  if (!member) return { title: 'Not Found' };
  
  return {
    title: member.name,
    description: member.bio[locale as Locale].substring(0, 160),
  };
}

export default async function TrainerPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const dictionary = await getDictionary(locale as Locale);
  const member = TEAM_MEMBERS.find((m) => m.slug === slug);

  if (!member) {
    notFound();
  }

  return <TrainerPageClient locale={locale as Locale} dictionary={dictionary} member={member} />;
}

