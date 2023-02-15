import React from 'react';

type MainDashboardType = {
  address: string;
  setState: React.Dispatch<React.SetStateAction<{}>>;
};

const MainDashboard = ({ address, setState }: MainDashboardType) => {
  return (
    <div>
      <div>Signed in as {address}</div>
      <button
        onClick={async () => {
          await fetch('/api/logout');
          setState({});
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default MainDashboard;
