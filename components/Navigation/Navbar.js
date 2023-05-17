import IconSocial from '../UI/IconSocial';
import Github from '../../public/icons/svg/github_social_icon.svg';
import LinkedIn from '../../public/icons/svg/linkedin_social_icon.svg';
import NavbarItem from './NavbarItems';
import Sidemenu from './Sidemenu';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { GITHUB_URL, LINKEDIN_URL } from '../data';

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
        isScrolled ? 'py-2 bg-gray-100' : 'py-6'
      } transition-all duration-300`}
    >
      <div className="w-2/3 lg:w-32 relative ">
        <div className={`w-28 h-28 `}>
          <Image
            src="/logo/lean-logo_dark.png"
            alt="Leandro Soria's Logo"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            priority={true}
          />
        </div>
      </div>
      <Sidemenu />
      <div className="hidden lg:flex justify-end items-center w-2/3">
        <ul className="flex ">
          <NavbarItem urlLink="#about">About me</NavbarItem>
          <NavbarItem urlLink="#projects">Projects</NavbarItem>
          <NavbarItem urlLink="#experience">Experience</NavbarItem>
          <NavbarItem urlLink="#connect">Let&apos;s Connect!</NavbarItem>
          <li>
            <IconSocial urlLink={GITHUB_URL}>
              <Github className="text-white fill-violet-800 group-hover:fill-violet-400 duration-500 relative " />
            </IconSocial>
          </li>
          <li>
            <IconSocial urlLink={LINKEDIN_URL}>
              <LinkedIn className="text-white fill-violet-800 group-hover:fill-violet-400 duration-500 relative  " />
            </IconSocial>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
