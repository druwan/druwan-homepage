import { SlGlobe } from 'react-icons/sl';
import { VscGithub } from 'react-icons/vsc';

import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  Spacer,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import NextLink from 'next/link';
import useSWR from 'swr';
import { IProject } from '../../utils/interface';
import { fetcher } from '../../utils/loadProjects';
import CustomIcons from '../CustomIcons';

const Projects = () => {
  const textColor = useColorModeValue('xiketic.500', 'princetonOrange.500');
  const { data, error } = useSWR('/api/projects', fetcher);

  if (error) return <p>Error loading projects</p>;
  if (!data) return <Spinner color={textColor} />;

  return (
    <Container maxW={'100%'}>
      <Tabs
        variant={'line'}
        colorScheme={textColor}
        isFitted
        defaultIndex={0}
        style={{ maxWidth: 'full' }}>
        {/* Project titles */}
        <TabList>
          {data.projects.map((project: IProject) => (
            <Tab key={project.id} color={textColor} fontSize={'sm'}>
              {project.title}
            </Tab>
          ))}
        </TabList>

        {/* Project details card */}
        <TabPanels>
          {data.projects.map((project: IProject) => (
            <TabPanel key={project.id}>
              {/* Title & StatusBar */}
              <Flex justifyContent={'space-between'} align={'baseline'} mb={4}>
                <Heading>{project.title}</Heading>
                <Badge
                  colorScheme={
                    project.status === 'Complete' ? 'whatsapp' : 'red'
                  }>
                  {project.status}
                </Badge>
              </Flex>

              {/* Project Info + Image */}
              <Flex
                justifyContent={'space-between'}
                borderBottom={'1px'}
                borderColor={textColor}
                mb={4}>
                <Flex minW={'33%'} flexDir={'column'} pr={4}>
                  <Box>
                    <Text>{project.shortSummary}</Text>
                  </Box>

                  <Spacer />

                  {/* Project Links */}
                  <Flex justifyContent={'space-between'} align={'baseline'}>
                    <Link href={`${project.repoUrl}`} isExternal>
                      <Icon as={VscGithub} ml={'2px'} color={textColor} />{' '}
                      Project Repository
                    </Link>

                    {project.liveUrl !== null && (
                      <Link href={`${project?.liveUrl}`} isExternal>
                        <Icon as={SlGlobe} ml={'2px'} color={textColor} /> Live
                        Website
                      </Link>
                    )}
                  </Flex>
                </Flex>

                {/* Image */}
                {project.imageUrl !== null && (
                  <Flex minW={'66%'}>
                    <Image
                      src={project.imageUrl}
                      alt={`Image of ${project.title}`}
                      objectFit={'cover'}
                      borderLeft={'1px'}
                      borderColor={textColor}
                      loading={'lazy'}
                    />
                  </Flex>
                )}
              </Flex>

              {/* Project Built-With */}
              <Box mt={4}>
                <Flex justifyContent={'space-between'} align={'baseline'}>
                  <Heading size={'lg'} color={textColor}>
                    Built with
                  </Heading>
                  {project.stack.map((tool, idx: number) => (
                    <NextLink key={idx} href={`${tool.url}`} passHref>
                      <Link isExternal>
                        <Flex
                          flexDir={'row'}
                          align={'center'}
                          justify={'space-between'}>
                          <Text pr={2}>{tool.name}</Text>
                          <CustomIcons
                            iconTitle={tool.name}
                            iconLibrary={'Si'}
                          />
                        </Flex>
                      </Link>
                    </NextLink>
                  ))}
                </Flex>
              </Box>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default Projects;
