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
    images: [{
      url: '/images/preview_v5.png',
      width: 1200,
      height: 630,
      alt: '5th iteration website preview.',
    }],
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
          'antialiased min-h-screen flex flex-col'
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='white'
          enableSystem
          disableTransitionOnChange
        >
          <div className='flex flex-col min-h-screen w-full items-center'>
            <div className='w-full max-w-[630px] px-4 sm:px-0 flex flex-col flex-1'>
              <Navbar />
              <main className='flex-1'>
                {children}
              </main>
              <Footer />
            </div>
            <SpeedInsights />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
