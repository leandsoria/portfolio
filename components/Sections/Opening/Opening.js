import Image from 'next/image';

const Opening = () => {
  return (
    <section className=" min-h-[100vh] flex justify-center py-28  lg:py-28 pt-48 relative overflow-hidden  bg-opening animate-backgroundAnimation bg-repeat-x bg-zero">
      <div className="w-4/5 flex flex-col lg:flex-row justify-center items-center relative z-10 px-10 gap-8">
        <div className="lg:w-3/5">
          <h1 className="text-bold text-white ">Leandro Soria</h1>
          <h2 className="text-white">Front-End Developer</h2>
          <p className="text-white font-semibold text-center lg:text-left">
            Developing beautiful UI & websites.
          </p>
        </div>
        <div className="w-full lg:w-2/5 h-full relative animate-brightness">
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
