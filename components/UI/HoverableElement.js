import Image from 'next/image';

const HoverableElement = ({ passClass, title, subtitle, content, image }) => {
  console.log(image);
  return (
    <article
      className={`flex flex-col-reverse md:flex-row w-full  max-w-6xl items-center justify-around py-12 md:py-24 ${passClass}`}
    >
      <div className="md:basis-[45%] w-4/5 md:w-1/2 text-left">
        <header>
          <h3>{title}</h3>
          <h5 className="text-xl mb-4">{subtitle}</h5>
          <p className="text-lg">{content}</p>
        </header>
      </div>

      <aside className="md:basis-[45%] w-4/5 mb-8 md:mb-0 md:w-1/2 md:max-w-[45%] md:max-h-[45%] rounded-3xl shadow-md overflow-hidden ">
        <Image
          src={image}
          width="125"
          height="100"
          alt="Luxury Presence logo"
          layout="responsive"
          quality="75"
          objectFit="cover"
          className="hover:scale-125 duration-[800ms]"
        />
      </aside>
    </article>
  );
};

export default HoverableElement;
