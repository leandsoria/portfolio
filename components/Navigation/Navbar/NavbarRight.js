import Github from '../../../public/icons/svg/github_social_icon.svg';
import LinkedIn from '../../../public/icons/svg/linkedin_social_icon.svg';
import ConnectNavButton from '../../UI/ConnectNavButton';
import { GITHUB_URL, LINKEDIN_URL } from '../../data';

const NavbarRight = ({ scrolled }) => {
  return (
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
                scrolled
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
                scrolled
                  ? ' text-violet-800 fill-white group-hover:fill-violet-400'
                  : 'text-white fill-violet-800 group-hover:fill-violet-400'
              } duration-500 relative h-10 w-10`}
            />
          </a>
        </li>

        <ConnectNavButton urlLink="#connect" scrolled={scrolled}>
          Let&apos;s Connect!
        </ConnectNavButton>
      </ul>
    </div>
  );
};

export default NavbarRight;
