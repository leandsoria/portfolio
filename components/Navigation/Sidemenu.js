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
      setShowBackground('before:scale-[100%!important]');
      setShowItems('flex right-10 opacity-100');
    }
  };

  return (
    <aside
      className={`flex lg:hidden justify-end items-center w-2/3 relative overflow-x-scroll-hidden overflow-y-visible z-20 before:bg-violet-200 before:w-[150vw] before:h-[150vw] before:max-w-[600px] before:max-h-[600px] before:absolute before:right-[0%] before:translate-x-[50%] before:top-[-50%] before:translate-y-[-40%] before:rounded-full before:duration-500 before:origin-top-right before:scale-0 ${showBackground} ease-in-out`}
    >
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
