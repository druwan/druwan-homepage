import {
  Box,
  Container,
  Flex,
  Heading,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ToggleTheme from '../ToggleTheme/ToggleTheme';

const LogoBox = styled.span`
  display: inline-flex;
  align-items: center;
  height: 40px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(-20deg);
  }
`;

const Logo = () => {
  const aeroPrintImg = `/images/aeroprint${useColorModeValue('', '-dark')}.png`;
  return (
    <Link href='/' scroll={false}>
      <a>
        <LogoBox>
          <Image src={aeroPrintImg} width={80} height={40} alt='logo' />
          <Heading
            as={'h3'}
            color={useColorModeValue('black', 'white')}
            fontSize='24'
            ml={3}
          >
            Christopher Vestman
          </Heading>
        </LogoBox>
      </a>
    </Link>
  );
};

const Navbar = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      as='header'
      top={0}
      w={'full'}
      position='sticky'
      zIndex={1}
      display='block'
      bg={colorMode === 'light' ? 'personalGray.100' : 'personalBlue.900'}
      px={4}
    >
      <Container
        as={'nav'}
        display='flex'
        p={4}
        width={'full'}
        maxW='container.sm'
        wrap='wrap'
        alignItems='center'
        justifyContent='center'
      >
        <Flex align='center' mr={5}>
          <Heading as='h1' size='lg' letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Box flex={1} align='right'>
          <ToggleTheme />
        </Box>
      </Container>
    </Flex>
  );
};

export default Navbar;
