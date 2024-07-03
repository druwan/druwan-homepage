import { HStack, Link, Spinner, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import useSWR from 'swr';
import { motion } from 'framer-motion';

import CustomIcons from '../CustomIcons';
import { SocialsType } from '../../utils/types';
import { fetcher } from '../../utils/customFetcher';

const SocialsComponent = () => {
  const textColor = useColorModeValue('night.500', 'timberwolf.500');
  const { data, error } = useSWR<SocialsType[]>('/api/socials', fetcher);

  if (error) return <p>Error loading socials</p>;
  if (!data) return <Spinner color={textColor} />;

  return (
    <HStack justifyContent={'space-evenly'}>
      {data &&
        data.map((social: SocialsType, idx: number) => (
          <NextLink key={idx} href={`${social.link}`} passHref>
            <Link isExternal>
              <CustomIcons iconTitle={social.name} />
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
            <CustomIcons iconTitle="Email" />
          </Link>
        </NextLink>
      </motion.div>
    </HStack>
  );
};

export default SocialsComponent;
