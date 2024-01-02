import { Flex, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import Socials from './Socials';

const Footer = () => {
  const footerTextColor = useColorModeValue(
    'xiketic.500',
    'princetonOrange.500'
  );

  return (
    <Flex justify={'center'}>
      <Stack as="footer">
        <Socials />
        <Text w={'100%'} align={'center'} color={footerTextColor}>
          &copy; {new Date().getFullYear()} Christopher Vestman
        </Text>
      </Stack>
    </Flex>
  );
};

export default Footer;
