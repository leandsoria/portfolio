import Github from '../../public/icons/svg/github_social_icon.svg';
import LinkedIn from '../../public/icons/svg/linkedin_social_icon.svg';
import NavbarItem from './NavbarItems';
import Sidemenu from './Sidemenu';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { GITHUB_URL, LINKEDIN_URL } from '../data';
import Link from 'next/link';
import ConnectNavButton from '../UI/ConnectNavButton';
import { NavbarLeft } from './Navbar/NavbarLeft';
import NavbarRight from './Navbar/NavbarRight';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`flex flex-row w-full justify-between lg:justify-around px-[6%] z-[900] fixed ${
        isScrolled ? 'py-2 bg-violet-900' : 'py-6'
      } transition-all duration-300`}
    >
      <NavbarLeft scrolled={isScrolled} />

      <NavbarRight scrolled={isScrolled} />
      <Sidemenu scrolled={isScrolled} />
    </nav>
  );
};

export default Navbar;
