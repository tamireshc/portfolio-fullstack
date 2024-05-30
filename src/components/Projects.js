import React from "react";
import projects from "../images/projects.svg";
import trybetunes from "../images/trybetunes.png";
import tfc from "../images/tfc.png";
import geopet from "../images/geo.png";
import tryitter from "../images/trywitter às 17.04.33.png";
import drone from "../images/drone-feeder.png";


const Projects = () => {
  return (
    <section id="projects" className=" px-10 py-20 lg:px-40 js-scroll">
      <div className="flex justify-center mb-4 md:mb-10">
        <img className="w-48" src={ projects } alt="titulo projects" />
      </div>

      <div className="flex flex-wrap justify-center items-center">
        <div className="md:mr-8 mt-4">
          <p className="font-lato text-brow my-4 text-center font-bold text-lg">
            Trybetunes
          </p>
          <img
            className="hover:scale-105 duration-500 project-image"
            src={ trybetunes }
            alt="imagem trybetunes"
          />
          <div className="text-center">
            <a href="https://trybetunes-beta.vercel.app/" target="blank">
              <button className="border border-dark-rose font-lato text-dark-rose mt-6 mr-2 py-2 w-28 text-center hover:scale-105 duration-500">
                Deploy
              </button>
            </a>
            <a href="https://github.com/tamireshc/trybetunes" target="blank">
              <button className="border border-dark-rose font-lato text-dark-rose mt-6 mr-2 py-2 w-28 text-center hover:scale-105 duration-500">
                GitHub
              </button>
            </a>
          </div>
        </div>

        <div className="md:mr-8 mt-4">
          <p className="font-lato text-brow my-4 text-center font-bold text-lg">
            TFC
          </p>
          <img
            className="hover:scale-105 duration-500 project-image"
            src={ tfc }
            alt="imagem tfc"
          />
          <div className="text-center">
            <a
              href="https://github.com/tamireshc/backend/tree/master/trybe-futebol-clube-backend"
              target="blank"
            >
              <button className="border border-dark-rose font-lato text-dark-rose mt-6 mr-2 py-2 w-28 text-center hover:scale-105 duration-500">
                GitHub
              </button>
            </a>
          </div>
        </div>

        <div className="md:mr-8 mt-4">
          <p className="font-lato text-brow my-4 text-center font-bold text-lg">
            GeoPet
          </p>
          <img
            className="hover:scale-105 duration-500 project-image"
            src={ geopet }
            alt="imagem geopet"
          />
          <div className="text-center">
            <a href="https://github.com/tamireshc/geoPet?tab=readme-ov-file" target="blank">
              <button className="border border-dark-rose font-lato text-dark-rose mt-6 mr-2 py-2 w-28 text-center hover:scale-105 duration-500">
                GitHub
              </button>
            </a>
          </div>
        </div>

        <div className="md:mr-8 mt-4">
          <p className="font-lato text-brow my-4 text-center font-bold text-lg">
            Tryitter
          </p>
          <img
            className="hover:scale-105 duration-500 project-image"
            src={ tryitter }
            alt="imagem tryitter"
          />
          <div className="text-center">
            <a href="https://github.com/tamireshc/Tryitter" target="blank">
              <button className="border border-dark-rose font-lato text-dark-rose mt-6 mr-2 py-2 w-28 text-center hover:scale-105 duration-500">
                GitHub
              </button>
            </a>
          </div>
        </div>


        <div className="md:mr-8 mt-4">
          <p className="font-lato text-brow my-4 text-center font-bold text-lg">
            Drone Feeder
          </p>
          <img
            className="hover:scale-105 duration-500 project-image"
            src={ drone }
            alt="imagem carshop"
          />
          <div className="text-center">
            <a
              href="https://github.com/tamireshc/drone-feeder"
              target="blank"
            >
              <button className="border border-dark-rose font-lato text-dark-rose mt-6 mr-2 py-2 w-28 text-center hover:scale-105 duration-500">
                GitHub
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
