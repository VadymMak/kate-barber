import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Lagoricio Barber Shop – Trenčín',
  description:
    'Prémiový barber shop v srdci Trenčína. Tradičné techniky, moderný štýl. Est. 2018.',
  keywords: ['barber', 'Trenčín', 'holič', 'pánsky strih', 'barber shop', 'Lagoricio'],
  openGraph: {
    title: 'Lagoricio Barber Shop – Trenčín',
    description: 'Prémiový barber shop v srdci Trenčína. Est. 2018.',
    locale: 'sk_SK',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={`${playfairDisplay.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
