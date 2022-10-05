import IconShadow from '../../UI/IconShadow';
import Image from 'next/image';

const LanguageContainer = () => {
  return (
    <div className="flex justify-center mb-10 flex-wrap gap-8">
      <IconShadow>
        <h5 className="pb-4">NextJs</h5>
        <Image
          src="/icons/languages/nextjs_icon.png"
          alt="NextJs Icon"
          height="100"
          width="100"
        />
      </IconShadow>
      <IconShadow>
        <h5 className="mb-4">ReactJs</h5>
        <Image
          src="/icons/languages/react_icon.png"
          alt="ReactJs Icon"
          height="100"
          width="100"
        />
      </IconShadow>
      <IconShadow>
        <h5 className="mb-4">Javascript</h5>
        <Image
          src="/icons/languages/javascript_icon.png"
          alt="Javascript Icon"
          height="100"
          width="100"
        />
      </IconShadow>

      <IconShadow>
        <h5 className="mb-4">HTML</h5>
        <Image
          src="/icons/languages/html_icon.png"
          alt="HTML Icon"
          height="100"
          width="100"
        />
      </IconShadow>
      <IconShadow>
        <h5 className="mb-4">CSS</h5>
        <Image
          src="/icons/languages/css_icon.png"
          alt="Css Icon"
          height="100"
          width="100"
        />
      </IconShadow>
      <IconShadow>
        <h5 className="mb-4">Tailwind</h5>
        <Image
          src="/icons/languages/tailwind_icon.png"
          alt="Tailwind Icon"
          height="100"
          width="100"
        />
      </IconShadow>

      <IconShadow>
        <h5 className="mb-4">Sass</h5>
        <Image
          src="/icons/languages/sass_icon.png"
          alt="Sass Icon"
          height="100"
          width="100"
        />
      </IconShadow>
      <IconShadow>
        <h5 className="mb-4">MongoDB</h5>
        <Image
          src="/icons/languages/mongodb_icon.png"
          alt="MongoDB Icon"
          height="100"
          width="100"
        />
      </IconShadow>
    </div>
  );
};

export default LanguageContainer;
