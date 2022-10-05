import { useState } from 'react';
import NavbarItem from './NavbarItems';
import HamburgerIcon from '../UI/HamburguerIcon';

const Sidemenu = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [showBackground, setShowBackground] = useState('');
  const [showItems, setShowItems] = useState('hidden');
  const hamburgerStateHandler = (data) => {
    setHamburgerActive(data);
    if (!hamburgerActive) {
      setShowBackground('');
      setShowItems('right-[-100%] opacity-0');
    } else {
      setShowBackground('scale-[100%!important]');
      setShowItems('flex right-10 opacity-100');
    }
  };

  return (
    <aside
      className={`flex lg:hidden justify-end items-center w-2/3 relative z-20 `}
    >
      <div
        className={`bg-violet-200 w-[150vw] h-[150vw] max-w-[600px] max-h-[600px] absolute right-[0%] translate-x-[50%] top-[-50%] translate-y-[-40%] rounded-full duration-300 origin-top-right scale-0 ${showBackground} ease-in-out`}
      ></div>
      <div>
        <HamburgerIcon hamburgerState={hamburgerStateHandler} />
        <ul
          className={`flex flex-col absolute top-10 duration-500 ${showItems} transition-all ease-in-out`}
        >
          <NavbarItem urlLink="#about">About me</NavbarItem>
          <NavbarItem urlLink="#projects">Projects</NavbarItem>
          <NavbarItem urlLink="#experience">Experience</NavbarItem>
          <NavbarItem urlLink="#connect">Let&apos;s Connect!</NavbarItem>
        </ul>
      </div>
    </aside>
  );
};

export default Sidemenu;
