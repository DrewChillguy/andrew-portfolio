import React from "react";
import { ReactTyped } from "react-typed";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div
      name="home"
      className="max-w-[800px] w-[410px] md:w-[700px] mx-auto mt-[-96px] h-screen flex flex-col justify-center relative"
    >
      <p className="text-5xl mt-10 md:text-6xl text-red-700 font-bold">
        Hi, everyone
      </p>
      <div className="flex">
        <p className="text-red-700 text-4xl md:text-6xl">I'm &nbsp;</p>
        <ReactTyped
          showCursor={false}
          strings={["Andrew Sihamaya"]}
          typeSpeed={50}
          backSpeed={30}
          loop
          className="text-gray-500 text-4xl md:text-6xl"
        />
      </div>
      <p className="my-4 text-gray-700 ">
        I'm a passionate front-end developer skilled in React.js, JavaScript,
        and TailwindCSS, focused on creating responsive, user-friendly
        interfaces.
      </p>
      
        <Link to="work" smooth={true} duration={500}>
        <button className="w-[160px] bg-red-700 my-3 p-3 pl-5 rounded-md text-white font-semibold hover:bg-red-800 flex items-center">My work<HiArrowNarrowRight size={20} className="ml-3" /></button>
        </Link>{" "}
        
      
    </div>
  );
};

export default Hero;
