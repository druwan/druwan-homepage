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
import Link from 'next/link';

const MainContent = () => {
  const textColor = useColorModeValue('snow.500', 'princetonOrange.500');

  return (
    <Box>
      <Box my={'16px'} flexDir={'row'}>
        <Box>
          <HStack align={'baseline'}>
            <Heading as={'em'} fontSize={{ base: 'xl', md: '2xl', lg: '4xl' }}>
              Engineer &amp; Developer
            </Heading>
            <Spacer />
            <Link href={'/cs'}>CS</Link>
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
