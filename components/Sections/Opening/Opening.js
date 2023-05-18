import Image from 'next/image';

const Opening = () => {
  return (
    <section className="min-h-max lg:min-h-[100vh] flex justify-center pb-16 pt-32  lg:py-28 lg:pt-48 relative overflow-hidden  bg-opening animate-backgroundAnimation bg-repeat-x bg-zero">
      <div className=" lg:w-4/5 flex flex-col lg:flex-row justify-center items-center relative z-10 px-10 gap-8">
        <div className="text-center lg:text-left lg:w-3/5 ">
          <h3 className="text-gray-200 gradient-violet-fuchsia w-max px-6 py-2 rounded-full shadow-lg shadow-gray-900 mx-auto lg:mx-0">
            Front-End Developer
          </h3>
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
        <div className="w-full lg:w-2/5 h-48 lg:h-full relative animate-brightness">
          <Image
            src="/images/opening-hero.png"
            alt="Developer"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </div>
    </section>
  );
};

export default Opening;
