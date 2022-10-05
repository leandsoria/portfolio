import ConnectButton from '../UI/ConnectButton';

const Connect = () => {
  return (
    <section
      id="connect"
      className="flex flex-col justify-center items-center py-24"
    >
      <div className="text-center">
        <h2>Contact Me</h2>
        <p className="mb-12 text-xl">
          Either you wanna work with me or just contact me, write me an email!
          😄
        </p>
        <ConnectButton>Let&apos;s Connect</ConnectButton>
      </div>
    </section>
  );
};

export default Connect;
