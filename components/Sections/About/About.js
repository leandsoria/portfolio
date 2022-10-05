import SocialMediaContainer from './SocialMediaContainer';

const About = () => {
  return (
    <section
      id="about"
      className="bg-violet-800 text-white py-24 pb-[596px] flex justify-center scroll-smooth"
    >
      <div className="flex flex-col justify-center items-center text-center max-w-6xl">
        <h2>About me</h2>
        <h4>
          Hi, I’m Lean. Nice to meet you! 😃
          <br /> I started my journey as a developer two year ago.
          <br /> I’m really confident, curious and perpetually working on
          improving my developer skills.
        </h4>
        <SocialMediaContainer />
      </div>
    </section>
  );
};

export default About;
