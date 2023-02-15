import React from 'react';

type HeaderProps = {
  contentType: number;
};

const HEADER_CONTENT_LIST = [
  'Stop drowning in announcements just to keep up with your NFTs.',
  "Let's connect your web3 wallet.",
  'Uh, oh. Your connected wallest isn&apost eligible for Lifeboat.',
  'Sign the message to log in',
];

const Header = ({ contentType }: HeaderProps) => {
  const headerContent = HEADER_CONTENT_LIST[contentType];
  return (
    <div className="mb-1 space-y-2">
      <span className="text-3xl font-bold">
        <span className="hidden sm:inline">{headerContent}</span>
      </span>
    </div>
  );
};

export default Header;
