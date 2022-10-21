import type { AppProps } from 'next/app';

// import { AnimatePresence } from 'framer-motion';
import { ChakraProvider } from '@chakra-ui/react';

import Layout from '../components/Layout';

import customTheme from '../utils/theme';

// if (typeof window !== 'undefined') {
//   window.history.scrollRestoration = 'manual';
// }

export default function MyPortfolioSite({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      {/* <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => {
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0 });
          }
        }}
        > */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* </AnimatePresence> */}
    </ChakraProvider>
  );
}
