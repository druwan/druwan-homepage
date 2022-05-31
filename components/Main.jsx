import { Box, Container, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';

const Main = ({ children, router }) => {
  return (
    <Box as='main' pb={8} bg={useColorModeValue('light', 'dark')}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content="Christopher's homepage" />
        <meta name='author' content='Takuya Matsuyama' />
        <meta name='author' content='Christopher Vestman' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <meta property='og:site_name' content='Christopher Vestman' />
        <meta property='og:title' content='Christopher Vestman' />
        <meta property='og:type' content='website' />
        <title>Christopher Vestman</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW='container.xl' pt={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
