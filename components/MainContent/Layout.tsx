import { Flex } from '@chakra-ui/react';

import React, { ReactNode } from 'react';

type LayoutProps = { children?: ReactNode };

const Layout = (props: LayoutProps) => {
  return (
    <Flex justifyContent={'center'} m={'24px'} flexDir={'column'}>
      {props.children}
    </Flex>
  );
};

export default Layout;
