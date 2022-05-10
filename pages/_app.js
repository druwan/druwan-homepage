import '@fontsource/yaldevi/400.css';
import '@fontsource/varela-round/400.css';

import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

import Main from '../components/Main';
import { AnimatePresence } from 'framer-motion';

const theme = extendTheme({
  fonts: {
    heading: 'Varela Round, sans-serif',
    body: 'Yaldevi, sans-serif',
  },
});

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Main router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Main>
    </ChakraProvider>
  );
}

export default MyApp;
