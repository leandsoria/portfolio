import { easeInOut, motion } from 'framer-motion';

const IconShadow = ({ children }) => {
  return (
    <motion.div
      className="relative before:bg-violet-300 before:rounded-[25%] before:w-20 before:h-12 before:absolute before:blur-[6px] before:[transform:translateX(-50%)_translateY(7.5rem)_perspective(12rem)_rotateX(40deg)] before:left-[50%] before:opacity-0 hover:before:opacity-40 before:duration-500 text-center lg:px-8"
      initial={{ scale: 0.3 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      whileTap={{ scale: 0.8 }}
      transition={{ ease: easeInOut, duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default IconShadow;
