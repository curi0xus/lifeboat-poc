import React from 'react';

type VerifyNFTButtonProps = {
  onForward: React.MouseEventHandler<HTMLButtonElement>;
};

const VerifyNFTButton = ({ onForward }: VerifyNFTButtonProps) => {
  const onVerifyHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onForward(e);
  };
  return (
    <button
      onClick={onVerifyHandler}
      className="text-primary hover:text-primary-focus border-primary ml-1 mt-5 flex w-4/5 flex-row flex-col items-center justify-center rounded-full border bg-white px-4 py-1 py-2 text-lg transition disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-700"
    >
      <span>Verify Ownership of</span>
      <span className="inline-flex flex-row">0x6e6e...6B15</span>
    </button>
  );
};

export default VerifyNFTButton;
