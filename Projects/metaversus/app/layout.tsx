import '../styles/globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Metaversus',
  description:
    'Metaversus is a landing page with modren UI/UX design developed by ahmed abohmaid https://github.com/ahmed-abohmaid',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://stijndv.com/fonts/Eudoxus-Sans.css"
        />
      </head>
      <body className='bg-primary-black overflow-x-hidden'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
