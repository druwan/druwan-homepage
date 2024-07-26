import LayoutGrid from '../components/MainContent/LayoutGrid';
import Presentation from '../components/MainContent/Presentation';
import HeaderComponent from '../components/Header/HeaderComponent';
import Footer from '../components/Footer/Footer';
import Meta from '../components/Meta';
import ProjectsComponent from '../components/MainContent/ProjectsComponent';
import { Container } from '@chakra-ui/react';

const IndexPage = () => {
  return (
    <>
      <Meta
        description={"Christopher Vestman's portfolio website"}
        author={'Christopher Vestman'}
      />

      <Container
        maxH={'container.md'}
        maxW={'container.lg'}
        minW={'375px'}
        centerContent>
        <LayoutGrid>
          <HeaderComponent />
          <Presentation />
          <ProjectsComponent />
          <Footer />
        </LayoutGrid>
      </Container>
    </>
  );
};

export default IndexPage;
