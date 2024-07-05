import {
  Heading,
  Spacer,
  Spinner,
  Tabs,
  useColorModeValue,
} from '@chakra-ui/react';

import useSWR from 'swr';
import { ProjectsType } from '../../utils/types';

import { fetcher } from '../../utils/customFetcher';
import TabsPanelComponent from '../Tabs/TabsPanelComponent';
import TabsListComponent from '../Tabs/TabsListComponent';

const Projects = () => {
  const textColor = useColorModeValue('night.500', 'princeton_orange.500');
  // const headerFontSizes = { base: 'md', md: 'lg', lg: '2xl' };
  // const textFontSizes = { base: 'sm', lg: 'md' };

  const { data, error } = useSWR<ProjectsType[]>('/api/projects', fetcher);

  if (error) return <p>Error loading projects</p>;
  if (!data) return <Spinner color={textColor} />;

  return (
    <>
      <Heading
        mb={3}
        // fontSize={headerFontSizes}
      >
        Latest Projects
      </Heading>
      <Spacer />
      {data && (
        <Tabs isFitted align="center" maxW={'5xl'}>
          <TabsListComponent projects={data} />
          <TabsPanelComponent projects={data} />
        </Tabs>
      )}
    </>
  );
};

export default Projects;
