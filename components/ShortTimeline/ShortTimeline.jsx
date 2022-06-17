import { Box, List } from '@chakra-ui/react';
import styled from '@emotion/styled';

const BioSection = styled(Box)`
  padding-left: 3em;
  text-indent: -3em;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`;

const ShortTimeline = () => {
  return (
    <List spacing={3}>
      <BioSection>
        <BioYear>2022</BioYear>
        Currently employed as an IT-consultant at Experis Sweden after
        completing their full-stack developer program in Java
      </BioSection>
      <BioSection>
        <BioYear>2021</BioYear>
        Completed the Master&apos;s programme in Space Engineering at Luleå
        University of Technology with a specialisation in Aerospace Engineering.
      </BioSection>
      <BioSection>
        <BioYear>1992</BioYear>
        Born in Trelleborg, Sweden.
      </BioSection>
    </List>
  );
};

export default ShortTimeline;
