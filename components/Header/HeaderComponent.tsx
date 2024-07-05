import { HStack, Heading, Spacer } from '@chakra-ui/react';
import ToggleTheme from './ToggleTheme';

const HeaderComponent = () => {
  return (
    <HStack as={'header'} align={'baseline'} alignContent={'center'}>
      <Heading as={'h2'}>Engineer &amp; Developer</Heading>
      <Spacer />
      <ToggleTheme />
    </HStack>
  );
};

export default HeaderComponent;
