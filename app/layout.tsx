import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MAAKHANA - Ghar Ka Khana, Delivered on Your Schedule',
  description: 'Healthy, home-cooked, affordable meals for Gen-Z, hostel students, working professionals, and gym enthusiasts in Noida & Greater Noida. Zero hassle. Scheduled drops that fit your clock.',
  keywords: 'home cooked meals, healthy food delivery, noida food, greater noida meals, gym meals, protein food, affordable meals, pg food',
  authors: [{ name: 'MAAKHANA' }],
  openGraph: {
    title: 'MAAKHANA - Ghar Ka Khana Delivered',
    description: 'Healthy, home-cooked, affordable meals delivered on your schedule',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MAAKHANA - Ghar Ka Khana Delivered',
    description: 'Healthy, home-cooked, affordable meals delivered on your schedule',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
