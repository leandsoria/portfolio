import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
const ProjectCard = ({ title, lang, img, url }) => {
  return (
    <AnimatePresence>
      <motion.a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="group basis-[100%] mx-8 md:mx-0 md:[flex-basis:calc(33.333%_-_1.5rem)] relative rounded-xl before:bg-green-500 before:w-full before:h-full before:scale-0 hover:before:scale-100 before:duration-500 before:absolute before:z-10 before:block before:opacity-0 hover:before:opacity-100 
       before:origin-center overflow-hidden shadow-lg min-h-[250px] lg:min-h-[225px]"
        initial={{ opacity: 0, x: 400 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1, x: -400 }}
      >
        <Image
          src={`/projects/${img}`}
          layout="fill"
          alt={title}
          className="group-hover:scale-150 duration-300"
          objectFit="cover"
          loading="eager"
          quality="45"
        />
        <div className="relative z-10 text-white p-4 py-12 h-full">
          <h3 className="translate-x-full translate-y-[-100%] group-hover:translate-x-0 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-200 mb-2 md:text-2xl">
            {title}
          </h3>
          <p className="absolute bottom-10 left-1/2 translate-x-[-50%] translate-y-[200px] group-hover:translate-y-0 duration-200 w-4/5 md:text-xl">
            {lang}
          </p>
        </div>
      </motion.a>
    </AnimatePresence>
  );
};

export default ProjectCard;
