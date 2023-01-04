import React from "react";
import projects from "../images/projects.svg";
import trybetunes from "../images/trybetunes.png";
import wallet from "../images/wallet.png";
import tryunfo from "../images/tryunfo.png";
import tfc from "../images/tfc.png";
import carshop from "../images/carshop.png";
import blog from "../images/blog.png";

const Projects = () => {
  return (
    <section id="projects" className=" px-10 py-20 lg:px-40">
      <div className="flex justify-center mb-10">
        <img className="w-48" src={projects} alt="titulo projects" />
      </div>

      <div className="flex flex-wrap justify-center items-center">
        <div className="md:mr-8 mt-4">
          <p className="font-lato text-brow my-4 text-center font-bold text-lg">
            Trybetunes
          </p>
          <img
            className="hover:scale-105 duration-500"
            src={trybetunes}
            alt="imagem trybetunes"
          />
          <div className="text-center">
            <a href="https://trybetunes-beta.vercel.app/" target="blank">
              <button className="border border-dark-rose font-lato text-dark-rose mt-6 mr-2 py-2 w-28 text-center hover:scale-105 duration-500">
                GitHub
              </button>
            </a>
            <a href="https://github.com/tamireshc/trybetunes" target="blank">
              <button className="border border-dark-rose font-lato text-dark-rose mt-6 mr-2 py-2 w-28 text-center hover:scale-105 duration-500">
                Deploy
              </button>
            </a>
          </div>
        </div>

        <div className="md:mr-8 mt-4">
          <p className="font-lato text-brow my-4 text-center font-bold text-lg">
            Wallet
          </p>
          <img
            className="hover:scale-105 duration-500"
            src={wallet}
            alt="imagem wallet"
          />
          <div className="text-center">
            <a href="https://wallet-zeta.vercel.app/" target="blank">
              <button className="border border-dark-rose font-lato text-dark-rose mt-6 mr-2 py-2 w-28 text-center hover:scale-105 duration-500">
                GitHub
              </button>
            </a>
            <a href="https://github.com/tamireshc/wallet" target="blank">
              <button className="border border-dark-rose font-lato text-dark-rose mt-6 mr-2 py-2 w-28 text-center hover:scale-105 duration-500">
                Deploy
              </button>
            </a>
          </div>
        </div>

        <div className="md:mr-8 mt-4">
          <p className="font-lato text-brow my-4 text-center font-bold text-lg">
            Tryunfo
          </p>
          <img
            className="hover:scale-105 duration-500"
            src={tryunfo}
            alt="imagem tryunfo"
          />
          <div className="text-center">
            <a href="https://tryunfo-seven.vercel.app/" target="blank">
              <button className="border border-dark-rose font-lato text-dark-rose mt-6 mr-2 py-2 w-28 text-center hover:scale-105 duration-500">
                GitHub
              </button>
            </a>
            <a href="https://github.com/tamireshc/tryunfo" target="blank">
              <button className="border border-dark-rose font-lato text-dark-rose mt-6 mr-2 py-2 w-28 text-center hover:scale-105 duration-500">
                Deploy
              </button>
            </a>
          </div>
        </div>

        <div className="md:mr-8 mt-4">
          <p className="font-lato text-brow my-4 text-center font-bold text-lg">
            TFC
          </p>
          <img
            className="hover:scale-105 duration-500"
            src={tfc}
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
            Car Shop
          </p>
          <img
            className="hover:scale-105 duration-500"
            src={carshop}
            alt="imagem carshop"
          />
          <div className="text-center">
            <a
              href="https://github.com/tamireshc/backend/tree/master/POO-project-car-shop"
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
            Blog-API
          </p>
          <img
            className="hover:scale-105 duration-500"
            src={blog}
            alt="imagem blog api"
          />
          <div className="text-center">
            <a
              href="https://github.com/tamireshc/backend/tree/master/blogs-api"
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
