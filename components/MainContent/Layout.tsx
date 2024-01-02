import { Flex } from '@chakra-ui/react';

import React, { ReactNode } from 'react';
import Footer from '../Footer/Footer';

type LayoutProps = { children?: ReactNode };

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Flex as={'main'} justifyContent={'center'}>
        {props.children}
      </Flex>
      <Footer />
    </>
  );
};

export default Layout;
