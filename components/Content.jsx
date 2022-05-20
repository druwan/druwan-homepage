import {
  Box,
  Button,
  chakra,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { BioSection, BioYear } from './Bio';
import Paragraph from './Paragraph';
import Section from './Section';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { EmailIcon } from '@chakra-ui/icons';
const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
});

const Content = () => {
  return (
    <Container>
      <Box
        borderRadius='lg'
        mb={6}
        p={3}
        textAlign='center'
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.300')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a full-stack developer and aerospace engineer based in
        southern Sweden!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as='h2' variant='page-title'>
            Christopher Vestman
          </Heading>
          <p>Tech geek / developer / engineer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign='center'
        >
          <Box
            borderColor='whiteAlpha.800'
            borderWidth={2}
            borderStyle='solid'
            w='100px'
            h='100px'
            display='inline-block'
            borderRadius='full'
            overflow='hidden'
          >
            <ProfileImage
              src='/images/Chris.jpg'
              alt='profile image'
              borderRadius='full'
              width='100%'
              height='100%'
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as='h3' variant='section-title'>
          Work
        </Heading>
        <Paragraph>
          Christopher is an Aerospace Engineer and a full-stack developer based
          in Trelleborg with a passion for building digital services. When not
          online, he loves hanging out with his friends and playing guitar.
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
          University of Technology.
        </BioSection>
        <BioSection>
          <BioYear>2022 -</BioYear>
          Completed full-stack developer program and employed as an
          IT-consultant as Experis Sweden
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
                contact@christophervestman.dev
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
                druwan
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
                christophervestman
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  );
};

export default Content;
