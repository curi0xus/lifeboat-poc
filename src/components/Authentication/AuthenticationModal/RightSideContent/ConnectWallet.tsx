import React from 'react';

type ConnectWalletButtonsProps = {
  onForward: React.MouseEventHandler<HTMLButtonElement>;
};

const ConnectWalletButtons = ({ onForward }: ConnectWalletButtonsProps) => {
  const onMetaMaskClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    onForward(e);
  };
  const onCoinbaseClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    onForward(e);
  };
  const onWalletConnectClickHandler = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    onForward(e);
  };
  return (
    <>
      <button
        onClick={onMetaMaskClickHandler}
        className="text-primary hover:text-primary-focus border-primary ml-1 mt-0 flex hidden w-4/5 flex-row items-center justify-center rounded-full border bg-white px-4 py-1 py-2 text-lg transition disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-700 sm:flex"
      >
        <img
          className="mr-2 h-9 w-9 rounded-full p-1"
          src="./static/media/metamask-fox.d8733638.svg"
          alt="Metamask logo"
        />
        Metamask
      </button>
      <button
        onClick={onCoinbaseClickHandler}
        className="text-primary hover:text-primary-focus border-primary ml-1 mt-0 flex hidden w-4/5 flex-row items-center justify-center rounded-full border bg-white px-4 py-1 py-2 text-lg transition disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-700 sm:flex"
      >
        <img
          className="mr-2 h-9 w-9 rounded-full p-1"
          src="./static/media/coinbase-wallet-dot.ab288c9e.svg"
          alt="Coinbase Wallet logo"
        />
        Coinbase Wallet
      </button>
      <button
        onClick={onWalletConnectClickHandler}
        className="text-primary hover:text-primary-focus border-primary ml-1 mt-0 flex w-4/5 flex-row items-center justify-center rounded-full border bg-white px-4 py-1 py-2 text-lg transition disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-700"
      >
        <img
          className="mr-2 h-9 w-9 rounded-full p-1"
          src="./static/media/walletconnect-logo.dfa25e47.svg"
          alt="WalletConnect logo"
        />
        WalletConnect
      </button>
    </>
  );
};

export default ConnectWalletButtons;
