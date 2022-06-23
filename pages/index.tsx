import type { NextPage } from 'next';
import { HeaderRight, PageHeader, PageTitle } from '../components/styled-components/Header';

const Home: NextPage = () => {
  return (
    <div>
      <PageHeader>
        <PageTitle>Platform Dashboard</PageTitle>
        <HeaderRight>
          <button>Edit</button>
          <button>Edit</button>
        </HeaderRight>
      </PageHeader>
    </div>
  );
};

export default Home;
