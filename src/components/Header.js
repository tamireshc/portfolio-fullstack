import React from "react";
import logoTS from "../images/logoTS.svg";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-stone-600 p-4 fixed w-full z-10 top-0">
      <img
        src={logoTS}
        alt="logo site"
        className="ml-10 hover:scale-105 duration-500"
      />
      <nav>
        <ul className="flex  font-play text-white mr-10">
          <li className="p-2 hover:text-light-rose  hover:scale-110 transition duration-1000 border-b-2 border-transparent hover:border-light-rose active:text-light-rose">
            <a href="#home">Home</a>
          </li>
          <li className="p-2 hover:text-light-rose  hover:scale-110 transition duration-1000  border-b-2 border-transparent hover:border-light-rose active:text-light-rose">
            <a href="#about">About</a>
          </li>
          <li className="p-2 hover:text-light-rose  hover:scale-110 transition duration-1000  border-b-2 border-transparent hover:border-light-rose active:text-light-rose">
            <a href="#skills">Skills</a>
          </li>
          <li className="p-2 hover:text-light-rose  hover:scale-110 transition duration-1000  border-b-2 border-transparent hover:border-light-rose active:text-light-rose">
            <a href="#education">Education</a>
          </li>
          <li className="p-2 hover:text-light-rose  hover:scale-110 transition duration-1000  border-b-2 border-transparent hover:border-light-rose active:text-light-rose">
            <a href="#projects">Projects</a>
          </li>
          <li className="p-2 hover:text-light-rose  hover:scale-110 transition duration-1000  border-b-2 border-transparent hover:border-light-rose active:text-light-rose">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
