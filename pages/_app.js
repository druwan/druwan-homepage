import '@fontsource/yaldevi/400.css';
import '@fontsource/varela-round/400.css';

import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

import Main from '../components/Main';
import { AnimatePresence } from 'framer-motion';

const theme = extendTheme({
  fonts: {
    heading: 'Varela round, sans-serif',
    body: 'Yaldevi, sans-serif',
  },
  colors: {
    personalBlue: {
      50: '#EFF0F6',
      100: '#D1D5E6',
      200: '#B3BAD6',
      300: '#959FC5',
      400: '#7884B5',
      500: '#5A69A5',
      600: '#485484',
      700: '#363F63',
      800: '#242A42',
      900: '#121521',
    },
    personalGray: {
      50: '#F8F4EC',
      100: '#EBE0CB',
      200: '#DFCCAA',
      300: '#D2B989',
      400: '#C6A567',
      500: '#B99146',
      600: '#947438',
      700: '#6F572A',
      800: '#4A3A1C',
      900: '#251D0E',
    },
    personalOrange: {
      50: '#FFF2E5',
      100: '#FFDBB8',
      200: '#FFC48A',
      300: '#FFAC5C',
      400: '#FF952E',
      500: '#FF7E00',
      600: '#CC6500',
      700: '#994C00',
      800: '#663200',
      900: '#331900',
    },
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
