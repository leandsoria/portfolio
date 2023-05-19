import IconShadow from '../../UI/IconShadow';
import Image from 'next/image';
import { toolsArr } from '../../dataArray';
import Zoom from 'react-reveal/Zoom';

const ToolsContainer = () => {
  return (
    <div className="flex justify-center flex-wrap gap-8">
      {toolsArr.map((data) => (
        <IconShadow key={data.tool}>
          <h5 className="pb-4">{data.tool}</h5>
          <Image
            src={data.imageUrl}
            alt={data.alt}
            height="75"
            width="75"
            loading="eager"
          />
        </IconShadow>
      ))}
    </div>
  );
};

export default ToolsContainer;
