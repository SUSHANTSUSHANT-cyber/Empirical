import type { Metadata } from 'next';
import { MotionController } from '@/components/ui/MotionController';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const title = 'Viveka Medtech | Clinical Validation & Engineering Support';
const description = 'Clinical validation, engineering support and evidence generation for medical devices, wearables and wellness technology.';
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Viveka Medtech',
  description,
};

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: { title, description, type: 'website', locale: 'en_IN' },
  twitter: { card: 'summary', title, description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><MotionController />{children}</body></html>;
}
