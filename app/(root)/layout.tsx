import '../globals.css';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import Navbar from '@/components/Navbar';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Damlaf Multiventures',
  description: 'rent houses|buy land|real estate',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${manrope.className} bg-[#0F172A]`}>
        <Navbar />
        {/* Adjust for larger screens */}
        <main className='max-w-7xl mx-auto'>{children}</main>
      </body>
    </html>
  );
}
