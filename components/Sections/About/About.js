import SocialMediaContainer from './SocialMediaContainer';
const About = () => {
  return (
    <section
      id="about"
      className="gradient-violet-violet text-white py-14 lg:py-24  flex justify-center "
    >
      <div className="flex flex-col justify-center items-center text-center max-w-6xl px-4">
        <h2>About me</h2>
        <p className="mb-4">
          As a Front-End Developer, my work revolves around creating captivating
          user interfaces and immersive web experiences. With a strong command
          of React, Next.js, Tailwind, CSS, and Bootstrap, I bring a diverse
          skill set to the table.
        </p>
        <p className="mb-8">
          React forms the backbone of my development process, allowing me to
          build scalable and robust applications by leveraging its
          component-based architecture.
        </p>
        <SocialMediaContainer />
      </div>
    </section>
  );
};

export default About;
