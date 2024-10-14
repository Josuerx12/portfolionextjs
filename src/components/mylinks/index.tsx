import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const MyLinks = () => {
  return (
    <div className="hidden lg:block top-[35%] left-0 fixed">
      <ul className="flex flex-col ">
        <li
          title="Go to my Github Page."
          className="w-40 h-14 flex items-center gap-2 text-2xl bg-gray-500 px-4 transition-all duration-300 cursor-pointer ease-in-out rounded-t hover:rounded -ml-28  hover:-ml-3 "
        >
          <a
            href="https://github.com/Josuerx12"
            target="_blank"
            className="w-full text-white flex justify-between items-center"
          >
            Github <FaGithub />
          </a>
        </li>
        <li
          title="Go to my LinkedIn Page."
          className="w-40 h-14 flex items-center gap-2 text-2xl bg-gray-500 px-4 transition-all duration-300 cursor-pointer ease-in-out hover:rounded -ml-28  hover:-ml-3"
        >
          <a
            href="https://www.linkedin.com/in/josueaze12/"
            target="_blank"
            className="w-full text-white flex justify-between items-center"
          >
            LinkedIn <FaLinkedin />
          </a>
        </li>
        <li
          title="Send e-mail to me."
          className="w-40 h-14 flex items-center gap-2 text-2xl bg-gray-500 px-4 transition-all duration-300 cursor-pointer ease-in-out hover:rounded -ml-28  hover:-ml-3"
        >
          <a
            href="mailto:josueazevedo71@hotmail.com"
            target="_blank"
            className="w-full text-white flex justify-between items-center"
          >
            E-mail <HiOutlineMail />
          </a>
        </li>
        <li
          title="Download my resume."
          className="w-40 h-14 flex items-center gap-2 text-2xl bg-gray-500 px-4 transition-all duration-300 cursor-pointer ease-in-out rounded-b hover:rounded -ml-28  hover:-ml-3 "
        >
          <a
            href="./resume.pdf"
            download={true}
            target="_blank"
            className="w-full text-white flex justify-between items-center"
          >
            Resume <BsFillPersonLinesFill />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MyLinks;
