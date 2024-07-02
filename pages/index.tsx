import Head from 'next/head';
import Layout from '../components/MainContent/Layout';
import Presentation from '../components/MainContent/Presentation';
import HeaderComponent from '../components/Header/HeaderComponent';
import Footer from '../components/Footer/Footer';

const IndexPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Christopher Vestman" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta property="og:site_name" content="Christopher Vestman" />
        <meta property="og:title" content="Christopher Vestman" />
        <meta property="og:type" content="website" />
        <meta name="title" content="Christopher Vestman" />
        <meta
          name="description"
          content="Christopher Vestman's portfolio website"
        />
        <meta
          name="keywords"
          content="Aerospace Engineer, Fullstack Developer, Swe-Lankan, Master of Science Space Engineering, Space Engineering"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="30 days" />
        <title>Christopher Vestman</title>
      </Head>
      <Layout>
        <HeaderComponent />
        <Presentation />
        <Footer />
      </Layout>
    </>
  );
};

export default IndexPage;
