import Fade from 'react-reveal/Fade';
const Opening = () => {
  return (
    <section className=" min-h-[30vh] flex justify-center py-20 lg:py-28  relative overflow-hidden">
      <Fade>
        <div className="flex flex-col justify-center items-center relative z-10 px-10">
          <h1 className="text-bold text-violet-900 ">Leandro Soria</h1>
          <h2 className="text-violet-600 ">Front-End Developer</h2>
          <p className="text-gray-600 font-semibold text-center lg:text-left">
            Developing beautiful UI & websites.
          </p>
        </div>
      </Fade>
    </section>
  );
};

export default Opening;
