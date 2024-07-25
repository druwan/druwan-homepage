import { GridItem, Text, useColorModeValue } from '@chakra-ui/react';

const Presentation = () => {
  const textColor = useColorModeValue(
    'swedenBlueStd.DEFAULT',
    'swedenYellowStd.DEFAULT'
  );

  return (
    <GridItem colSpan={3} rowSpan={1}>
      <Text my={4} fontSize={{ base: 'md' }}>
        I have a passion for math, physics &amp; football. When not online, I
        like to{' '}
        <Text as={'s'} color={textColor}>
          eat,
        </Text>{' '}
        cook, game or listening to podcasts.
      </Text>
    </GridItem>
  );
};

export default Presentation;
