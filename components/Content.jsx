import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { BioSection, BioYear } from './Bio';
import Paragraph from './Paragraph';
import Section from './Section';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { EmailIcon } from '@chakra-ui/icons';

const Content = () => {
  return (
    <Container>
      <Box
        borderRadius='lg'
        mb={6}
        p={3}
        textAlign='center'
        bg={useColorModeValue('gray.100', 'whiteAlpha.300')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hi! I&apos;m a full-stack developer and aerospace engineer!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as='h2' variant='page-title'>
            Christopher Vestman
          </Heading>
          <p>Engineer / developer / food geek </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign='center'
        ></Box>
      </Box>

      <Section delay={0.1}>
        <Heading as='h3' variant='section-title'>
          Work
        </Heading>
        <Paragraph>
          Christopher is an Aerospace Engineer and a full-stack developer based
          in Trelleborg with a passion for building digital services. When not
          online, he plays guitar and likes to cook.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as='h3' variant='section-title'>
          Bio
        </Heading>
        <BioSection>
          <BioYear>1992</BioYear>
          Born in Trelleborg, Sweden.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Completed the Master&apos;s program in Space Engineering at Luleå
          University of Technology with a specialisation in Aerospace
          Engineering.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Currently employed as an IT-consultant at Experis Sweden after
          completing their full-stack developer program in Java
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as='h3' variant='section-title'>
          Contact
        </Heading>
        <List>
          <ListItem>
            <Link href='mailto:contact@christophervestman.dev' target='_blank'>
              <Button
                variant='ghost'
                colorScheme='teal'
                leftIcon={<EmailIcon />}
              >
                Email: contact@christophervestman.dev
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href='https://github.com/druwan' target='_blank'>
              <Button
                variant='ghost'
                colorScheme='teal'
                leftIcon={<FaGithub />}
              >
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
      </Section>
    </Container>
  );
};

export default Content;
