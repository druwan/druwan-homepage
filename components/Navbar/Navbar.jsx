import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ToggleTheme from './ToggleTheme';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  height: 40px;
  line-height: 20px;
  padding: 10px;

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
          <Text
            color={useColorModeValue('gray.800', 'white.900')}
            fontSize='20'
            ml={3}
          >
            Christopher Vestman
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

const Navbar = () => {
  return (
    <Box
      position='fixed'
      as='nav'
      w='100%'
      bg={useColorModeValue('light', 'dark')}
    >
      <Container
        display='flex'
        p={4}
        maxW='container.xl'
        wrap='wrap'
        alignItems='center'
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
    </Box>
  );
};

export default Navbar;
