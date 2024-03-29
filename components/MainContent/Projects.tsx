import { SlGlobe } from 'react-icons/sl';
import { VscGithub } from 'react-icons/vsc';

import {
  Badge,
  Divider,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Spacer,
  Spinner,
  Stack,
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
  const textColor = useColorModeValue('night.500', 'princeton_orange.500');

  const { data, error } = useSWR('/api/projects', fetcher);

  const headerFontSizes = { base: 'md', md: 'lg', lg: '2xl' };
  const textFontSizes = { base: 'sm', lg: 'md' };
  const iconSize = { base: 4 };

  if (error) return <p>Error loading projects</p>;
  if (!data) return <Spinner color={textColor} />;

  return (
    <>
      <Heading fontSize={headerFontSizes} mb={3} textColor={textColor}>
        Latest Projects
      </Heading>
      <Spacer />
      <Tabs align="center">
        <TabList>
          {data.projects.map((project: IProject) => (
            <Tab key={project.id} fontSize={textFontSizes}>
              {project.title}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {data.projects.map((project: IProject) => (
            <TabPanel key={project.id}>
              {/* Image */}
              <Image
                src={`${project.imageUrl}`}
                alt={`Image of ${project.title}`}
                border={'1px'}
                borderColor={textColor}
                borderRadius={'2xl'}
              />

              {/* Title + Badge  */}
              <HStack mt={8}>
                <Heading fontSize={headerFontSizes} textColor={textColor}>
                  {project.title}
                </Heading>
                <Spacer />
                {project.liveUrl !== null && (
                  <NextLink href={`${project.liveUrl!}`} passHref>
                    <Link isExternal>
                      <Text fontSize={textFontSizes}>
                        Live preview
                        <Icon
                          as={SlGlobe}
                          color={textColor}
                          boxSize={iconSize}
                          ml={'10px'}
                        />
                      </Text>
                    </Link>
                  </NextLink>
                )}

                <NextLink href={`${project.repoUrl!}`} passHref>
                  <Link isExternal>
                    <Text fontSize={textFontSizes}>
                      Github
                      <Icon
                        as={VscGithub}
                        ml={'10px'}
                        color={textColor}
                        boxSize={iconSize}
                      />
                    </Text>
                  </Link>
                </NextLink>
                <Badge
                  colorScheme={
                    project.status === 'Complete' ? 'whatsapp' : 'red'
                  }
                  fontSize={textFontSizes}>
                  {project.status}
                </Badge>
              </HStack>

              {/* Summary */}
              <Stack mt={3}>
                <Text fontSize={textFontSizes} textAlign={'left'}>
                  {project.shortSummary}
                </Text>
                <Spacer />

                {/* Links */}
                <HStack mt={3}></HStack>
              </Stack>
              <Spacer />
              <Divider />
              <HStack justify={'space-between'} mt={3} align={'baseline'}>
                {project.stack.map((tool, idx: number) => (
                  <NextLink key={idx} href={`${tool.url}`} passHref>
                    <Link isExternal>
                      <CustomIcons iconTitle={tool.name} iconLibrary={'Si'} />
                    </Link>
                  </NextLink>
                ))}
              </HStack>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Projects;
