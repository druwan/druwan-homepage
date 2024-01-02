import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import fs from 'fs/promises';
import { GetServerSideProps } from 'next';
import path from 'path';

interface FileContent {
  fileName: string;
  content: string;
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const filesToRead = ['autoexec.cfg', 'warmup.cfg'];
    const fileContents: FileContent[] = [];

    for (const fileName of filesToRead) {
      const cfgFilePath = path.join(process.cwd(), 'public', fileName);
      const content = await fs.readFile(cfgFilePath, 'utf-8');
      fileContents.push({ fileName, content });
    }

    return {
      props: {
        fileContents,
      },
    };
  } catch (error) {
    console.error('Error reading config files:', error);
    return {
      props: {
        fileConte: [
          { fileName: 'Error', content: 'Error reading config files' },
        ],
      },
    };
  }
};

export default function CS({ fileContents }: { fileContents: FileContent[] }) {
  return (
    <Box>
      <Flex justify={'center'}>
        <Tabs>
          <TabList>
            {fileContents.map(({ fileName, content }) => (
              <Tab key={fileName}>{fileName}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {fileContents.map(({ fileName, content }) => (
              <TabPanel key={fileName}>
                <pre>{content}</pre>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Flex>
    </Box>
  );
}
