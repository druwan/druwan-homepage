import { Box } from '@chakra-ui/react';

import React, { ReactNode } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

type LayoutProps = { children?: ReactNode };

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Header />
      <Box as={'main'}>{props.children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
