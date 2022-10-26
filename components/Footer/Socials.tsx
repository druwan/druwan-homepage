import { Flex, Link, Spinner, Text, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import useSWR from 'swr';

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
            <NextLink key={idx} href={`${social.link}`} passHref>
              <Link isExternal>
                <Text fontSize={'lg'}>
                  <CustomIcons iconTitle={social.name} iconLibrary={'Fa'} />
                </Text>
              </Link>
            </NextLink>
          ))}
        <NextLink href={`mailto:hello@christophervestman.dev`} passHref>
          <Link isExternal>
            <CustomIcons iconTitle="Email" iconLibrary="Tfi" />
          </Link>
        </NextLink>
      </Flex>
    </>
  );
};

export default Socials;
