<<<<<<< HEAD
import ConnectButton from '../../UI/ConnectButton';
import Fade from 'react-reveal/Fade';
=======
import { motion } from 'framer-motion';
>>>>>>> update.1.0
const Connect = () => {
  return (
    <section
      id="connect"
      className="flex flex-col justify-center items-center px-4 lg:px-0 py-14 lg:py-24 bg-contact bg-zero bg-fixed"
    >
<<<<<<< HEAD
      <Fade>
        <div className="text-center">
          <h2>Contact Me</h2>
          <p className="mb-12 text-xl">
            If you would like to work with me or just have a chat, send me an
            email!😄
          </p>
          <ConnectButton>
            <a href="mailto:lean.dsoria@gmail.com?subject=Greetings&body=I%20would%20like%20to%20know%20more%20about%20your%20services.">
              Let&apos;s Connect
            </a>
          </ConnectButton>
        </div>
      </Fade>
=======
      <div className="text-center text-white">
        <motion.h2
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Contact Me
        </motion.h2>
        <p className="mb-12 text-xl">
          If you would like to work with me or just have a chat, send me an
          email!😄
        </p>

        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
          href="mailto:lean.dsoria@gmail.com?subject=Greetings&body=I%20would%20like%20to%20know%20more%20about%20your%20services."
          className="min-w-24 bg-violet-800 text-white px-6 pt-2 pb-[10px] uppercase font-semibold hover:bg-violet-700 duration-200 rounded-3xl text-xl"
        >
          Let&apos;s Connect
        </motion.a>
      </div>
>>>>>>> update.1.0
    </section>
  );
};

export default Connect;
