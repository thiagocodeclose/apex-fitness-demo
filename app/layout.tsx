// @ts-nocheck
import type { Metadata } from 'next';
import { Barlow_Condensed, Inter } from 'next/font/google';
import './globals.css';
import { getGarrison365Config, buildCssVars } from '@/lib/garrison365-config';

import { Garrison365LivePreview } from '@/components/Garrison365LivePreview';
const barlowCondensed = Barlow_Condensed({ subsets: ['latin'], weight: ['400','600','700','800','900'], variable: '--font-barlow-condensed' });
const inter = Inter({ subsets: ['latin'], weight: ['400','500','600'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Apex Fitness — Houston, TX | Where Legends Are Built',
  description: 'Premium fitness training in Houston. Strength, conditioning, and results. Join Apex Fitness and build your legend.',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cfg = await getGarrison365Config();
  const vars = buildCssVars(cfg?.brand);
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${inter.variable}`} style={vars as React.CSSProperties}>
      <body>{children}<Garrison365LivePreview /></body>
    </html>
  );
}
