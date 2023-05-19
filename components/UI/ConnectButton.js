import { motion } from 'framer-motion';

const ConnectButton = (props) => {
  return (
    <motion.button
      className="min-w-24 bg-violet-800 text-white px-6 pt-2 pb-[10px] uppercase font-semibold hover:bg-violet-700 duration-200 rounded-3xl text-xl"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.7 }}
    >
      {props.children}
    </motion.button>
  );
};

export default ConnectButton;
