import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';

import React from 'react';
import ToggleTheme from './ToggleTheme';

const Header = () => {
  const textColor = useColorModeValue('xiketic.500', 'princetonOrange.500');
  return (
    <Flex
      as="header"
      h={16}
      maxW={'100%'}
      justifyContent={'space-between'}
      align={'center'}
      position={'sticky'}>
      <Heading
        ml={4}
        as={'em'}
        color={textColor}
        fontSize={{ base: 'xl', md: '2xl', lg: '4xl' }}>
        Christopher Vestman
      </Heading>
      <ToggleTheme />
    </Flex>
  );
};

export default Header;
