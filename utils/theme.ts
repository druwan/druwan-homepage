import '@fontsource/yaldevi/400.css';
import '@fontsource/varela-round/400.css';

import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

const customTheme = extendTheme({
  colors: {
    spaceCadet: {
      50: '#e5e5e8',
      100: '#bebfc5',
      200: '#92949e',
      300: '#666977',
      400: '#46485a',
      500: '#25283d',
      600: '#212437',
      700: '#1b1e2f',
      800: '#161827',
      900: '#0d0f1a',
    },
    princetonOrange: {
      50: '#fdeee0',
      100: '#f9d5b3',
      200: '#f5ba80',
      300: '#f19e4d',
      400: '#ee8926',
      500: '#eb7400',
      600: '#e96c00',
      700: '#e56100',
      800: '#e25700',
      900: '#dd4400',
    },
    snowWhite: {
      50: '#fefdfd',
      100: '#fdfbfb',
      200: '#fbf8f8',
      300: '#f9f5f5',
      400: '#f8f2f2',
      500: '#f7f0f0',
      600: '#f6eeee',
      700: '#f5ecec',
      800: '#f3e9e9',
      900: '#f1e5e5',
    },
  },

  fonts: {
    heading: 'Varela round, sans-serif',
    body: 'Yaldevi, sans-serif',
  },

  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('snowWhite.500', 'spaceCadet.500')(props),
      },
    }),
  },
});

export default customTheme;
