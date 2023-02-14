import React from 'react';
import { useAccount } from 'wagmi';

type SignAndVerifyProps = {
  contentType: number;
};

// TODO:
// sign, verify signature and retrieve user information
const SignAndVerify = ({ contentType }: SignAndVerifyProps) => {
  const { address, isConnected } = useAccount();
  const onVerifyHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };
  return (
    isConnected &&
    !!address &&
    contentType === 3 && (
      <button
        onClick={onVerifyHandler}
        className="text-primary hover:text-primary-focus border-primary ml-1 mt-5 flex w-4/5 flex-row flex-col items-center justify-center rounded-full border bg-white px-4 py-1 py-2 text-lg transition disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-700"
      >
        <span>Verify Ownership of</span>
        <span className="inline-flex flex-row">{address}</span>
      </button>
    )
  );
};

export default SignAndVerify;
