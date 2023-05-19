import HoverableElement from '../UI/HoverableElement';
import ImageWithInfoFullbleed from '../UI/ImageWithInfoFullbleed';

const experienceArr = [
  {
    passClass: 'md:pb-0',
    position: 'Team Leader - Front-End Developer',
    company: 'Luxury Presence',
    content:
      "As a Team Leader & Front end Developer, my labor consists of helping the team to improve their performance and skills and solve any technical issue. \n  We provide award-winning websites and cutting-edge tech to the world's top real estate agents.",
    image: '/experiences/luxury-presence.jpg',
  },
  {
    passClass: 'lg:flex-row-reverse md:py-0 md:pb-0',
    position: 'Front-end Developer',
    company: 'Freelance',
    content:
      'Armed with React, Next.js, Tailwind CSS, CSS, and Bootstrap, I have the skills and knowledge to transform complex ideas into intuitive and visually impressive web applications.',
    image: '/experiences/freelance_front-end.jpg',
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-14 lg:py-24 flex flex-col justify-center items-center text-center gradient-violet-violet text-white"
    >
      <div>
        <h2>Experience</h2>
        <h4 className="mb-0">Get to know me.</h4>
      </div>
      {experienceArr.map((item) => (
        <ImageWithInfoFullbleed
          key={item.position}
          passClass={item.passClass}
          position={item.position}
          company={item.company}
          content={item.content}
          image={item.image}
        />
      ))}
    </section>
  );
};

export default Experience;
