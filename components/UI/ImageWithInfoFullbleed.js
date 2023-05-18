import Image from 'next/image';

function ImageWithInfoFullbleed({
  position,
  passClass,
  company,
  content,
  image,
}) {
  return (
    <article
      className={`flex flex-col-reverse lg:flex-row w-full items-center justify-around py-12 last:py-0 md:py-24 whitespace-pre-line ${passClass} mb-12 last:mb-0 lg:mb-0 `}
    >
      <div className="md:basis-1/2 w-4/5 lg:w-1/2 text-left px-4 md:px-12">
        <header>
          <h3>{position}</h3>
          <h5 className="text-xl mb-4">{company}</h5>
          <p className="text-lg">{content}</p>
        </header>
      </div>

      <aside className="lg:basis-1/2 w-4/5 mb-8 lg:mb-0 lg:w-1/2 lg:max-w-[50%] lg:max-h-[45%] shadow-md overflow-hidden ">
        <Image
          src={image}
          width="125"
          height="100"
          alt={position}
          layout="responsive"
          quality="75"
          objectFit="cover"
          className="hover:scale-125 duration-[800ms]"
          loading="eager"
        />
      </aside>
    </article>
  );
}

export default ImageWithInfoFullbleed;
