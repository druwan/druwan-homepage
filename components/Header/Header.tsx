import { Flex } from '@chakra-ui/react';

import React from 'react';
import ToggleTheme from './ToggleTheme';

const Header = () => {
  return (
    <Flex
      as="header"
      h={16}
      maxW={'100%'}
      justifyContent={'end'}
      align={'center'}
      position={'sticky'}>
      <ToggleTheme />
    </Flex>
  );
};

export default Header;
