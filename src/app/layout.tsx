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
          'antialiased flex flex-col items-center justify-center mx-auto mt-4 lg:mt-8 mb-20 lg:mb-40 max-w-[630px] px-4 sm:px-0'
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='white'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
