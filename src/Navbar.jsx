import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const toggleMenu = () => {
    setNav(!nav);
  };
  return (
    <nav className="flex justify-between items-center max-w-[1240px] p-5 mx-auto">
      <h1 className="w-full text-red-700 font-bold text-4xl relative">Drew.</h1>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 border-r h-full w-[60%] font-semibold ease-in-out duration-500 bg-white z-10"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-red-700 font-bold text-4xl ml-5 mt-[20px]">
          Drew.
        </h1>
        <li className="p-5 ml-2 mt-5 mr-5 border-b text-xl">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="p-5 ml-2 mr-5 border-b text-xl">
          <Link to="about" smooth={true} duration={500}>
            About&nbsp;me
          </Link>
        </li>
        <li className="p-5 ml-2 mr-5 border-b text-xl">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="p-5 ml-2 mr-5 text-xl">
          <Link to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
      </ul>
      <div onClick={toggleMenu} className="md:hidden fixed top-7 right-3">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <ul className="hidden md:flex font-semibold z-20">
        <li className="text-xl p-4 hover:bg-red-700 hover:text-white hover:rounded-md">
          <Link className="py-4" to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="p-4 text-xl hover:bg-red-700 hover:text-white hover:rounded-md">
          <Link className="py-4" to="about" smooth={true} duration={500}>
            About&nbsp;me
          </Link>
        </li>
        <li className="p-4 text-xl hover:bg-red-700 hover:text-white hover:rounded-md">
          <Link className="py-4" to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="p-4 text-xl hover:bg-red-700 hover:text-white hover:rounded-md">
          <Link className="py-4" to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );

  // return (
  //   <nav className="flex justify-between h-24 items-center px-4 max-w-[1240px] mx-auto">
  //     <h1 className="w-full font-bold text-3xl text-[#c6184f]">React.</h1>
  //     <ul className="hidden md:flex font-semibold">
  //       <li className="p-4">Home</li>
  //       <li className="p-4">About&nbsp;me</li>
  //       <li className="p-4">Projects</li>
  //       <li className="p-4">Contact</li>
  //     </ul>
  //     <div onClick={toggleMenu} className="block md:hidden">
  //       {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
  //     </div>
  //     <div className={nav ? 'fixed left-0 top-0 w-[60%] border-r border-gray-300 h-full ease-in-out duration-500 bg-white': 'fixed left-[-100%]'}>
  //       <h1 className="w-full font-bold text-3xl text-[#c6184f] pl-4 mt-[30px]">React.</h1>
  //       <ul className="px-5 uppercase">
  //         <li className="p-4 border-b border-gray-300">Home</li>
  //         <li className="p-4 border-b border-gray-300">About&nbsp;me</li>
  //         <li className="p-4 border-b border-gray-300">Projects</li>
  //         <li className="p-4">Contact</li>
  //       </ul>
  //     </div>
  //   </nav>
  // );
};

export default Navbar;
