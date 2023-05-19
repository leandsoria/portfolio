import IconSocial from '../UI/IconSocial';

import Github from '../../public/icons/svg/github_social_icon.svg';
import LinkedIn from '../../public/icons/svg/linkedin_social_icon.svg';
import Logo from '../../public/logo/lean-logo_light.png';

import { GITHUB_URL, LINKEDIN_URL } from '../data';
import Image from 'next/image';
import { Link } from '@mui/material';

const Footer = () => {
  return (
    <footer className="py-0 flex flex-col justify-center items-center text-center text-white gradient-violet-violet-inverse">
      <div className="flex flex-row items-center">
        <IconSocial urlLink={GITHUB_URL}>
          <Github className="text-white fill-white group-hover:fill-violet-800 duration-500 relative " />
        </IconSocial>
        <Link href={'/#'}>
          <div className="group w-36 h-24 block relative">
            <Image src={Logo} layout="fill" objectFit="contain" alt="Logo" />
          </div>
        </Link>
        <IconSocial urlLink={LINKEDIN_URL}>
          <LinkedIn className="text-white fill-white group-hover:fill-violet-800 duration-500 relative " />
        </IconSocial>
      </div>
    </footer>
  );
};

export default Footer;
