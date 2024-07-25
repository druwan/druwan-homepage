import { GridItem, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import SocialsComponent from './SocialsComponent';

const Footer = () => {
  const footerTextColor = useColorModeValue(
    'darkDawnBlue.DEFAULT',
    'grainYellow.DEFAULT'
  );

  return (
    <GridItem area={'footer'} colSpan={3} rowSpan={1}>
      <Stack as="footer">
        <SocialsComponent />
        <Text w={'100%'} align={'center'} color={footerTextColor}>
          &copy; {new Date().getFullYear()} Christopher Vestman
        </Text>
      </Stack>
    </GridItem>
  );
};

export default Footer;
