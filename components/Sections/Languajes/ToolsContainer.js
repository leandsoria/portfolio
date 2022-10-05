import IconShadow from '../../UI/IconShadow';
import Image from 'next/image';

const ToolsContainer = () => {
  return (
    <div className="flex justify-center flex-wrap gap-8">
      <IconShadow>
        <h5 className="pb-4">Photoshop</h5>
        <Image
          src="/icons/languages/photoshop_icon.png"
          alt="Photoshop Icon"
          height="100"
          width="100"
        />
      </IconShadow>
      <IconShadow>
        <h5 className="pb-4">Figma</h5>
        <Image
          src="/icons/languages/figma_icon.png"
          alt="Figma Icon"
          height="100"
          width="100"
        />
      </IconShadow>
      <IconShadow>
        <h5 className="pb-4">Github</h5>
        <Image
          src="/icons/languages/github_icon.png"
          alt="Github Icon"
          height="100"
          width="100"
        />
      </IconShadow>
      <IconShadow>
        <h5 className="pb-4">Git</h5>
        <Image
          src="/icons/languages/git_icon.png"
          alt="Git Icon"
          height="100"
          width="100"
        />
      </IconShadow>
    </div>
  );
};

export default ToolsContainer;
