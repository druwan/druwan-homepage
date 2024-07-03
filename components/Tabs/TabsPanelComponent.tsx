import {
  Divider,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Spacer,
  Stack,
  TabPanel,
  TabPanels,
  Text,
} from '@chakra-ui/react';
import { ProjectsType } from '../../utils/types';
import NextLink from 'next/link';
import { githubIcon } from '../SVGIcons';
import CustomIcons from '../CustomIcons';

const TabsPanelComponent = ({ projects }: { projects: ProjectsType[] }) => {
  return (
    <TabPanels>
      {projects.map((project: ProjectsType) => (
        <TabPanel key={project.id}>
          {/* Image */}
          <Image
            src={`${project.imageUrl}`}
            alt={`Image of ${project.title}`}
            border={'1px'}
            // borderColor={textColor}
            borderRadius={'2xl'}
          />

          {/* Title */}
          <HStack mt={8}>
            <Heading
            //  fontSize={headerFontSizes} textColor={textColor}
            >
              {project.title}
            </Heading>
            <Spacer />

            <NextLink href={`${project.repoUrl!}`} passHref>
              <Link isExternal>
                <Text
                // fontSize={textFontSizes}
                >
                  <Icon
                    as={githubIcon}
                    ml={'10px'}
                    // color={textColor}
                    boxSize={'2.5rem'}
                  />
                </Text>
              </Link>
            </NextLink>
          </HStack>

          {/* Summary */}
          <Stack mt={3}>
            <Text
              // fontSize={textFontSizes}
              textAlign={'left'}>
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
  );
};

export default TabsPanelComponent;
