import React from 'react';

type LoginAndSignUpButtonsProps = {
  onForward: React.MouseEventHandler<HTMLButtonElement>;
};

const LoginAndSignUpButtons = ({ onForward }: LoginAndSignUpButtonsProps) => {
  const signInClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    onForward(e);
  };
  const signUpClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    onForward(e);
  };
  return (
    <>
      <button
        onClick={signInClickHandler}
        className="text-primary hover:text-primary-focus border-primary ml-1 mt-5 flex w-4/5 flex-row items-center justify-center rounded-full border bg-white px-4 py-1 py-2 text-lg transition disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-700"
      >
        Log In
      </button>
      <button
        onClick={signUpClickHandler}
        className="bg-secondary hover:bg-secondary-focus text-secondary-content ml-1 mt-5 flex w-4/5 flex-row items-center justify-center rounded-full px-4 py-1 py-2 text-lg transition disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-700"
      >
        Sign Up
      </button>
    </>
  );
};

export default LoginAndSignUpButtons;
