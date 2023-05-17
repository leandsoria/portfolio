import Github from '../../public/icons/svg/github_social_icon.svg';
import LinkedIn from '../../public/icons/svg/linkedin_social_icon.svg';
import NavbarItem from './NavbarItems';
import Sidemenu from './Sidemenu';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { GITHUB_URL, LINKEDIN_URL } from '../data';
import Link from 'next/link';
import ConnectNavButton from '../UI/ConnectNavButton';

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
      <div className="flex justify-start items-center w-2/3 gap-4	 ">
        <Link href={'/'}>
          <div className="w-32 lg:w-48 relative cursor-pointer ">
            <div className={`w-16 h-16 `}>
              <Image
                src={`${
                  isScrolled
                    ? '/logo/lean-logo_light.png'
                    : '/logo/lean-logo_dark.png'
                }`}
                alt="Leandro Soria's Logo"
                layout="fill"
                objectFit="contain"
                objectPosition="left"
                priority={true}
              />
            </div>
          </div>
        </Link>
        <ul className="hidden lg:flex justify-center items-center">
          <NavbarItem urlLink="#about" scrolled={isScrolled}>
            About me
          </NavbarItem>
          <NavbarItem urlLink="#projects" scrolled={isScrolled}>
            Projects
          </NavbarItem>
          <NavbarItem urlLink="#experience" scrolled={isScrolled}>
            Experience
          </NavbarItem>
        </ul>
      </div>
      <Sidemenu scrolled={isScrolled} />
      <div className={`hidden lg:flex justify-end items-center w-2/3`}>
        <ul className="flex justify-center items-center">
          <li className="px-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <Github
                className={`${
                  isScrolled
                    ? ' text-violet-800 fill-white group-hover:fill-violet-400'
                    : 'text-white fill-violet-800 group-hover:fill-violet-400'
                } duration-500 relative h-10 w-10`}
              />
            </a>
          </li>
          <li className="px-4">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="group "
            >
              <LinkedIn
                className={`${
                  isScrolled
                    ? ' text-violet-800 fill-white group-hover:fill-violet-400'
                    : 'text-white fill-violet-800 group-hover:fill-violet-400'
                } duration-500 relative h-10 w-10`}
              />
            </a>
          </li>

          <ConnectNavButton urlLink="#connect" scrolled={isScrolled}>
            Let&apos;s Connect!
          </ConnectNavButton>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
