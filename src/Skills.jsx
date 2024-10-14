import React from "react";
import HTML from "./html.png";
import CSS from "./css.png";
import JAVASCRIPT from "./javascript.png";
import REACT from "./react.png";
import TailwindCSS from "./tailwind.png";
import GITHUB from "./github.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="max-w-[1000px] mx-auto w-full p-5 mt-8"
    >
      <div className="p-8 lg:pl-2 lg:text-left text-center my-8">
        <h1 className="inline text-4xl border-b-4 border-red-700 font-bold text-red-700">
          Skills
        </h1>
        <p className="mt-3">These are technologies I've worked with</p>
      </div>


      <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
        <div className="w-[200px] h-[200px] shadow-md hover:scale-110 duration-300 flex flex-col justify-center items-center mx-auto">
            <img src={HTML} alt="html-icon" className="w-20" />
            <p className="mt-5 font-semibold text-gray-600">HTML</p>
        </div>
        <div className="w-[200px] h-[200px] shadow-md hover:scale-110 duration-300 flex flex-col justify-center items-center mx-auto">
            <img src={CSS} alt="css-icon" className="w-20" />
            <p className="mt-5 font-semibold text-gray-600">CSS</p>
        </div>
        <div className="w-[200px] h-[200px] shadow-md hover:scale-110 duration-300 flex flex-col justify-center items-center mx-auto">
            <img src={JAVASCRIPT} alt="js-icon" className="w-20" />
            <p className="mt-5 font-semibold text-gray-600">JavaScript</p>
        </div>
        <div className="w-[200px] h-[200px] shadow-md hover:scale-110 duration-300 flex flex-col justify-center items-center mx-auto">
            <img src={REACT} alt="react-icon" className="w-20" />
            <p className="mt-5 font-semibold text-gray-600">ReactJS</p>
            </div>
        <div className="w-[200px] h-[200px] shadow-md hover:scale-110 duration-300 flex flex-col justify-center items-center mx-auto">
            <img src={TailwindCSS} alt="tailwind-icon" className="w-20" />
            <p className="mt-5 font-semibold text-gray-600">TailwindCSS</p>
        </div>
        <div className="w-[200px] h-[200px] shadow-md hover:scale-110 duration-300 flex flex-col justify-center items-center mx-auto">
            <img src={GITHUB} alt="github-icon" className="w-20" />
            <p className="mt-5 font-semibold text-gray-600">Github</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
