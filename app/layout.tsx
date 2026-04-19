import './globals.css';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mohit Deevi - AI Engineer & Full Stack Product Builder',
  description: 'Portfolio of Mohit Deevi, AI Engineer crafting automation, SaaS, and growth engines that scale businesses.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-slate-950 text-white antialiased`}>{children}</body>
    </html>
  );
}