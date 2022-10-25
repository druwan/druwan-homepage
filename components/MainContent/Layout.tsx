import { Flex } from '@chakra-ui/react';

import React, { ReactNode } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

type LayoutProps = { children?: ReactNode };

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Header />
      <Flex as={'main'} justifyContent={'center'}>
        {props.children}
      </Flex>
      <Footer />
    </>
  );
};

export default Layout;
