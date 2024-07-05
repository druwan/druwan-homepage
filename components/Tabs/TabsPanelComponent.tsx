import {
  Divider,
  Heading,
  HStack,
  Icon,
  Img,
  Link,
  Spacer,
  TabPanel,
  TabPanels,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ProjectsType } from '../../utils/types';
import NextLink from 'next/link';
import { githubIcon } from '../SVGIcons';
import CustomIcons from '../CustomIcons';

const TabsPanelComponent = ({ projects }: { projects: ProjectsType[] }) => {
  const borderColor = useColorModeValue(
    'raisin_black.DEFAULT',
    'princeton_orange.DEFAULT'
  );

  return (
    <TabPanels>
      {projects.map((project: ProjectsType) => (
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
            <NextLink href={`${project.repoUrl!}`} passHref>
              <Link isExternal>
                <Text>
                  <Icon
                    as={githubIcon}
                    ml={'10px'}
                    boxSize={'2rem'}
                    color={borderColor}
                  />
                </Text>
              </Link>
            </NextLink>
          </HStack>

          {/* Summary */}
          <Text textAlign={'left'}>{project.shortSummary}</Text>
          <Divider />

          {/* Links */}
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
  );
};

export default TabsPanelComponent;
