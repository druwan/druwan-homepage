import {
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
import { ProjectsType } from '../../utils/types';

import CustomIcons from '../CustomIcons';
import { githubIcon } from '../SVGIcons';
import { fetcher } from '../../utils/customFetcher';

const Projects = () => {
  const textColor = useColorModeValue('night.500', 'princeton_orange.500');
  const headerFontSizes = { base: 'md', md: 'lg', lg: '2xl' };
  const textFontSizes = { base: 'sm', lg: 'md' };

  const { data, error } = useSWR<ProjectsType[]>('/api/projects', fetcher);

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
          {data.map((project: ProjectsType) => (
            <Tab key={project.id} fontSize={textFontSizes}>
              {project.title}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {data.map((project: ProjectsType) => (
            <TabPanel key={project.id}>
              {/* Image */}
              <Image
                src={`${project.imageUrl}`}
                alt={`Image of ${project.title}`}
                border={'1px'}
                borderColor={textColor}
                borderRadius={'2xl'}
              />

              {/* Title */}
              <HStack mt={8}>
                <Heading fontSize={headerFontSizes} textColor={textColor}>
                  {project.title}
                </Heading>
                <Spacer />

                <NextLink href={`${project.repoUrl!}`} passHref>
                  <Link isExternal>
                    <Text fontSize={textFontSizes}>
                      <Icon
                        as={githubIcon}
                        ml={'10px'}
                        color={textColor}
                        boxSize={'2.5rem'}
                      />
                    </Text>
                  </Link>
                </NextLink>
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
                      <CustomIcons iconTitle={tool.name} />
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
