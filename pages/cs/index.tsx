import { Box, Heading, Stack } from '@chakra-ui/react';
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
    <Stack m="8">
      {fileContents.map(({ fileName, content }) => (
        <Box key={fileName}>
          <Heading>{fileName}</Heading>
          <pre>{content}</pre>
        </Box>
      ))}
    </Stack>
  );
}
