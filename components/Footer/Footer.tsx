import { Flex, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import SocialsComponent from './SocialsComponent';

const Footer = () => {
  const footerTextColor = useColorModeValue(
    'night.500',
    'princeton_orange.500'
  );

  return (
    <Flex justify={'center'} as={'footer'}>
      <Stack as="footer">
        <SocialsComponent />
        <Text w={'100%'} align={'center'} color={footerTextColor}>
          &copy; {new Date().getFullYear()} Christopher Vestman
        </Text>
      </Stack>
    </Flex>
  );
};

export default Footer;
