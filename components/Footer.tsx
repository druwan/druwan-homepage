import {
  Divider,
  Flex,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const Footer = () => {
  const footerTextColor = useColorModeValue(
    'spaceCadet.500',
    'princetonOrange.500'
  );

  return (
    <Stack as="footer" width={'full'}>
      <Divider />
      <Flex justify={'center'}>Links to Socials by using IconButtons</Flex>

      <Text
        align={'center'}
        fontSize={'sm'}
        color={footerTextColor}
        opacity={0.6}>
        &copy; {new Date().getFullYear()} Christopher Vestman
      </Text>
    </Stack>
  );
};

export default Footer;
