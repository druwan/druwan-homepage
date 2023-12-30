import Layout from '../components/MainContent/Layout';
import MainContent from '../components/MainContent/MainContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Christopher Vestman',
};

export default function Page() {
  return (
    <>
      <Layout>
        <MainContent />
      </Layout>
    </>
  );
}
