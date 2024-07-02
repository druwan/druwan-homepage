import { Flex, Link, Spinner, Text, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import useSWR from 'swr';
import { motion } from 'framer-motion';

import CustomIcons from '../CustomIcons';
import { ISocials } from '../../utils/interface';
import { fetcher } from '../../utils/loadProjects';

const Socials = () => {
  const textColor = useColorModeValue('night.500', 'timberwolf.500');

  const { data, error } = useSWR('/api/socials', fetcher);
  if (error) return <p>Error loading socials</p>;
  if (!data) return <Spinner color={textColor} />;

  return (
    <Flex justifyContent={'space-evenly'}>
      {data.socials &&
        data.socials.map((social: ISocials, idx: number) => (
          <NextLink key={idx} href={`${social.link}`} passHref>
            <Link isExternal>
              <Text fontSize={'lg'}>
                {/* <CustomIcons iconTitle={social.name} iconLibrary={'Fa'} /> */}
              </Text>
            </Link>
          </NextLink>
        ))}
      <motion.div
        animate={{ scale: [1, 2, 2, 1], rotate: [0, 0, 270, 0] }}
        transition={{
          ease: 'easeInOut',
          duration: 3,
          repeat: Infinity,
          repeatType: 'loop',
        }}>
        <NextLink href={`mailto:hello@christophervestman.dev`} passHref>
          <Link isExternal>
            {/* <CustomIcons iconTitle="Email" iconLibrary="Tfi" /> */}
          </Link>
        </NextLink>
      </motion.div>
    </Flex>
  );
};

export default Socials;
