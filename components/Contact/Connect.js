import ConnectButton from '../UI/ConnectButton';

const Connect = () => {
  return (
    <section
      id="connect"
      className="flex flex-col justify-center items-center px-4 lg:px-0 py-14 lg:py-24"
    >
      <div className="text-center">
        <h2>Contact Me</h2>
        <p className="mb-12 text-xl">
          If you would like to work with me or just have a chat, send me an
          email!😄
        </p>
        <ConnectButton>Let&apos;s Connect</ConnectButton>
      </div>
    </section>
  );
};

export default Connect;
