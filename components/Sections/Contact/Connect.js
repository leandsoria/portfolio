import ConnectButton from '../../UI/ConnectButton';

const Connect = () => {
  return (
    <section
      id="connect"
      className="flex flex-col justify-center items-center px-4 lg:px-0 py-14 lg:py-24 bg-contact bg-zero bg-fixed"
    >
      <div className="text-center text-white">
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
    </section>
  );
};

export default Connect;
