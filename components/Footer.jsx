import { Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex
      as='footer'
      justifyContent={'center'}
      opacity={0.6}
      fontSize='sm'
      maxW={'inherit'}
    >
      <Text>
        &copy; {new Date().getFullYear()} Christopher Vestman. With help from{' '}
        <Link href='https://www.craftz.dog/' isExternal>
          Takuya
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
