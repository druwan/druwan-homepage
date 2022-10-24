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
    <Container maxW={'70%'}>
      <Box my={'16px'}>
        <Heading
          as={'em'}
          color={textColor}
          fontSize={{ base: 'xl', md: '2xl', lg: '4xl' }}>
          Engineer &amp; Developer
        </Heading>
        <Text my={4} fontSize={{ base: 'md' }}>
          I am currently employed by Experis. I have a passion for math,
          physics, web &amp; football. When not online, I like to{' '}
          <Text as={'s'} color={textColor}>
            eat,
          </Text>{' '}
          cook, play the guitar or listening to podcasts.
        </Text>
      </Box>
      <Box my={'32px'}>
        <Projects />
      </Box>
    </Container>
  );
};

export default MainContent;
