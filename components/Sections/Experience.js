import HoverableElement from '../UI/HoverableElement';

const experienceArr = [
  {
    passClass: 'md:pb-0',
    title: 'Luxury Presence',
    subtitle: 'POD Manager & Website Builder.',
    content: 'Creating high touch websites.',
    image: '/experiences/luxury-presence.jpg',
  },
  {
    passClass: 'md:flex-row-reverse md:py-0 md:pb-0',
    title: 'Freelance',
    subtitle: 'Front-end Developer',
    content: 'Creating minimalism and beautiful websites.',
    image: '/experiences/freelance_front-end.jpg',
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 flex flex-col justify-center items-center text-center bg-violet-800 text-white"
    >
      <div>
        <h2>Experience</h2>
        <h4 className="mb-0">Get to know me.</h4>
      </div>
      {experienceArr.map((items) => (
        <HoverableElement
          key={items.title}
          passClass={items.passClass}
          title={items.title}
          subtitle={items.subtitle}
          content={items.content}
          image={items.image}
        />
      ))}
    </section>
  );
};

export default Experience;
