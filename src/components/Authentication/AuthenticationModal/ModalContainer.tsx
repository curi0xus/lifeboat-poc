import React from 'react';

import Footer from './Footer';

type Props = {
  children?: React.ReactNode;
};

const ModalContainer = ({ children }: Props) => {
  return (
    <div
      className="fixed inset-0 z-10 select-none overflow-y-auto"
      id="headlessui-dialog-:r4i:"
      role="dialog"
      aria-modal="true"
    >
      <div className=" flex min-h-screen place-items-center items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 opacity-100 transition-opacity"
          id="headlessui-dialog-overlay-:r4k:"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:h-screen sm:align-middle"
          aria-hidden="true"
        >
          ​
        </span>
        <div className="h-9/10 sm:w-7/8 relative inline-block min-h-[70vh] w-11/12 translate-y-0 overflow-auto rounded-lg bg-white text-left align-bottom opacity-100 shadow-xl transition-all sm:w-4/5 sm:scale-100 sm:align-middle md:w-2/3 md:w-4/5 xl:w-2/3 2xl:w-1/2 2xl:w-2/3">
          <div className="grid h-full min-h-[70vh] w-full grid-cols-1 grid-rows-5 sm:grid-cols-5 sm:grid-rows-1">
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ModalContainer;
