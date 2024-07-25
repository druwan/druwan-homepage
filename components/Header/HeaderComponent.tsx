import { GridItem, Heading, HStack, Spacer } from '@chakra-ui/react';
import ToggleTheme from './ToggleTheme';

const HeaderComponent = () => {
  return (
    <>
      <GridItem area={'header'} colSpan={3} rowSpan={1}>
        <HStack>
          <Heading>Engineer &amp; Developer</Heading>
          <Spacer />
          <ToggleTheme />
        </HStack>
      </GridItem>
    </>
  );
};

export default HeaderComponent;
