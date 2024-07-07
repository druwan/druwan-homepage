'use client';

import { Flex } from '@chakra-ui/react';

import React, { ReactNode } from 'react';

type LayoutProps = { children?: ReactNode };

const LayoutComponent = (props: LayoutProps) => {
  return (
    <Flex alignContent={'center'} m={'auto'} flexDir={'column'} maxW={'5xl'}>
      {props.children}
    </Flex>
  );
};

export default LayoutComponent;
