import '@fontsource/yaldevi/400.css';
import '@fontsource/varela-round/400.css';

import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

import Main from '../components/Main';
import { AnimatePresence } from 'framer-motion';

const theme = extendTheme({
  fonts: {
    heading: 'Yaldevi, sans-serif',
    body: 'Yaldevi, sans-serif',
  },
  colors: {
    slYellow: {
      50: '#fff7da',
      100: '#ffe8ad',
      200: '#ffd87d',
      300: '#ffc94b',
      400: '#ffb91a',
      500: '#e6a000',
      600: '#b37c00',
      700: '#815900',
      800: '#4e3500',
      900: '#1e1100',
    },
    slOrange: {
      50: '#fff1da',
      100: '#ffd7ae',
      200: '#ffbe7d',
      300: '#ffa54c',
      400: '#ff8b1a',
      500: '#e67100',
      600: '#b45800',
      700: '#813e00',
      800: '#4f2500',
      900: '#200b00',
    },
    slRed: {
      50: '#ffe6f0',
      100: '#f9bace',
      200: '#ef8fad',
      300: '#e8648c',
      400: '#e0396c',
      500: '#c72052',
      600: '#9b1740',
      700: '#700f2e',
      800: '#45061b',
      900: '#1d0009',
    },
    slBlue: {
      50: '#EEF0F6',
      100: '#D1D5E6',
      200: '#B3BBD6',
      300: '#95A0C5',
      400: '#7885B5',
      500: '#5A6BA5',
      600: '#485584',
      700: '#364063',
      800: '#242B42',
      900: '#121521',
    },
    slGreen: {
      50: '#E5FFFD',
      100: '#B8FFFB',
      200: '#8AFFF8',
      300: '#5CFFF5',
      400: '#2EFFF2',
      500: '#00FFF0',
      600: '#00CCC0',
      700: '#009990',
      800: '#006660',
      900: '#003330',
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
