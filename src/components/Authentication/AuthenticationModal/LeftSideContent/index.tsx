import React from 'react';

import Content from './Content';
import Header from './Header';
import HeaderNavButton from './HeaderNavButton';
import Subheader from './Subheader';

type LeftHandSideContentProps = {
  contentType: number;
  onBack: React.MouseEventHandler<HTMLButtonElement>;
};

const LeftHandSideContent = ({
  contentType,
  onBack,
}: LeftHandSideContentProps) => {
  return (
    <div className="text-normal space-between col-span-1 row-span-3 flex h-full w-full flex-col justify-center bg-transparent sm:col-span-3 sm:row-span-1">
      {contentType !== 0 && (
        <HeaderNavButton onBack={onBack} contentType={contentType} />
      )}
      <div className="absolute top-4 ml-8"></div>
      <div className="px-10">
        <div>
          <Header contentType={contentType} />
          <div className="mb-1 space-y-2">
            <Subheader contentType={contentType} />
            <Content contentType={contentType} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftHandSideContent;
//
