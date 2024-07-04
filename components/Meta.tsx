import Head from 'next/head';

interface MetaProps {
  description: string;
  author: string;
}

const Meta: React.FC<MetaProps> = ({ description, author }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content={author} />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta property="og:site_name" content={description} />
      <meta property="og:title" content={author} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="title" content={author} />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Aerospace Engineer, Fullstack Developer, Swe-Lankan, Master of Science Space Engineering, Space Engineering"
      />
      <meta name="robots" content="index, follow" />
      <title>{author}</title>
    </Head>
  );
};

export default Meta;
