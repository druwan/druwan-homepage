'use client';

import { Grid } from '@chakra-ui/react';

import React, { ReactNode } from 'react';

type LayoutProps = { children?: ReactNode };

const LayoutGrid = (props: LayoutProps) => {
  return (
    <Grid
      justifyContent={'center'}
      templateColumns={'repeat(3, 1fr)'}
      gap={4}
      px={{ base: 4, sm: 6, md: 8, lg: 10, xl: 12 }}
      pt={{ base: 2, sm: 3, md: 4, lg: 5, xl: 6 }}
      minW={'375px'}>
      {props.children}
    </Grid>
  );
};

export default LayoutGrid;
