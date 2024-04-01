import {
  Box,
  HStack,
  Heading,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import Projects from './Projects';
import ToggleTheme from '../ToggleTheme';

const MainContent = () => {
  const textColor = useColorModeValue('night.500', 'princeton_orange.500');

  return (
    <Box mb={'16'} maxW={'5xl'}>
      <Box my={'16'} flexDir={'row'}>
        <Box>
          <HStack align={'baseline'}>
            <Heading
              as={'em'}
              fontSize={{ base: 'xl', md: '2xl', lg: '4xl' }}
              textColor={textColor}>
              Engineer &amp; Developer
            </Heading>
            <Spacer />
            <ToggleTheme />
          </HStack>

          <Text my={4} fontSize={{ base: 'md' }}>
            I have a passion for math, physics &amp; football. When not online,
            I like to{' '}
            <Text as={'s'} color={textColor}>
              eat,
            </Text>{' '}
            cook, game or listening to podcasts.
          </Text>
        </Box>
      </Box>
      <Projects />
    </Box>
  );
};

export default MainContent;
