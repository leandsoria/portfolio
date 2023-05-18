import IconShadow from '../../UI/IconShadow';
import Image from 'next/image';
import { stackArr } from '../../dataArray';

const LanguageContainer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-12 w-full mb-10 px-2">
      {stackArr.map((data) => (
        <IconShadow key={data.language}>
          <h5 className="pb-4">{data.language}</h5>
          <Image
            src={data.imageUrl}
            alt={data.alt}
            height="75"
            width="75"
            loading="eager"
            quality="75"
          />
        </IconShadow>
      ))}
    </div>
  );
};

export default LanguageContainer;
