import React from "react";
import education from "../images/education.svg";
import palete from "../images/palet.svg";
import tube from "../images/tube.svg";
import dev from "../images/dev.svg";
import educationmaster from "../images/educationmaster.svg";
import "animate.css";
import { changeActiveButton } from "../utils/educationClassToggle";

const Education = () => {
  return (
    <section
      id="education"
      className="px-10 py-20 lg:px-40 text-center  bg-brow js-scroll"
    >
      <img className="mb-8 inline " src={education} alt="titulo skills" />
      <div>
        <div id="graduation-div" className="h-24 md:my-10 animate__animated ">
          <div className="flex justify-center items-baseline md:items-center ">
            <img src={palete} className="w-5" alt="icone paleta de cor" />
            <p className="text-white font-play ml-2 md:text-2xl">
              Bachelor of Graphic Design - UEMG
            </p>
          </div>
          <div className="flex justify-center items-baseline  md:items-center h-24 mb-4">
            <img src={tube} className="w-5" alt="icone tubo de ensaio" />
            <p className="text-white font-play ml-2 md:text-2xl">
              Bachelor of Chemistry - UFMG
            </p>
          </div>
        </div>

        <div
          id="master-div"
          className="h-24 md:my-10 hidden animate__animated "
        >
          <div className="flex justify-center items-start md:items-center ">
            <img src={educationmaster} className="w-5" alt="icone estudante" />
            <p className="text-white font-play ml-1 md:text-2xl">
              Master in Technological Education CEFET-MG
            </p>
          </div>
        </div>

        <div id="dev-div" className="h-24 md:my-10 hidden animate__animated ">
          <div className="flex justify-center items-center  md:items-center ">
            <img src={dev} className="w-5" alt="icone paleta de cor" />
            <p className="text-white font-play ml-2 md:text-2xl">
              Full-Stack development - Trybe
            </p>
          </div>
        </div>
      </div>

      <div>
        <button
          type="button"
          id="graduation"
          className="border border-light-rose font-play text-light-rose  md:mt-6 py-2 w-40 text-center mr-5
          active-button
         "
          onClick={() => changeActiveButton(1)}
        >
          Degree
        </button>
        <button
          type="button"
          id="master"
          className="border border-light-rose font-play text-light-rose mt-4 py-2 w-40 text-center mr-5
         "
          onClick={() => changeActiveButton(2)}
        >
          Master Degree
        </button>
        <button
          type="button"
          id="dev"
          className="border border-light-rose font-play text-light-rose mt-4 py-2 w-40 text-center mr-5
         "
          onClick={() => changeActiveButton(3)}
        >
          Development
        </button>
      </div>
    </section>
  );
};

export default Education;
