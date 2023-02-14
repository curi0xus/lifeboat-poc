import React from 'react';

const Footer = () => {
  return (
    <a
      href="https://probablysomething.io"
      target="_blank"
      className="hidden cursor-pointer flex-row items-center text-white sm:absolute sm:bottom-5 sm:left-10 sm:flex sm:text-gray-400"
      rel="noreferrer"
    >
      <img className="h-6 w-6" src="./static/media/ps_core_logo.bdc4f3b6.svg" />
      <p className="ml-2 text-xs">A Probably Something Project</p>
    </a>
  );
};

export default Footer;
