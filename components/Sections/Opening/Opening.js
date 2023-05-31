import Image from 'next/image';
import { motion } from 'framer-motion';

const Opening = () => {
  return (
    <section className="min-h-max lg:max-h-[1200px] tall:max-h-[1200px] lg:h-screen   flex justify-center pb-16 pt-32  lg:py-28 lg:pt-48 relative overflow-hidden  bg-opening animate-backgroundAnimation bg-repeat bg-zero">
      <div className=" lg:w-4/5 flex flex-col lg:flex-row justify-center items-center relative z-10 px-10 gap-8">
        <div className="text-center lg:text-left lg:w-3/5">
          <motion.h3
            className="text-gray-200 gradient-violet-fuchsia w-max px-6 py-2 rounded-full shadow-lg shadow-gray-900 mx-auto lg:mx-0"
            drag="x"
            animate={{ x: 0, opacity: 1 }}
            dragConstraints={{ left: -100, right: 100 }}
            initial={{ opacity: 0, x: -100 }}
            viewport={{ once: true }}
            transition={{ ease: 'easeInOut', duration: 1.6, delay: 0.2 }}
          >
            Front-End Developer
          </motion.h3>

          <h1 className="text-bold text-white uppercase ">Leandro Soria</h1>
          <h4 className="text-gray-500 font-semibold mb-6 uppercase">
            Developing beautiful UI & websites
          </h4>
          <p className="text-gray-300 font-semibold mb-6 lg:pr-4">
            Nice to meet you! 😃 I started my journey as a front-end developer
            three years ago.
          </p>
          <p className="text-gray-300 font-semibold mb-6 lg:pr-4">
            I’m really confident, curious and perpetually working on improving
            my developer skills.
          </p>
        </div>
        <motion.div
          className="w-full lg:w-2/5 h-48 lg:h-full relative animate-brightness"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.7 }}
        >
          <Image
            src="/images/opening-hero.png"
            alt="Developer"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Opening;
