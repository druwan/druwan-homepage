'use client';
import { Flex } from '@chakra-ui/react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

type LayoutProps = { children?: React.ReactNode };

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
