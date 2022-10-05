import StackContainer from './StackContainer.js';
import ToolsContainer from './ToolsContainer.js';

const Skills = () => {
  return (
    <section className="flex flex-col py-24 px-12 justify-center items-center text-center max-w-4xl  m-auto mt-[-500px]  bg-white rounded-3xl shadow-xl">
      <div className="px-4">
        <h2>Skills</h2>
        <h4>I like to code from scratch, and enjoy bringing ideas to life.</h4>
        <h3>Stack</h3>
        <StackContainer />
        <h3>Tools</h3>
        <ToolsContainer />
      </div>
    </section>
  );
};

export default Skills;
