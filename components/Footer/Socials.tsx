'use client';
import { Flex, Spinner, Text, useColorModeValue } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import useSWR from 'swr';
import { motion } from 'framer-motion';

import CustomIcons from '../CustomIcons';
import { ISocials } from '../../utils/interface';
import { fetcher } from '../../utils/loadProjects';

const Socials = () => {
  const textColor = useColorModeValue('xiketic.500', 'princetonOrange.500');

  const { data, error } = useSWR('/api/socials', fetcher);
  if (error) return <p>Error loading socials</p>;
  if (!data) return <Spinner color={textColor} />;

  return (
    <>
      <Flex justifyContent={'space-evenly'}>
        {data.socials &&
          data.socials.map((social: ISocials, idx: number) => (
            <Link key={idx} href={`${social.link}`} isExternal>
              <Text fontSize={'lg'}>
                <CustomIcons iconTitle={social.name} iconLibrary={'Fa'} />
              </Text>
            </Link>
          ))}
        <motion.div
          animate={{ scale: 2 }}
          transition={{
            ease: 'easeInOut',
            duration: 1.2,
            repeat: Infinity,
            repeatType: 'mirror',
          }}>
          <Link href={`mailto:hello@christophervestman.dev`} isExternal>
            <CustomIcons iconTitle="Email" iconLibrary="Tfi" />
          </Link>
        </motion.div>
      </Flex>
    </>
  );
};

export default Socials;
