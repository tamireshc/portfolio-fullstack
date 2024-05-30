import React from "react";
import skills from "../images/skills.svg";

const Skills = () => {
  return (
    <section
      id="skills"
      className=" px-10 py-20 lg:px-40 text-center js-scroll"
    >
      <img className="mb-8 inline" src={ skills } alt="titulo skills" />

      <div className="flex flex-wrap justify-center">
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
          alt="icone C#"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
        />
        <img
          className="w-28 shadow p-4 rounded m-2 hover:scale-105 duration-500"
          alt="icone dotnet"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original-wordmark.svg"
        />
        <img
          className="w-28 shadow p-4 rounded m-2 hover:scale-105 duration-500"
          alt="icone java"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
        />
        <img
          className="w-28 shadow p-4 rounded m-2 hover:scale-105 duration-500"
          alt="icone spring"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg"
        />
        <img
          className="w-28 shadow p-4 rounded m-2 hover:scale-105 duration-500"
          alt="icone quarkus"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/quarkus/quarkus-original-wordmark.svg"
        />
        <img
          className="w-28 shadow p-4 rounded m-2 hover:scale-105 duration-500"
          alt="icone react"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
        />
        <img
          className="w-28 shadow p-6 rounded m-2 hover:scale-105 duration-500"
          alt="icone next"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
        />
        <img
          className="w-28 shadow p-6 rounded m-2 hover:scale-105 duration-500"
          alt="icone node"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
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
          className="w-28 shadow p-5 rounded m-2 hover:scale-105 duration-500"
          alt="icone python"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
        />
        <img
          className="w-28 shadow p-5 rounded m-2 hover:scale-105 duration-500"
          alt="icone fastapi"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original-wordmark.svg"
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
