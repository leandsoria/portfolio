import { useState, useEffect } from 'react';

const HamburgerIcon = ({ hamburgerState, onClick, scrolled }) => {
  return (
    <button
      className={`group flex flex-col justify-center w-[30px] h-8 cursor-pointer relative z-30 `}
      onClick={onClick}
    >
      <span
        className={`block h-[4px] w-full rounded-[10px]  translate-y-[-6px] ease-in-out duration-300 origin-top-right  ${
          hamburgerState ? 'rotate-[-45deg]' : ''
        } ${scrolled && !hamburgerState ? 'bg-white' : 'bg-violet-800'}`}
      ></span>
      <span
        className={`block h-[4px] w-full rounded-[10px] bg-violet-800 translate-y-0 ease-in-out duration-200 origin-center ${
          hamburgerState ? 'scale-0' : ''
        }  ${scrolled ? 'bg-white' : 'bg-violet-800'}`}
      ></span>
      <span
        className={`block h-[4px] w-full rounded-[10px] bg-violet-800 translate-y-[6px] ease-in-out duration-300 origin-bottom-right  ${
          hamburgerState ? 'rotate-45' : ''
        }  ${scrolled && !hamburgerState ? 'bg-white' : 'bg-violet-800'}`}
      ></span>
    </button>
  );
};

export default HamburgerIcon;
