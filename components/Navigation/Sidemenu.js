import { Fragment, useState } from 'react';
import NavbarItem from './NavbarItems';
import HamburgerIcon from '../UI/HamburguerIcon';
import Backdrop from '../UI/Backdrop';
import SidemenuCircleBg from '../UI/SidemenuCircleBg';
import SidemenuList from './SidemenuList';

const Sidemenu = ({ scrolled }) => {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  const sidemenuHandler = (data) => {
    setHamburgerActive(!hamburgerActive);
  };

  return (
    <Fragment>
      {hamburgerActive && <Backdrop onClick={sidemenuHandler} />}
      <aside
        className={`flex lg:hidden justify-end items-center w-2/3 relative z-20`}
      >
        <SidemenuCircleBg isActive={hamburgerActive} />
        <div>
          <HamburgerIcon
            onClick={sidemenuHandler}
            hamburgerState={hamburgerActive}
            scrolled={scrolled}
          />
          <SidemenuList isActive={hamburgerActive}>
            <NavbarItem onClick={sidemenuHandler} urlLink="#about">
              About me
            </NavbarItem>
            <NavbarItem onClick={sidemenuHandler} urlLink="#projects">
              Projects
            </NavbarItem>
            <NavbarItem onClick={sidemenuHandler} urlLink="#experience">
              Experience
            </NavbarItem>
            <NavbarItem onClick={sidemenuHandler} urlLink="#connect">
              Let&apos;s Connect!
            </NavbarItem>
          </SidemenuList>
        </div>
      </aside>
    </Fragment>
  );
};

export default Sidemenu;
