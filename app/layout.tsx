import { Outfit as OutfitFont, Ovo as OvoFont } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';
import { Providers } from '@/redux/providers';

const outfit = OutfitFont({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});
const ovo = OvoFont({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Portfolio - Zohanubis',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
        style={{ background: 'var(--background-gradient)' }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
