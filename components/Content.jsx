import { Container, Heading } from '@chakra-ui/react';
import React from 'react';
import Section from './Section';
import Contact from './Contact/Contact';
import ShortTimeline from './ShortTimeline/ShortTimeline';
import About from './About/About';

const Content = () => {
  return (
    <Container>
      <Section delay={0.2}>
        <Heading as='h3' variant='section-title'>
          Christopher Vestman
        </Heading>
        <About />
      </Section>

      <Section delay={0.2}>
        <Heading as='h3' variant='section-title'>
          Projects
        </Heading>
      </Section>

      {/* Short Timeline */}
      <Section delay={0.2}>
        <Heading as='h3' variant='section-title'>
          Timeline
        </Heading>
        <ShortTimeline />
      </Section>

      {/* Contact me */}
      <Section delay={0.2}>
        <Heading as='h3' variant='section-title'>
          Contact
        </Heading>
        <Contact />
      </Section>
    </Container>
  );
};

export default Content;
