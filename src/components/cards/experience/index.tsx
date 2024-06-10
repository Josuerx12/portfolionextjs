import Image from "next/image";
import { Experience } from "../../../data/experience";

const ExperienceCard = ({ exp }: { exp: Experience }) => {
  return (
    <div
      title={exp.name}
      style={{
        boxShadow: `0 4px 6px -1px ${exp.color}, 0 2px 4px -2px ${exp.color}`,
      }}
      className={`p-4 w-full md:max-w-72 rounded-lg cursor-pointer md:hover:scale-110 duration-300 flex 
        flex-col items-center justify-center gap-4`}
    >
      <Image
        width={100}
        height={100}
        className="w-24 h-24"
        src={exp.icon}
        alt={exp.name}
      />

      <span className="capitalize text-xl">{exp.name}</span>
    </div>
  );
};

export default ExperienceCard;
