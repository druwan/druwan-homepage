import { EmailIcon } from '@chakra-ui/icons';
import { Button, Link, List, ListItem } from '@chakra-ui/react';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      <List>
        <ListItem>
          <Link href='mailto:contact@christophervestman.dev' target='_blank'>
            <Button variant='ghost' colorScheme='teal' leftIcon={<EmailIcon />}>
              Email: contact@christophervestman.dev
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link href='https://github.com/druwan' target='_blank'>
            <Button variant='ghost' colorScheme='teal' leftIcon={<FaGithub />}>
              GitHub: druwan
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href='https://linkedin.com/in/christophervestman/'
            target='_blank'
          >
            <Button
              variant='ghost'
              colorScheme='teal'
              leftIcon={<FaLinkedin />}
            >
              LinkedIn: christophervestman
            </Button>
          </Link>
        </ListItem>
      </List>
    </>
  );
};

export default Contact;
