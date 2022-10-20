import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';

import React from 'react';
import ToggleTheme from './ToggleTheme';

const Navbar = () => {
  const navBarBgColor = useColorModeValue('snowWhite.500', 'spaceCadet.500');

  const headingColor = useColorModeValue('spaceCadet.500', 'snowWhite.500');

  return (
    <Flex
      as="nav"
      w={'100vw'}
      justifyContent={'space-between'}
      align={'center'}
      bg={navBarBgColor}
      position={'sticky'}>
      <Heading as={'h1'} letterSpacing={'tighter'} color={headingColor}>
        Christopher Vestman
      </Heading>

      <ToggleTheme />
    </Flex>
  );
};

export default Navbar;
