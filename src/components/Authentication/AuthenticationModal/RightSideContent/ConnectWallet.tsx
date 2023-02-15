import { multicall } from '@wagmi/core';
import type { AbiError, AbiEvent, AbiFunction, Narrow } from 'abitype';
import React from 'react';
import type { UseContractReadConfig } from 'wagmi';
import { useAccount, useConnect, useContractRead } from 'wagmi';

import LifeboatAbi from '../../../../abi/lifeboat.abi.json';

const lifeboatContract: UseContractReadConfig = {
  address: '0x00aFaAa9635c9c40015eC31f3f2bB1B10c766e58',
  abi: LifeboatAbi as Narrow<AbiFunction | AbiEvent | AbiError>[],
};

type ConnectWalletButtonsProps = {
  contentType: number;
  initForwardHandler: Function;
};

const ConnectWalletButtons = ({
  initForwardHandler,
  contentType,
}: ConnectWalletButtonsProps) => {
  const { data: totalLifeboatSupply } = useContractRead({
    ...lifeboatContract,
    watch: true,
    functionName: 'totalSupply',
  });

  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();

  const onMetaMaskClickHandler = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (!isConnected) {
      await connect({ connector: connectors[0] });
    }

    const multicalls = [];

    if (
      totalLifeboatSupply?.toString() &&
      +totalLifeboatSupply.toString() > 0
    ) {
      for (let i = 1; i < +totalLifeboatSupply!.toString(); i += 1) {
        multicalls.push({
          ...lifeboatContract,
          functionName: 'ownerOf',
          args: [i],
        } as UseContractReadConfig);
      }

      const data = await multicall({
        // @ts-ignore
        contracts: multicalls,
      });

      const contentIndexToShowNext = data.indexOf(address) > -1 ? 3 : 2;
      initForwardHandler(contentIndexToShowNext)(e);
    }
  };
  const onCoinbaseClickHandler = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    connect({ connector: connectors[1] });
    initForwardHandler(3)(e);
  };
  const onWalletConnectClickHandler = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    connect({ connector: connectors[2] });
    initForwardHandler(3)(e);
  };
  return (
    contentType === 1 && (
      <>
        {connectors?.[0]?.ready && (
          <button
            disabled={!connectors[0].ready}
            onClick={onMetaMaskClickHandler}
            className="ml-1 mt-0 flex w-4/5 flex-row items-center justify-center rounded-full border bg-white px-4 py-2 text-lg transition disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-700 sm:flex"
          >
            <img
              className="mr-2 h-9 w-9 rounded-full p-1"
              src="./static/media/metamask-fox.d8733638.svg"
              alt="Metamask logo"
            />
            {connectors[0].name}
          </button>
        )}
        {connectors?.[1]?.ready && (
          <button
            disabled={!connectors[1].ready}
            onClick={onCoinbaseClickHandler}
            className="ml-1 mt-0 flex w-4/5 flex-row items-center justify-center rounded-full border bg-white px-4 py-1 text-lg transition disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-700 sm:flex"
          >
            <img
              className="mr-2 h-9 w-9 rounded-full p-1"
              src="./static/media/coinbase-wallet-dot.ab288c9e.svg"
              alt="Coinbase Wallet logo"
            />
            {connectors[1].name}
          </button>
        )}
        {connectors?.[2]?.ready && (
          <button
            disabled={!connectors[2].ready}
            onClick={onWalletConnectClickHandler}
            className="ml-1 mt-0 flex w-4/5 flex-row items-center justify-center rounded-full border bg-white px-4 py-1 text-lg transition disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-700"
          >
            <img
              className="mr-2 h-9 w-9 rounded-full p-1"
              src="./static/media/walletconnect-logo.dfa25e47.svg"
              alt="WalletConnect logo"
            />
            {connectors[2].name}
          </button>
        )}
      </>
    )
  );
};

export default ConnectWalletButtons;
