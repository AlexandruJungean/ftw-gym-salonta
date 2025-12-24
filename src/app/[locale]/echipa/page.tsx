import { getDictionary } from '@/lib/i18n/getDictionary';
import { type Locale } from '@/lib/i18n/config';
import { TEAM_MEMBERS } from '@/lib/constants';
import TeamPageClient from './TeamPageClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale as Locale);
  
  return {
    title: dictionary.nav.team,
    description: locale === 'ro' 
      ? 'Cunoaște echipa de antrenori profesioniști de la FitWorld Gym Salonta'
      : locale === 'hu'
      ? 'Ismerd meg a FitWorld Gym Salonta profi edzőcsapatát'
      : 'Meet the professional trainer team at FitWorld Gym Salonta',
  };
}

export default async function TeamPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale as Locale);

  return <TeamPageClient locale={locale as Locale} dictionary={dictionary} members={TEAM_MEMBERS} />;
}

