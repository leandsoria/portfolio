import StackContainer from './StackContainer.js';
import ToolsContainer from './ToolsContainer.js';

const Skills = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center py-24 relative gap-6">
      <div className="absolute bg-skills bg-zero bg-fixed w-full h-full top-0 blur-[1px]"></div>
      <div className="flex flex-col  lg:px-12 mx-4 justify-center items-center text-center max-w-7xl lg:mx-auto text-white z-10 ">
        <h2>Skills</h2>
        <h4 className="mb-10">
          I like to code from scratch, and enjoy bringing ideas to life.
        </h4>
      </div>
      <div className="flex flex-col py-14 lg:py-12 lg:px-12 mx-4 justify-center items-center text-center max-w-7xl lg:mx-auto bg-[rgba(255,255,255,.75)] rounded-3xl shadow-xl z-10">
        <h3>Stack</h3>
        <StackContainer />
        <h3>Tools</h3>
        <ToolsContainer />
      </div>
    </section>
  );
};

export default Skills;
