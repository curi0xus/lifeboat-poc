import React, { useState } from 'react';

import AuthModal from '@/components/Authentication/AuthenticationModal';
import MainDashboard from '@/components/MainDashboard';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const [state, setState] = useState<{
    address?: string;
    error?: Error;
    loading?: boolean;
  }>({});

  // Fetch user when:
  React.useEffect(() => {
    const handler = async () => {
      try {
        const res = await fetch('/api/user');
        const json = await res.json();
        setState((x) => ({ ...x, address: json.address }));
      } catch (_error) {
        console.log('ERROR: Fetch user failed', _error);
      }
    };
    // 1. page loads
    handler();

    // 2. window is focused (in case user logs out of another window)
    window.addEventListener('focus', handler);
    return () => window.removeEventListener('focus', handler);
  }, []);
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      {state?.address ? (
        <MainDashboard address={state.address} setState={setState} />
      ) : (
        <AuthModal />
      )}
    </Main>
  );
};

export default Index;
