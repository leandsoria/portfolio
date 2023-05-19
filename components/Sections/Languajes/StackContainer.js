import IconShadow from '../../UI/IconShadow';
import Image from 'next/image';
import { stackArr } from '../../dataArray';
<<<<<<< HEAD
import Zoom from 'react-reveal/Zoom';
=======
import { motion } from 'framer-motion';
>>>>>>> update.1.0

const LanguageContainer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-12 w-full mb-10 px-2">
      {stackArr.map((data) => (
        <IconShadow key={data.language}>
          <h5 className="pb-4">{data.language}</h5>
<<<<<<< HEAD
          <Zoom>
            <Image
              src={data.imageUrl}
              alt={data.alt}
              height="100"
              width="100"
              loading="eager"
              quality="75"
            />
          </Zoom>
=======
          <Image
            src={data.imageUrl}
            alt={data.alt}
            height="75"
            width="75"
            loading="eager"
            quality="75"
          />
>>>>>>> update.1.0
        </IconShadow>
      ))}
    </div>
  );
};

export default LanguageContainer;
