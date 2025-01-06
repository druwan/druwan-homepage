import './globals.css';
import { Metadata } from 'next';
import { Noto_Sans_Sinhala, Yaldevi } from 'next/font/google';
import { baseUrl } from './sitemap';
import { Navbar } from './components/Nav';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
import { cn } from './lib/utils';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Christopher Vestman',
  description: 'My Portfolio & Blog',
  openGraph: {
    title: 'My Portfolio & Blog',
    description: 'This is my Portfolio & Blog site.',
    url: baseUrl,
    siteName: 'Christopher Vestman',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const noto_sans_sinhala = Noto_Sans_Sinhala({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-sinhala',
});

const yaldevi = Yaldevi({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-yaldevi',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${yaldevi.variable} ${noto_sans_sinhala.variable}`}
      suppressHydrationWarning
    >
      <body
        className={cn(
          'antialiased max-w-3xl mx-4 mt-8 lg:mx-auto flex flex-col px-2 md:px-0'
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <main className='flex-auto min-w-0 mt-6'>
            <Navbar />
            {children}
            <Footer />
            <SpeedInsights />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
