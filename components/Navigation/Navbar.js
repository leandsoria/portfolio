import NavbarItem from './NavbarItems';
import Sidemenu from './Sidemenu';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="flex  flex-row w-full justify-between lg:justify-around px-[6%] py-6 ">
      <div className="w-1/5 relative ">
        <div className="w-30 h-28 ">
          <Image
            src="/logo/lean-logo.png"
            alt="Leandro Soria's Logo"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
