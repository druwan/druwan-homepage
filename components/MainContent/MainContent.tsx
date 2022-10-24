import {
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import Projects from './Projects';

const MainContent = () => {
  const textColor = useColorModeValue('snow.500', 'princetonOrange.500');

  return (
    <Container maxW={'75%'}>
      <Box my={'16px'}>
        <Heading size={'3xl'}>Christopher Vestman</Heading>

        <Text as={'em'} fontSize={'xl'} color={textColor}>
          Engineer &amp; Developer
        </Text>
        <Text my={4}>
          I am currently employed by Experis. I have a passion for math,
          physics, web &amp; football. When not online, I like to{' '}
          <Text as={'s'} color={textColor}>
            eat,
          </Text>{' '}
          cook, play the guitar or listening to podcasts.
        </Text>
      </Box>
      <Box my={'32px'}>
        <Heading>Latest works</Heading>
        <Projects />
      </Box>
    </Container>
  );
};

export default MainContent;
