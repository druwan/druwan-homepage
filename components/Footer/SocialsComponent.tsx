import { HStack, Spinner } from '@chakra-ui/react';

import useSWR from 'swr';
import { motion } from 'framer-motion';

import CustomIcons from '../CustomIcons';
import { SocialsType } from '../../utils/types';
import { fetcher } from '../../utils/customFetcher';
import { Link } from '@chakra-ui/next-js';

const SocialsComponent = () => {
  const { data, error } = useSWR<SocialsType[]>('/api/socials', fetcher);

  if (error) return <p>Error loading socials</p>;
  if (!data) return <Spinner />;

  return (
    <HStack justifyContent={'center'}>
      {data &&
        data.map((social: SocialsType, idx: number) => (
          <Link key={idx} href={social.link} isExternal>
            <CustomIcons iconTitle={social.name} />
          </Link>
        ))}
      <motion.div
        animate={{ scale: [0.7, 1.4, 1.4, 0.7], rotate: [0, 0, 270, 0] }}
        transition={{
          ease: 'easeInOut',
          duration: 3,
          repeat: Infinity,
          repeatType: 'loop',
        }}>
        <Link href={`mailto:hello@christophervestman.dev`} isExternal>
          <CustomIcons iconTitle="Email" />
        </Link>
      </motion.div>
    </HStack>
  );
};

export default SocialsComponent;
