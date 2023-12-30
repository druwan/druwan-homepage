'use client';
import { SlGlobe } from 'react-icons/sl';
import { VscGithub } from 'react-icons/vsc';

import {
  Badge,
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Image,
  Spacer,
  Spinner,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { Link } from '@chakra-ui/next-js';
import useSWR from 'swr';
import { IProject } from '../../utils/interface';
import { fetcher } from '../../utils/loadProjects';
import CustomIcons from '../CustomIcons';

const Projects = () => {
  const textColor = useColorModeValue('xiketic.500', 'princetonOrange.500');
  const { data, error } = useSWR('/api/projects', fetcher);

  const headerFontSizes = { base: 'md', md: 'lg', lg: '2xl' };
  const textFontSizes = { base: 'sm', lg: 'md' };
  const iconSize = { base: 4 };

  if (error) return <p>Error loading projects</p>;
  if (!data) return <Spinner color={textColor} />;

  return (
    <Box maxW={'full'}>
      <Heading fontSize={headerFontSizes} mb={3}>
        Latest Projects
      </Heading>

      <Flex justifyContent={'center'} align={'center'}>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2,1fr)' }}
          justifyContent={'center'}
          gap={8}>
          {data.projects.map((project: IProject) => (
            <GridItem key={project.id}>
              <Box h={'580px'}>
                <Box w={'100%'} mb={6}>
                  <Image
                    src={`${project.imageUrl!}`}
                    alt={`Image of ${project.title}`}
                    border={'1px'}
                    borderColor={textColor}
                    borderRadius={'2xl'}
                    maxH={'285px'}
                  />
                </Box>

                {/* Title + Badge */}
                <HStack>
                  <Heading fontSize={headerFontSizes}>{project.title}</Heading>
                  <Spacer />
                  <Badge
                    colorScheme={
                      project.status === 'Complete' ? 'whatsapp' : 'red'
                    }>
                    {project.status}
                  </Badge>
                </HStack>

                {/* Text + Links + Stack */}
                <Stack>
                  <Text>{project.shortSummary}</Text>
                  <Spacer />

                  {/* Links */}
                  <HStack mt={4}>
                    {project.liveUrl !== null && (
                      <Link href={`${project.liveUrl!}`} isExternal>
                        <Text fontSize={textFontSizes}>
                          <Icon
                            as={SlGlobe}
                            ml={'2px'}
                            color={textColor}
                            boxSize={iconSize}
                          />{' '}
                          Live preview
                        </Text>
                      </Link>
                    )}
                    <Spacer />

                    <Link href={`${project.repoUrl!}`} isExternal>
                      <Text fontSize={textFontSizes}>
                        <Icon
                          as={VscGithub}
                          ml={'2px'}
                          color={textColor}
                          boxSize={iconSize}
                        />{' '}
                        GitHub repository
                      </Text>
                    </Link>
                  </HStack>
                  <Spacer />

                  {/* Stack */}
                  <Flex
                    justifyContent={'space-evenly'}
                    align={'baseline'}
                    mt={4}>
                    {project.stack.map((tool, idx: number) => (
                      <Link key={idx} href={`${tool.url}`} isExternal>
                        <CustomIcons iconTitle={tool.name} iconLibrary={'Si'} />
                      </Link>
                    ))}
                  </Flex>
                  <Divider />
                </Stack>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};

export default Projects;
