import React from 'react';

import ConnectWallet from './ConnectWallet';
import LoginAndSignUpButtons from './LogIn';
import VerifyNFT from './VerifyNFT';

type RightHandSideContentProps = {
  contentType: number;
  onForward: React.MouseEventHandler<HTMLButtonElement>;
};

const RightSideContent = ({
  contentType,
  onForward,
}: RightHandSideContentProps) => {
  return (
    <div className="col-span-1 row-span-2 flex h-full w-full flex-col items-center justify-center space-y-3 bg-[#6563e8] sm:col-span-2 sm:row-span-1 sm:space-y-10">
      {contentType === 0 && LoginAndSignUpButtons({ onForward })}
      {contentType === 1 && ConnectWallet({ onForward })}
      {contentType === 2 && VerifyNFT({ onForward })}
      {/* <button className="text-primary hover:text-primary-focus border-primary ml-1 mt-5 flex w-4/5 flex-row flex-col items-center justify-center rounded-full border bg-white px-4 py-1 py-2 text-lg transition disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-700">
        <span>Verify Ownership of</span>
        <span className="inline-flex flex-row">0x6e6e...6B15</span>
      </button> */}
    </div>
  );
};

export default RightSideContent;
