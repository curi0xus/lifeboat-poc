import AuthModal from '@/components/Authentication/AuthenticationModal';
import MainDashboard from '@/components/MainDashboard';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      {true ? <AuthModal /> : <MainDashboard />}
    </Main>
  );
};

export default Index;
