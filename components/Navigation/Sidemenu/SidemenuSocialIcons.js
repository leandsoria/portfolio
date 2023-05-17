import Github from '../../../public/icons/svg/github_social_icon.svg';
import LinkedIn from '../../../public/icons/svg/linkedin_social_icon.svg';
import { GITHUB_URL, LINKEDIN_URL } from '../../data';

const SidemenuSocialIcons = () => {
  return (
    <ul className="flex flex-row justify-center">
      <li className="px-4">
        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="group">
          <Github className="text-white fill-white group-hover:fill-violet-400 duration-500 relative h-10 w-10" />
        </a>
      </li>
      <li className="px-4">
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          className="group "
        >
          <LinkedIn className="text-white fill-white group-hover:fill-violet-400 duration-500 relative h-10 w-10" />
        </a>
      </li>
    </ul>
  );
};

export default SidemenuSocialIcons;
