import React from 'react';

type SubheaderProps = {
  contentType: number;
};

const SUBHEADER_CONTENT_LIST = [
  'Meet Lifeboat.',
  '',
  'This verifies ownership of your wallet',
];

const Subheader = ({ contentType }: SubheaderProps) => {
  const subheaderContent = SUBHEADER_CONTENT_LIST[contentType];
  return <span className="text-xl font-bold">{subheaderContent}</span>;
};

export default Subheader;
