import React from 'react';

import BuyPass from './BuyPass';
import ConnectWallet from './ConnectWallet';
import LoginAndSignUpButtons from './LogIn';
import SignAndVerify from './SignAndVerify';

type RightHandSideContentProps = {
  contentType: number;
  initForwardHandler: Function;
};

const RightSideContent = ({
  contentType,
  initForwardHandler,
}: RightHandSideContentProps) => {
  return (
    <div className="col-span-1 row-span-2 flex h-full w-full flex-col items-center justify-center space-y-3 bg-[#6563e8] sm:col-span-2 sm:row-span-1 sm:space-y-10">
      {LoginAndSignUpButtons({ onForward: initForwardHandler(1), contentType })}
      {ConnectWallet({ initForwardHandler, contentType })}
      {BuyPass({ contentType })}
      {SignAndVerify({ contentType })}
    </div>
  );
};

export default RightSideContent;
