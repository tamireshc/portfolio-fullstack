import React from "react";
import skills from "../images/skills.svg";

const Skills = () => {
  return (
    <section id="skills" className=" px-10 py-10 md:py-20 lg:px-40 text-center">
      <img className="mb-8 inline" src={skills} alt="titulo skills" />

      <div className="flex flex-wrap justify-center">
        <img
          className="w-28 shadow p-4 rounded m-2 hover:scale-105 duration-500"
          alt="icone html"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
        />
        <img
          className="w-28 shadow p-4 rounded m-2 hover:scale-105 duration-500"
          alt="icone css"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
        />
        <img
          className="w-28 shadow p-6 rounded m-2 hover:scale-105 duration-500"
          alt="icone javascript"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
        />
        <img
          className="w-28 shadow p-6 rounded m-2 hover:scale-105 duration-500"
          alt="icone typescript"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
        />
        <img
          className="w-28 shadow p-4 rounded m-2 hover:scale-105 duration-500"
          alt="icone react"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
        />
        <img
          className="w-28 shadow p-6 rounded m-2 hover:scale-105 duration-500"
          alt="icone redux"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
        />
        <img
          className="w-28 shadow p-6 rounded m-2 hover:scale-105 duration-500"
          alt="icone next"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
        />
        <img
          className="w-28 shadow p-6 rounded m-2 hover:scale-105 duration-500"
          alt="icone sass"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
        />
        <img
          className="w-28 shadow p-3 rounded m-2 hover:scale-105 duration-500"
          alt="icone tailwind"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
        />
        <img
          className="w-28 shadow p-6 rounded m-2 hover:scale-105 duration-500"
          alt="icone node"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        />
        <img
          className="w-28 shadow p-3 rounded m-2 hover:scale-105 duration-500"
          alt="icone express"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
        />
        <img
          className="w-28 shadow p-3 rounded m-2 hover:scale-105 duration-500"
          alt="icone mysql"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
        />
        <img
          className="w-28 shadow p-4 rounded m-2 hover:scale-105 duration-500"
          alt="icone mongodb"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
        />
        <img
          className="w-28 shadow p-4 rounded m-2 hover:scale-105 duration-500"
          alt="icone graphql"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg"
        />
        <img
          className="w-28 shadow p-4 rounded m-2 hover:scale-105 duration-500"
          alt="icone sequelize"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg"
        />
        <img
          className="w-28 shadow p-5 rounded m-2 hover:scale-105 duration-500"
          alt="icone python"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
        />
        <img
          className="w-28 shadow p-5 rounded m-2 hover:scale-105 duration-500"
          alt="icone docker"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg"
        />
      </div>
    </section>
  );
};

export default Skills;
