import React, { useState } from 'react';

import LeftSideContent from './LeftSideContent';
import ModalContainer from './ModalContainer';
import RightSideContent from './RightSideContent';

const AuthModal = () => {
  const [contentType, setContentType] = useState(0);

  const initBackHandler =
    (index: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      setContentType(index);
    };

  const initForwardHandler =
    (index: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      setContentType(index);
    };
  return (
    <ModalContainer>
      <>
        <LeftSideContent
          initBackHandler={initBackHandler}
          contentType={contentType}
        />
        <RightSideContent
          initForwardHandler={initForwardHandler}
          contentType={contentType}
        />
      </>
    </ModalContainer>
  );
};

export default AuthModal;
