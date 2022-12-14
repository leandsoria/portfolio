import IconShadow from '../../UI/IconShadow';
import Image from 'next/image';
import { stackArr } from '../../dataArray';

const LanguageContainer = () => {
  return (
    <div className="flex justify-center mb-10 flex-wrap gap-8">
      {stackArr.map((data) => (
        <IconShadow key={data.language}>
          <h5 className="pb-4">{data.language}</h5>
          <Image
            src={data.imageUrl}
            alt={data.alt}
            height="100"
            width="100"
            loading="eager"
            quality="75"
          />
        </IconShadow>
      ))}
    </div>
  );
};

export default LanguageContainer;
