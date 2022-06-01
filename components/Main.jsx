import { Box, Container, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';

const Main = ({ children, router }) => {
  return (
    <Box>
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

      <Container
        as='main'
        maxW='container.xl'
        pt={14}
        bg={useColorModeValue('white', 'dark')}
      >
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
