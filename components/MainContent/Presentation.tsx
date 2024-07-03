import { Flex, Text, useColorModeValue } from '@chakra-ui/react';

import ProjectsComponent from './ProjectsComponent';

const Presentation = () => {
  const textColor = useColorModeValue('night.500', 'princeton_orange.500');

  return (
    <Flex as={'main'} mb={'16'} flexDir={'column'}>
      <Text my={4} fontSize={{ base: 'md' }}>
        I have a passion for math, physics &amp; football. When not online, I
        like to{' '}
        <Text as={'s'} color={textColor}>
          eat,
        </Text>{' '}
        cook, game or listening to podcasts.
      </Text>
      <ProjectsComponent />
    </Flex>
  );
};

export default Presentation;
