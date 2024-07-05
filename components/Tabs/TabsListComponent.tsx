import { Tab, TabList } from '@chakra-ui/react';
import { ProjectsType } from '../../utils/types';

const TabsListComponent = ({ projects }: { projects: ProjectsType[] }) => {
  return (
    <TabList>
      {projects.map((project: ProjectsType) => (
        <Tab key={project.id}>{project.title}</Tab>
      ))}
    </TabList>
  );
};

export default TabsListComponent;
