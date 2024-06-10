"use client";
/* eslint-disable react/no-unescaped-entities */
import { handleScrollTo } from "@/hooks/useScroll";
import Image from "next/image";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function HomePage() {
  return (
    <main
      id="home"
      className="w-full h-full  min-h-screen pt-24 pb-4 bg-gradient-to-b from-neutral-950 via-neutral-950  to-neutral-900 text-white flex justify-center items-center"
    >
      <div className="max-w-screen-lg mx-auto flex gap-6 flex-wrap-reverse justify-center">
        <div className="flex flex-col gap-6 mx-2">
          <div>
            <h3 className="text-3xl text-center max-w-[500px] font-bold mx-auto capitalize">
              Hi 👋, my name is Josué Carvalho.
            </h3>
            <h4 className="text-center text-xl text-neutral-200 capitalize">
              i'm Fullstack Software Engineer!
            </h4>
          </div>
          <div className="text-neutral-300">
            <p>
              I work with React.js, Node.js, NoSql databases, Sql databases!
            </p>
            <p>Actually working at FST Tecnologia from Campos-RJ</p>
          </div>
          <div className="text-neutral-300">
            <p className="flex items-center text-lg gap-2 ">
              <button
                onClick={() => {
                  handleScrollTo("portfolio");
                }}
                className="p-2 group text-white flex items-center gap-3 justify-center font-semibold rounded-md bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all bg-gradient-to-r from-blue-600 via-sky-400 to-blue-600 text-base  duration-500"
              >
                Portfolio{" "}
                <FaArrowRight className="group-hover:rotate-90 duration-300" />
              </button>
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <Image
            width={100}
            height={100}
            src="/profile.png"
            className="rounded-2xl md:w-64 w-2/3 mx-auto bg-size-200 bg-pos-0 hover:bg-pos-100 bg-gradient-to-r from-blue-600  via-sky-400 to-blue-600 pt-4  hover:scale-110 shadow-lg duration-500 cursor-pointer"
            alt=""
          />

          <div className="flex justify-center gap-4 mt-4 lg:hidden">
            <a
              href="https://github.com/Josuerx12"
              target="_blank"
              className="text-white flex bg-gray-500 hover:bg-gray-700 duration-300 p-1 rounded  items-center"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/josueaze12/"
              target="_blank"
              className=" text-white bg-gray-500 hover:bg-gray-700 duration-300 rounded p-1 flex  items-center"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="mailto:josueazevedo71@hotmail.com"
              target="_blank"
              className="text-white bg-gray-500 hover:bg-gray-700 duration-300 flex p-1 rounded  items-center"
            >
              <HiOutlineMail size={30} />
            </a>
            <a
              href="./resume.pdf"
              download={true}
              target="_blank"
              className="text-white bg-gray-500 hover:bg-gray-700 duration-300 p-1 flex rounded  items-center"
            >
              <BsFillPersonLinesFill size={30} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
