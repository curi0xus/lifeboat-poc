import React, { useState } from 'react';

import LeftSideContent from './LeftSideContent';
import ModalContainer from './ModalContainer';
import RightSideContent from './RightSideContent';

const AuthModal = () => {
  const [contentType, setContentType] = useState(0);

  const onBackHandler =
    (index: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      const toIndex = Math.max(0, index - 1);
      setContentType(toIndex);
    };

  const onForwardHandler =
    (index: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      const toIndex = Math.min(2, index + 1);
      setContentType(toIndex);
    };
  return (
    <ModalContainer>
      <>
        <LeftSideContent
          onBack={onBackHandler(contentType)}
          contentType={contentType}
        />
        <RightSideContent
          onForward={onForwardHandler(contentType)}
          contentType={contentType}
        />
      </>
    </ModalContainer>
  );
};

export default AuthModal;
