import { Container, Heading } from '@chakra-ui/react';
import React from 'react';
import Section from './Section';
import Contact from './Contact/Contact';
import ShortTimeline from './ShortTimeline/ShortTimeline';
import About from './About/About';
import Projects from './Projects/Projects';

const Content = () => {
  return (
    <Container>
      <Section delay={0.2}>
        <Heading as='h2' size={'lg'}>
          About
        </Heading>
        <About />
      </Section>

      <Section delay={0.2}>
        <Heading as='h2' size={'lg'}>
          Projects
        </Heading>
        <Projects />
      </Section>

      {/* Short Timeline */}
      <Section delay={0.2}>
        <Heading as='h2' size={'lg'}>
          Timeline
        </Heading>
        <ShortTimeline />
      </Section>

      {/* Contact me */}
      <Section delay={0.2}>
        <Heading as='h2' size={'lg'}>
          Contact
        </Heading>
        <Contact />
      </Section>
    </Container>
  );
};

export default Content;
