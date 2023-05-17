import IconSocial from '../UI/IconSocial';

import Github from '../../public/icons/svg/github_social_icon.svg';
import LinkedIn from '../../public/icons/svg/linkedin_social_icon.svg';
import Logo from '../../public/logo/lean-logo.svg';

import { GITHUB_URL, LINKEDIN_URL } from '../data';

const Footer = () => {
  return (
    <footer className="py-12 flex flex-col justify-center items-center text-center bg-violet-800 text-white gradient-green-green">
      <div className="flex flex-row items-center">
        <IconSocial urlLink={GITHUB_URL}>
          <Github className="text-white fill-white group-hover:fill-violet-800 duration-500 relative " />
        </IconSocial>

        <div className="group w-24 h-24 block relative  ">
          <Logo className="fill-white" />
        </div>
        <IconSocial urlLink={LINKEDIN_URL}>
          <LinkedIn className="text-white fill-white group-hover:fill-violet-800 duration-500 relative " />
        </IconSocial>
      </div>
    </footer>
  );
};

export default Footer;
