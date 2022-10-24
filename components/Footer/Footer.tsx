import { Flex, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import Socials from './Socials';

const Footer = () => {
  const footerTextColor = useColorModeValue(
    'spaceCadet.500',
    'princetonOrange.500'
  );

  return (
    <Flex justify={'center'}>
      <Stack as="footer" maxW={'20%'}>
        <Socials />
        <Text
          align={'center'}
          fontSize={'sm'}
          color={footerTextColor}
          opacity={0.6}>
          &copy; {new Date().getFullYear()} Christopher Vestman
        </Text>
      </Stack>
    </Flex>
  );
};

export default Footer;
