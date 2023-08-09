import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Header from './components/Header';

const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Media Hub',
  description: 'Center for different media',
  keywords: 'media, course, git, github, software',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="px-10 py-10">{children}</main>
      </body>
    </html>
  );
}
