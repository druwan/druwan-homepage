import '@fontsource/yaldevi/400.css';
import '@fontsource/varela-round/400.css';

import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';
import { ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const colors = {
  black: {
    DEFAULT: '#000000',
  },
  darkDawnBlue: {
    DEFAULT: '#142638',
  },
  grainYellow: {
    DEFAULT: '#E8E3D1',
  },
  swedenBlueStd: {
    DEFAULT: '#005293',
    50: '#ddf5ff',
    100: '#b0ddff',
    200: '#80c7ff',
    300: '#50b0fe',
    400: '#279afc',
    500: '#1580e3',
    600: '#0964b2',
    700: '#004780',
    800: '#002b4f',
    900: '#000f1f',
  },
  swedenYellowStd: {
    DEFAULT: '#FECB00',
    50: '#fffada',
    100: '#fff0ad',
    200: '#ffe57d',
    300: '#ffdb4b',
    400: '#ffd11a',
    500: '#e6b700',
    600: '#b38f00',
    700: '#806600',
    800: '#4e3d00',
    900: '#1d1400',
  },

  white: {
    DEFAULT: '#FFFFFF',
  },
};

const customTheme = extendTheme({
  colors: colors,

  components: {
    Divider: {
      baseStyle: (props: StyleFunctionProps) => ({
        borderColor: mode(
          colors.darkDawnBlue.DEFAULT,
          colors.swedenYellowStd.DEFAULT
        )(props),
        borderRadius: '2xl',
        size: '2xl',
      }),
    },

    Heading: {
      baseStyle: (props: StyleFunctionProps) => ({
        color: mode(
          colors.darkDawnBlue.DEFAULT,
          colors.grainYellow.DEFAULT
        )(props),
      }),
    },

    Spinner: {
      baseStyle: (props: StyleFunctionProps) => ({
        color: mode(
          colors.darkDawnBlue.DEFAULT,
          colors.swedenYellowStd.DEFAULT
        )(props),
      }),
    },

    Tabs: {
      baseStyle: (props: StyleFunctionProps) => ({
        position: 'relative',
        tab: {
          _selected: {
            color: mode(
              colors.swedenBlueStd.DEFAULT,
              colors.swedenYellowStd.DEFAULT
            )(props),
          },
          _hover: {
            color: mode(
              colors.swedenBlueStd.DEFAULT,
              colors.swedenYellowStd.DEFAULT
            )(props),
          },
        },
      }),
    },

    Text: {
      baseStyle: (props: StyleFunctionProps) => ({
        color: mode(colors.black.DEFAULT, colors.white.DEFAULT)(props),
      }),
    },
  },

  config,

  fonts: {
    heading: 'Varela round, sans-serif',
    body: 'Yaldevi, sans-serif',
  },

  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode(colors.white.DEFAULT, colors.darkDawnBlue.DEFAULT)(props),
        color: mode(colors.darkDawnBlue.DEFAULT, colors.white.DEFAULT)(props),
      },
    }),
  },
});

export default customTheme;
