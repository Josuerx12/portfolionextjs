/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import { FaCode, FaEye } from "react-icons/fa";
import Slider from "react-slick";

type Project = {
  name: string;
  techs: string[];
  imgs: string[];
  demo: string;
  code: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [readMore, setReadMore] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (paragraphRef.current) {
      const isExceeding =
        paragraphRef.current.scrollHeight > paragraphRef.current.clientHeight;
      setShowButton(isExceeding);
    }
  }, [project.techs, readMore]);

  return (
    <div className="md:max-w-72 w-full relative flex flex-col justify-between shadow-md shadow-neutral-500 rounded-lg ">
      <h3 className="font-bold text-2xl mx-auto py-2">{project.name}</h3>
      <div className="w-11/12 md:hover:scale-[1.15] duration-500 cursor-pointer md:h-56 h-full mx-auto py-5">
        <Slider
          {...settings}
          arrows={false}
          autoplay={true}
          autoplaySpeed={5000}
          className="rounded"
        >
          {project.imgs.map((img) => (
            <img
              className="w-full md:h-40 object-cover rounded"
              key={img}
              src={img}
              alt={project.name}
            />
          ))}
        </Slider>
      </div>

      <div className="px-2 md:h-28">
        <p
          ref={paragraphRef}
          className={`text-justify ${readMore ? "" : "line-clamp-2"}`}
        >
          <span className="font-bold">Techs: </span>{" "}
          {project.techs.map((tech) => `${tech} `)}
        </p>
        {(showButton || readMore) && (
          <button
            onClick={() => setReadMore((prev) => !prev)}
            className="text-blue-400 hover:text-blue-200 duration-200 capitalize"
          >
            {readMore ? "read less" : "read more..."}
          </button>
        )}
      </div>

      <div className="flex w-full">
        <a
          href={project.code}
          target="_blank"
          title="click here to see the code."
          className="w-1/2 rounded-bl-md p-2 capitalize hover:bg-neutral-800 hover:text-white duration-200 flex items-center gap-2 justify-center text-lg"
        >
          code <FaCode />
        </a>
        <a
          href={project.demo}
          target="_blank"
          title="Click here to go to view demo."
          className="w-1/2  rounded-br-md  p-2 capitalize hover:bg-neutral-800 hover:text-white duration-200 flex items-center gap-2 justify-center text-lg"
        >
          demo <FaEye />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
