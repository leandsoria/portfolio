import Image from 'next/image';
import Link from 'next/link';
import NavbarItem from '../NavbarItems';
import { easeInOut, motion } from 'framer-motion';
export const NavbarLeft = ({ scrolled }) => {
  return (
    <motion.div
      className="flex justify-start items-center w-2/3 gap-4"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: easeInOut, duration: 0.9 }}
    >
      <Link href={'/'}>
        <div className="w-32 lg:w-48 relative cursor-pointer ">
          <div className={`w-16 h-16 `}>
            <Image
              src={`${
                scrolled
                  ? '/logo/lean-logo_light.png'
                  : '/logo/lean-logo_light.png'
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
        <NavbarItem urlLink="#about" scrolled={scrolled}>
          About me
        </NavbarItem>
        <NavbarItem urlLink="#projects" scrolled={scrolled}>
          Projects
        </NavbarItem>
        <NavbarItem urlLink="#experience" scrolled={scrolled}>
          Experience
        </NavbarItem>
      </ul>
    </motion.div>
  );
};
