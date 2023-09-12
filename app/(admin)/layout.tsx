import '../globals.css';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Damlaf',
  description: 'realestate',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${manrope.className}`}>{children}</body>
    </html>
  );
}
