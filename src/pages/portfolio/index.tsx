import ProjectCard from "@/components/cards/project";
import { projects } from "@/data/projects";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="w-full h-full  min-h-screen pt-24 pb-4 bg-gradient-to-b from-neutral-950  to-neutral-900 text-white flex justify-center items-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <h5 className="text-4xl font-bold inline border-b-4 border-neutral-500 w-fit">
            Portfolio
          </h5>
        </div>

        <div className="w-full gap-10 justify-between flex flex-wrap">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
