import React from "react";
import work1 from "./work1.png";
import work2 from "./work2.png";
import work3 from "./work3.png";
import work4 from "./work4.png";
import work5 from "./work5.png";

const Projects = () => {
  return (
    <div name="work" className="w-full my-10">
      <div className="max-w-[1240px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="text-center pb-8 lg:pl-2 my-10">
          <p className="text-4xl font-bold inline border-b-4 text-red-700 border-red-700">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/*Container */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/*Grid items */}
          <div
            style={{ backgroundImage: `url(${work3})` }}
            className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*HOVER */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Food page
              </span>
              <div className="pt-8 text-center">
                
                <a href="https://github.com/DrewChillguy/static-react-landing-page" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${work5})` }}
            className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*HOVER */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Clothes Store
              </span>
              <div className="pt-8 text-center">
                
                <a href="https://github.com/DrewChillguy/clothesStore" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${work4})` }}
            className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*HOVER */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Landing page
              </span>
              <div className="pt-8 text-center">
                
                <a href="https://github.com/DrewChillguy/responsive-homepage-template" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${work2})` }}
            className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*HOVER */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                To-do list
              </span>
              <div className="pt-8 text-center">
                
                <a href="https://github.com/DrewChillguy/to-do-list" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${work1})` }}
            className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*HOVER */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Weather 
              </span>
              <div className="pt-8 text-center">
                
                <a href="https://github.com/DrewChillguy/weather-app" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
