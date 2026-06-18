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
  title: 'Kate Barber Studio – Trenčín',
  description:
    'Prémiový barber studio v Trenčíne pre ženy aj mužov. Tradičné techniky, moderný štýl.',
  keywords: ['barber', 'Trenčín', 'holič', 'dámsky strih', 'pánsky strih', 'barber studio', 'Kate Barber'],
  openGraph: {
    title: 'Kate Barber Studio – Trenčín',
    description: 'Prémiový barber studio v Trenčíne pre ženy aj mužov.',
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
