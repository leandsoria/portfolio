import ProjectCard from '../UI/ProjectCard';
import { ProjectArr } from '../dataArray';

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center py-24"
    >
      <div className="text-center">
        <h2>Recent works and projects</h2>
        <h4 className="mb-12">
          Here there are some designs and projects that I&apos;ve worked
          recently.
        </h4>
        <div className="flex max-w-7xl flex-row flex-wrap gap-6 justify-center">
          {ProjectArr.map((cards) => (
            <ProjectCard
              key={cards.title}
              title={cards.title}
              lang={cards.lang}
              img={cards.img}
              url={cards.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
