import React from 'react';
import {
  Box,
  Image,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  useColorMode,
  HStack,
  Link,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Projects = () => {
  const { colorMode } = useColorMode();

  const colorScheme = colorMode === 'light' ? 'black' : 'personalOrange';

  return (
    <Tabs variant={'line'} colorScheme={colorScheme} isFitted defaultIndex={0}>
      <TabList>
        <Tab>Lunch Reservations</Tab>
        <Tab>Humans vs Zombies!</Tab>
      </TabList>

      <TabPanels>
        {/* 1st Panel */}
        <TabPanel>
          <Box>
            <Image
              src='/images/Lunch-Reservations.png'
              alt='Preview of Lunch Reservations'
              boxSize={'cover'}
            />
          </Box>
          <Text>
            <em>In Progress</em>
            <br />
            Application where customers can select a timeslot for their takeaway
            meal. This enables the customers and the kitchen to better plan out
            their day.
          </Text>
          <br />
          <Flex>
            <Link
              href='https://github.com/druwan/lunch-reservations'
              isExternal
            >
              GitHub
              <ExternalLinkIcon mx={'px'} />
            </Link>
          </Flex>
        </TabPanel>

        {/* 2nd Project */}
        <TabPanel>
          <Box>
            <Image
              src='/images/hvz.png'
              alt='Preview of Humans vs Zombies'
              boxSize={'cover'}
            />
          </Box>
          <br />
          <Text>
            This project is about creating a full stack application for the
            tag-like game Human vs Zombies. <br /> We were tasked with designing
            and implementing a system that will enable players to manage their
            own state in accordance with the rules of the game and leave the
            administrators free to focus on improving the game itself. <br /> It
            is one of the final projects for the fullstack course on noroff.
          </Text>
          <br />
          <Flex>
            <Link
              href='https://gitlab.com/druwan/se-java-hvz-frontend'
              isExternal
            >
              GitLab <ExternalLinkIcon mx={'2px'} />
            </Link>
            <Spacer />
            <Link href='https://se-java-hvz-frontend.netlify.app' isExternal>
              Live Demonstration <ExternalLinkIcon mx={'2px'} />
            </Link>
          </Flex>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Projects;
