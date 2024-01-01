import { Flex, Heading, HStack, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import ToggleTheme from './ToggleTheme';
import Link from 'next/link';

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
      <HStack>
        <Link href={'/cs'}>CS</Link>
        <ToggleTheme />
      </HStack>
    </Flex>
  );
};

export default Header;
