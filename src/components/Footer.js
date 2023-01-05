import React from "react";
import heart from "../images/heart.svg";

const Footer = () => {
  return (
    <footer className=" bg-stone-600 p-5 text-white font-lato text-sm ">
      <div className="flex items-center justify-center md:flex-wrap ">
        <p className=" mr-1 md:mr-2 text-end">
          © 2023 - Designed with React.js, Getform.io, TailwindCSS and
        </p>
        <img src={heart} className="w-6 pulse" alt="imagem de coracao" />
        <p className="ml-2 md:ml-1">
          by
          <span className=" text-dark-rose ml-1">Tamires Sousa Batista.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
