import React from "react";
import { ReactComponent as Devgirl } from "../images/devgirl.svg";
import github from "../images/github.png";
import cv from "../images/iconcv.png";
import "animate.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <section id="home" className="flex flex-wrap justify-center p-36">
      <div className="max-w-3xl mr-0 md:mr-5 lg:mr-10 xl:mr-44 ">
        <p className="text-bonina text-sm text-right mr-2 xl:mr-0">
          Hi! My name is{" "}
        </p>
        <h1 className="text-dark-rose font-play font-bold text-5xl xl:text-6xl ">
          Tamires Sousa
        </h1>
        <div className="text-brow text-xl py-2 xl:text-2xl mt-2">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("I’ am a Full-Stack development.").start();
            }}
          />
        </div>
        {/* <h2 className='text-brow text-2xl py-2 xl:text-3xl'>I’ am a Full-Stack development</h2> */}
        <p className="text-bonina text-sm w-80 text-justify mt-2 xl:w-96">
          I´m a science and technology enthusiast who found in development a way
          to be constantly evolution
        </p>
        <div className="flex justify-start mt-4">
          <a href="https://github.com/tamireshc" target="blank">
            <img className="p-2" src={github} alt="logo github" />
          </a>

          <a href="https://linkedin.com/in/tamires-s" target="blank">
            <img
              className="w-12 p-2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="logo linkedin"
            />
          </a>

          <a href="https://github.com/tamireshc" target="blank">
            <img className="w-12 p-2" src={cv} alt="logo linkedin" />
          </a>
        </div>
      </div>
      <div className="spt-10 lg:pt-0">
        <Devgirl className="hover:scale-105 duration-500" />
      </div>
    </section>
  );
};

export default Home;
