import React from "react";
import logoTS from "../images/logoTS.svg";
import { showMenuHamburguer } from "../utils/showMenuHamburguer";

const Header = () => {
  return (
    <header className=" flex items-center justify-between bg-stone-600 p-3 fixed w-full z-10 top-0 h-16">
      <a href="#home">
        <img
          src={logoTS}
          alt="logo site"
          className="ml-10 hover:scale-105 duration-500"
        />
      </a>
      <nav className="nav-bar">
        <ul className="flex  font-play text-white mr-10">
          <li className="p-3 hover:text-light-rose  hover:scale-105 transition duration-1000 border-b-2 border-transparent hover:border-light-rose active:text-light-rose">
            <a href="#home">Home</a>
          </li>
          <li className="p-3 hover:text-light-rose  hover:scale-105 transition duration-1000  border-b-2 border-transparent hover:border-light-rose active:text-light-rose">
            <a href="#about">About</a>
          </li>
          <li className="p-3 hover:text-light-rose  hover:scale-105 transition duration-1000  border-b-2 border-transparent hover:border-light-rose active:text-light-rose">
            <a href="#skills">Skills</a>
          </li>
          <li className="p-3 hover:text-light-rose  hover:scale-105 transition duration-1000  border-b-2 border-transparent hover:border-light-rose active:text-light-rose">
            <a href="#education">Education</a>
          </li>
          <li className="p-3 hover:text-light-rose  hover:scale-105 transition duration-1000  border-b-2 border-transparent hover:border-light-rose active:text-light-rose">
            <a href="#projects">Projects</a>
          </li>
          <li className="p-3 hover:text-light-rose  hover:scale-105 transition duration-1000  border-b-2 border-transparent hover:border-light-rose active:text-light-rose">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="mobile-container">
        <div className="topnav">
          <div id="myLinks">
            <a href="#home" className="iconhover">
              Home
            </a>
            <a href="#about" className="iconhover">
              About
            </a>
            <a href="#skills" className="iconhover">
              Skills
            </a>
            <a href="#education" className="iconhover">
              Education
            </a>
            <a href="#projects" className="iconhover">
              Projects
            </a>
            <a href="#contact" className="iconhover">
              Contact
            </a>
          </div>
          <a
            href="javascript:void(0)"
            className="icon"
            alt="menu hamburguer"
            onClick={showMenuHamburguer}
          >
            <i className="fa fa-bars fa-lg"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
