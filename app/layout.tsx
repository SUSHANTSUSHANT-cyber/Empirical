import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { MotionController } from '@/components/ui/MotionController';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

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
  const themeScript = `(() => { try { const stored = localStorage.getItem('viveka-theme'); const theme = stored === 'light' || stored === 'dark' ? stored : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); document.documentElement.dataset.theme = theme; document.documentElement.style.colorScheme = theme; } catch { document.documentElement.dataset.theme = 'light'; } })();`;
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <ThemeProvider>
          <MotionController />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
