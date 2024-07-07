import {
  Divider,
  Heading,
  HStack,
  Icon,
  Img,
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

import useSWR from 'swr';
import { ProjectsType } from '../../utils/types';

import { fetcher } from '../../utils/customFetcher';

import CustomIcons from '../CustomIcons';
import { githubIcon } from '../SVGIcons';

const Projects = () => {
  // const textColor = useColorModeValue('night.500', 'princeton_orange.500');
  // const headerFontSizes = { base: 'md', md: 'lg', lg: '2xl' };
  const borderColor = useColorModeValue(
    'night.DEFAULT',
    'princeton_orange.DEFAULT'
  );

  const { data, error } = useSWR<ProjectsType[]>('/api/projects', fetcher);

  if (error) return <p>Error loading projects</p>;
  if (!data) return <Spinner />;

  return (
    <>
      <Heading mb={3}>Latest Projects</Heading>
      <Spacer />
      {data && (
        <Tabs isFitted align="center" maxW={'5xl'}>
          <TabList>
            {data.map((project: ProjectsType) => (
              <Tab key={project.id}>{project.title}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {data.map((project: ProjectsType) => (
              <TabPanel key={project.id}>
                {/* Image */}
                <Img
                  src={`${project.imageUrl}`}
                  alt={`Image of ${project.title}`}
                  border={'1px'}
                  borderRadius={'2xl'}
                  borderColor={borderColor}
                />

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
                        boxSize={'2rem'}
                        color={borderColor}
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
                    <Link key={idx} href={tool.url} isExternal>
                      <CustomIcons iconTitle={tool.name} />
                    </Link>
                  ))}
                </HStack>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      )}
    </>
  );
};

export default Projects;
