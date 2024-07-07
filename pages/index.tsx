import LayoutComponent from '../components/MainContent/LayoutComponent';
import Presentation from '../components/MainContent/Presentation';
import HeaderComponent from '../components/Header/HeaderComponent';
import Footer from '../components/Footer/Footer';
import Meta from '../components/Meta';

const IndexPage = () => {
  return (
    <>
      <Meta
        description={"Christopher Vestman's portfolio website"}
        author={'Christopher Vestman'}
      />
      <LayoutComponent>
        <HeaderComponent />
        <Presentation />
        <Footer />
      </LayoutComponent>
    </>
  );
};

export default IndexPage;
