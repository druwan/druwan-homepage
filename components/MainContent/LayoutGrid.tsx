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
      p={{ base: 4, sm: 6, md: 8, lg: 10, xl: 12 }}
      h={'calc(100vh)'}>
      {props.children}
    </Grid>
  );
};

export default LayoutGrid;
