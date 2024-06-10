/* eslint-disable react/no-unescaped-entities */
import ExperienceCard from "@/components/cards/experience";
import { techs } from "@/data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full h-full min-h-screen pt-24 pb-4 bg-gradient-to-b from-neutral-900 to-neutral-950 text-white flex justify-center items-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <h5 className="text-4xl font-bold inline border-b-4 border-neutral-500 w-fit">
            Experience
          </h5>

          <p className="mt-5"> These are the technologies I've worked with</p>
        </div>
        <div className="flex flex-wrap gap-10 mt-5 justify-between">
          {techs.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
