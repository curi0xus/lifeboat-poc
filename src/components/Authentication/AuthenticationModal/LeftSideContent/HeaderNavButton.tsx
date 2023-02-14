import React from 'react';

type HeaderNavButtonProps = {
  contentType: number;
  onBack: React.MouseEventHandler<HTMLButtonElement>;
};

const NAV_BUTTON_TITLES = [
  '',
  'Back',
  'Change Connected Wallet',
  'Change Connected Wallet',
];

const HeaderNavButton = ({ contentType, onBack }: HeaderNavButtonProps) => {
  return (
    <div className="absolute top-4 left-1">
      <button
        onClick={onBack}
        className="hover:text-primary transition-scale flex w-fit cursor-pointer flex-row items-center px-4 text-gray-400 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="h-6 w-6 pr-2"
        >
          <path
            fillRule="evenodd"
            d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
            clipRule="evenodd"
          ></path>
        </svg>
        <p>{NAV_BUTTON_TITLES[contentType]}</p>
      </button>
    </div>
  );
};

export default HeaderNavButton;
