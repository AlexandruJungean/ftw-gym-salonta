import { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n/config';
import { TEAM_MEMBERS } from '@/lib/constants';

const baseUrl = 'https://fitworldgym.ro';

type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Static pages for each locale
  const staticPages: { path: string; changeFrequency: ChangeFrequency; priority: number }[] = [
    { path: '', changeFrequency: 'weekly', priority: 1 },
    { path: '/despre-noi', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/echipa', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/media', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/abonamente', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
  ];

  // Generate URLs for all locales and static pages
  const staticUrls: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    staticPages.map((page) => ({
      url: `${baseUrl}/${locale}${page.path}`,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    }))
  );

  // Generate URLs for team member pages
  const teamUrls: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    TEAM_MEMBERS.map((member) => ({
      url: `${baseUrl}/${locale}/echipa/${member.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as ChangeFrequency,
      priority: 0.7,
    }))
  );

  return [...staticUrls, ...teamUrls];
}

