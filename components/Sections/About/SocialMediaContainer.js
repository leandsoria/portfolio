import IconSocial from '../../UI/IconSocial';
import Github from '../../../public/icons/svg/github_social_icon.svg';
import LinkedIn from '../../../public/icons/svg/linkedin_social_icon.svg';
import { GITHUB_URL, LINKEDIN_URL } from '../../data';

const SocialMediaContainer = () => {
  return (
    <div>
      <div className="flex flex-row items-center">
        <IconSocial urlLink={GITHUB_URL}>
          <Github className="text-white fill-white group-hover:fill-violet-800 duration-500 relative " />
        </IconSocial>

        <IconSocial urlLink={LINKEDIN_URL}>
          <LinkedIn className="text-white fill-white group-hover:fill-violet-800 duration-500 relative  " />
        </IconSocial>
      </div>
    </div>
  );
};

export default SocialMediaContainer;
