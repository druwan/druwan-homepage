import {
  Divider,
  GridItem,
  Heading,
  HStack,
  Icon,
  Img,
  Link,
  Show,
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

import useSWR from 'swr';
import { ProjectsType } from '../../utils/types';

import { fetcher } from '../../utils/customFetcher';

import CustomIcons from '../CustomIcons';
import { githubIcon } from '../SVGIcons';

const ProjectsComponent = () => {
  const borderColor = useColorModeValue(
    'swedenBlueStd.DEFAULT',
    'swedenYellowStd.DEFAULT'
  );

  const { data, error } = useSWR<ProjectsType[]>('/api/projects', fetcher);

  if (error) return <p>Error loading projects</p>;
  if (!data) return <Spinner />;

  return (
    <>
      <GridItem colSpan={3} rowSpan={1}>
        <Heading mb={3}>Latest Projects</Heading>
      </GridItem>
      {data && (
        <GridItem colSpan={3} rowSpan={3}>
          <Tabs align="center" isLazy size={['sm', 'md', 'lg']}>
            <TabList>
              {data.map((project: ProjectsType) => (
                <Tab key={project.id}>
                  <Text noOfLines={[1, 2, 3]} sx={{ wordWrap: 'break-word' }}>
                    {project.title}
                  </Text>
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              {data.map((project: ProjectsType) => (
                <TabPanel key={project.id}>
                  {/* Image */}
                  <Show above="375px">
                    <Img
                      src={`${project.imageUrl}`}
                      alt={`Image of ${project.title}`}
                      border={'1px'}
                      borderRadius={'2xl'}
                      borderColor={borderColor}
                    />
                  </Show>

                  {/* Title */}
                  <HStack mt={8}>
                    <Heading>{project.title}</Heading>
                    <Spacer />
                    {/* Github Link */}

                    <Link href={project.repoUrl} isExternal>
                      <Text>
                        <Icon
                          as={githubIcon}
                          ml={'10px'}
                          boxSize={'1.75rem'}
                          aria-label={`Link to ${project.title}`}
                        />
                      </Text>
                    </Link>
                  </HStack>
                  {/* Summary */}
                  <Text textAlign={'left'}>{project.shortSummary}</Text>

                  <Divider />
                  {/* Links */}
                  <HStack justify={'space-between'} mt={3} align={'baseline'}>
                    {project.stack.map((tool, idx: number) => (
                      <Link
                        key={idx}
                        href={tool.url}
                        isExternal
                        aria-label={`Link to ${tool.name}`}>
                        <CustomIcons
                          iconTitle={tool.name}
                          aria-label={`Icon to ${tool.name}`}
                        />
                      </Link>
                    ))}
                  </HStack>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </GridItem>
      )}
    </>
  );
};

export default ProjectsComponent;
