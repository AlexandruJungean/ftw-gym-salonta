import Image from 'next/image';
import Link from '@/components/ui/Link';
import { getDictionary } from '@/lib/i18n/getDictionary';
import { type Locale } from '@/lib/i18n/config';
import { Target, Heart, Zap, Users, Award, Dumbbell } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale as Locale);
  
  return {
    title: dictionary.nav.about,
    description: dictionary.sections.whatWeOfferText.substring(0, 160),
  };
}

const values = {
  ro: [
    { icon: Target, title: 'Obiective Clare', description: 'Te ajutăm să îți stabilești și să îți atingi obiectivele de fitness' },
    { icon: Heart, title: 'Pasiune', description: 'Suntem pasionați de fitness și de transformarea vieților' },
    { icon: Zap, title: 'Energie', description: 'Aducem energie pozitivă în fiecare antrenament' },
    { icon: Users, title: 'Comunitate', description: 'Fă parte dintr-o comunitate motivată și prietenoasă' },
    { icon: Award, title: 'Excelență', description: 'Ne străduim pentru excelență în tot ceea ce facem' },
    { icon: Dumbbell, title: 'Rezultate', description: 'Transformări reale cu antrenori profesioniști' },
  ],
  hu: [
    { icon: Target, title: 'Világos Célok', description: 'Segítünk a fitness célok meghatározásában és elérésében' },
    { icon: Heart, title: 'Szenvedély', description: 'Szenvedélyesek vagyunk a fitness és az életátalakulás iránt' },
    { icon: Zap, title: 'Energia', description: 'Pozitív energiát hozunk minden edzésbe' },
    { icon: Users, title: 'Közösség', description: 'Légy része egy motivált és barátságos közösségnek' },
    { icon: Award, title: 'Kiválóság', description: 'A kiválóságra törekszünk mindenben, amit csinálunk' },
    { icon: Dumbbell, title: 'Eredmények', description: 'Valódi átalakulások profi edzőkkel' },
  ],
  en: [
    { icon: Target, title: 'Clear Goals', description: 'We help you set and achieve your fitness goals' },
    { icon: Heart, title: 'Passion', description: 'We are passionate about fitness and transforming lives' },
    { icon: Zap, title: 'Energy', description: 'We bring positive energy to every workout' },
    { icon: Users, title: 'Community', description: 'Be part of a motivated and friendly community' },
    { icon: Award, title: 'Excellence', description: 'We strive for excellence in everything we do' },
    { icon: Dumbbell, title: 'Results', description: 'Real transformations with professional trainers' },
  ],
};

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale as Locale);
  const localeValues = values[locale as Locale];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/10 via-transparent to-transparent" />
        
        <div className="container-custom relative text-center">
          <h1 className="heading-xl mb-6 animate-fade-in-up">
            <span className="text-gradient">{dictionary.about.title}</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {dictionary.about.subtitle}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-[var(--bg-darker)]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/media/fit-world-gym-salonta-01.jpg"
                  alt="FitWorld Gym Interior"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[var(--primary)] rounded-xl opacity-30" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[var(--primary)]/10 rounded-full blur-2xl" />
            </div>

            {/* Content */}
            <div>
              <h2 className="heading-md mb-6">{dictionary.sections.whatWeOffer}</h2>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
                {dictionary.sections.whatWeOfferText}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href={`/${locale}/echipa`} className="btn-primary">
                  {dictionary.sections.viewAll}
                </Link>
                <Link href={`/${locale}/contact`} className="btn-outline">
                  {dictionary.hero.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">{dictionary.about.values}</h2>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              {dictionary.about.valuesText}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localeValues.map((value, index) => (
              <div
                key={index}
                className="card group hover:border-[var(--primary)] text-center stagger-children"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-[var(--primary)]/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-[var(--primary)] transition-colors">
                  <value.icon className="w-8 h-8 text-[var(--primary)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-[var(--text-secondary)]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-[var(--bg-darker)]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '/images/media/fit-world-gym-salonta-02.jpg',
              '/images/media/fit-world-gym-salonta-03.jpg',
              '/images/media/fit-world-gym-salonta-04.jpg',
              '/images/media/fit-world-gym-salonta-05.jpg',
            ].map((img, index) => (
              <div key={index} className="relative aspect-square rounded-xl overflow-hidden group">
                <Image
                  src={img}
                  alt={`FitWorld Gym ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[var(--bg-dark)]/0 group-hover:bg-[var(--bg-dark)]/30 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

