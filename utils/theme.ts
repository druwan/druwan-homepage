import '@fontsource/yaldevi/400.css';
import '@fontsource/varela-round/400.css';

import { ComponentStyleConfig, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';
import { ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const colors = {
  princeton_orange: {
    DEFAULT: '#eb7400',
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
  night: {
    DEFAULT: '#0d0d0d',
    100: '#030303',
    200: '#050505',
    300: '#080808',
    400: '#0a0a0a',
    500: '#0d0d0d',
    600: '#3d3d3d',
    700: '#6e6e6e',
    800: '#9e9e9e',
    900: '#cfcfcf',
  },
  raisin_black: {
    DEFAULT: '#1a1b26',
    100: '#050608',
    200: '#0b0b10',
    300: '#101118',
    400: '#151620',
    500: '#1a1b26',
    600: '#3f415c',
    700: '#636791',
    800: '#9598b7',
    900: '#caccdb',
  },
  periwinkle: {
    DEFAULT: '#a9b1d6',
    100: '#191e34',
    200: '#323c67',
    300: '#4b599b',
    400: '#7582bd',
    500: '#a9b1d6',
    600: '#bac1de',
    700: '#cbd0e6',
    800: '#dde0ee',
    900: '#eeeff7',
  },
  timberwolf: {
    DEFAULT: '#cfc9c2',
    100: '#2d2923',
    200: '#5a5147',
    300: '#877a6a',
    400: '#aca296',
    500: '#cfc9c2',
    600: '#d9d5cf',
    700: '#e3dfdb',
    800: '#eceae7',
    900: '#f6f4f3',
  },
  light_sky_blue: {
    DEFAULT: '#7dcfff',
    100: '#00304d',
    200: '#006199',
    300: '#0091e6',
    400: '#33b4ff',
    500: '#7dcfff',
    600: '#99daff',
    700: '#b3e3ff',
    800: '#ccecff',
    900: '#e5f6ff',
  },
};

const customTheme = extendTheme({
  colors: colors,

  config,

  components: {
    Heading: {
      baseStyle: (props: ComponentStyleConfig) => ({
        color: mode(
          colors.night.DEFAULT,
          colors.princeton_orange.DEFAULT
        )(props),
      }),
    },
  },

  fonts: {
    heading: 'Varela round, sans-serif',
    body: 'Yaldevi, sans-serif',
  },

  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode(colors.timberwolf.DEFAULT, colors.raisin_black.DEFAULT)(props),
      },
    }),
  },
});

export default customTheme;
