import React from 'react';

type ContentProps = {
  contentType: number;
};

const CONTENT_LIST = [
  <>Lifeboat is in beta and only available to holders of select collections.</>,
  <>
    Lifeboat requires you to connect a wallet so we can tailor updates to your
    holdings and verify you have access to the platform.
  </>,
  <>
    If you own a Genesis Pass or Lifeboat Pass in another wallet, you&apos;ll
    need to transfer it to this wallet or register with your own wallet to
    create an account.
  </>,
  <>
    Signing costs you no fees and does not issue a transaction on the
    Blockchain. Learn more about our approach to security{' '}
    <a
      className="text-primary hover:text-primary-focus"
      href="https://twitter.com/0xQuit/status/1567528224460271617"
    >
      here
    </a>
    .
  </>,
];

const Content = ({ contentType }: ContentProps) => {
  return <p className="mt-2 pb-2 text-gray-400">{CONTENT_LIST[contentType]}</p>;
};

export default Content;
