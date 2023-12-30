import { Varela_Round, Yaldevi } from 'next/font/google';

const varela_round = Varela_Round({
  subsets: ['latin'],
  variable: '--font-varela_round',
  weight: '400',
});

const yaldevi = Yaldevi({
  subsets: ['sinhala'],
  variable: '--font-yaldevi',
  weight: '400',
});

export const fonts = {
  varela_round,
  yaldevi,
};
