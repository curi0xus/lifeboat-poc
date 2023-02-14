import React from 'react';

type BuyPassButtonsProps = {
  contentType: number;
};
const GENESIS_PASS_URL = 'https://opensea.io/collection/probably-something';
const LIFTBOAT_PASS_URL = 'https://opensea.io/collection/lifeboat-passes';

const BuyPassButtons = ({ contentType }: BuyPassButtonsProps) => {
  const viewGenesisClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    window.open(GENESIS_PASS_URL, '_blank');
  };
  const viewLifeboatClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    window.open(LIFTBOAT_PASS_URL, '_blank');
  };
  return (
    contentType === 2 && (
      <div className="flex w-10/12 flex-col space-y-3 text-center text-white">
        <div className="mb-1 space-y-2 font-bold">
          <span className="text-xl font-bold">
            Buy a pass to gain beta access.
          </span>
        </div>
        <div>
          <span className="text-italic text-sm text-gray-100">
            Access all Probably Something Projects.
          </span>
          <button
            onClick={viewGenesisClickHandler}
            className="bg-secondary hover:bg-secondary-focus text-secondary-content ml-1 mt-1 flex w-full flex-row items-center justify-center rounded-full px-4 py-1 py-2 text-lg text-white transition disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-700"
          >
            View Genesis Passes
          </button>
        </div>
        <div>
          <span className="text-italic text-sm text-gray-100">
            Just access Lifeboat.
          </span>
          <button
            onClick={viewLifeboatClickHandler}
            className="text-primary hover:text-primary-focus border-primary ml-1 mt-1 flex w-full flex-row items-center justify-center rounded-full border bg-white px-4 py-1 py-2 text-lg transition disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-700"
          >
            View Lifeboat Passes
          </button>
        </div>
      </div>
    )
  );
};

export default BuyPassButtons;
