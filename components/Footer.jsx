import { Box, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box align='center' opacity={0.6} fontSize='md'>
      &copy; {new Date().getFullYear()} Christopher Vestman. With help from{' '}
      <Link href='https://www.craftz.dog/' isExternal>
        Takuya (Craftz.dog)
      </Link>
    </Box>
  );
};

export default Footer;
