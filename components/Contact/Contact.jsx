import { EmailIcon } from '@chakra-ui/icons';
import {
  Button,
  Link,
  List,
  ListItem,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const { colorMode } = useColorMode();
  const colorScheme = colorMode === 'light' ? 'black' : 'personalOrange';

  return (
    <>
      <List spacing={3}>
        <ListItem>
          <Link href='mailto:contact@christophervestman.dev' target='_blank'>
            <Button
              variant={'link'}
              colorScheme={colorScheme}
              leftIcon={<EmailIcon />}
              size={'lg'}
            >
              <Text fontSize={'sm'}>contact@christophervestman.dev</Text>
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link href='https://github.com/druwan' target='_blank'>
            <Button
              variant={'link'}
              colorScheme={colorScheme}
              leftIcon={<FaGithub />}
              size={'lg'}
            >
              <Text fontSize={'sm'}>druwan</Text>
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href='https://linkedin.com/in/christophervestman/'
            target='_blank'
          >
            <Button
              variant={'link'}
              colorScheme={colorScheme}
              leftIcon={<FaLinkedin />}
              size={'lg'}
            >
              <Text fontSize={'sm'}>christophervestman</Text>
            </Button>
          </Link>
        </ListItem>
      </List>
    </>
  );
};

export default Contact;
