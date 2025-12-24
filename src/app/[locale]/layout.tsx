import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Bebas_Neue, Montserrat } from 'next/font/google';
import { locales, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/getDictionary';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { LocalBusinessSchema } from '@/components/seo/StructuredData';
import '../globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-body',
  display: 'swap',
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale as Locale);

  return {
    title: {
      default: dictionary.metadata.title,
      template: `%s | FitWorld Gym Salonta`,
    },
    description: dictionary.metadata.description,
    keywords: ['fitness', 'gym', 'sala fitness', 'Salonta', 'antrenament', 'personal trainer'],
    authors: [{ name: 'FitWorld Gym Salonta' }],
    openGraph: {
      type: 'website',
      locale: locale === 'ro' ? 'ro_RO' : locale === 'hu' ? 'hu_HU' : 'en_US',
      url: 'https://fitworldgym.ro',
      siteName: 'FitWorld Gym Salonta',
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale as Locale);

  return (
    <html lang={locale} data-scroll-behavior="smooth" className={`${bebasNeue.variable} ${montserrat.variable}`}>
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="font-[var(--font-body)] antialiased">
        <Header locale={locale as Locale} dictionary={dictionary} />
        <main className="min-h-screen pt-[var(--header-height)]">
          {children}
        </main>
        <Footer locale={locale as Locale} dictionary={dictionary} />
      </body>
    </html>
  );
}

