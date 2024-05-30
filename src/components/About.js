import React from "react";
import photoAbout from "../images/photoabout.png";
import about from "../images/about.svg";
import animaScroll from "../utils/animaScroll";

const About = () => {

  return (
    <section
      id="about"
      className="lg:flex py-24  p-20 flex-wrap bg-brow justify-center lg:items-center js-scroll"
    >
      <div className="flex justify-center">
        <img
          className="lg:mr-24 mb-10 lg:mb-2"
          src={ photoAbout }
          alt="foto da tamires sousa"
        />
      </div>
      <div className="max-w-3xl text-light-rose text-sm mb-4">
        <img className="mb-8" src={ about } alt="foto da tamires sousa" />
        <p className="square-detail ml-4">
          I started my academic studies in chemistry. During this journey I
          developed research in Physical Chemistry with emphasis on
          electrochemistry and electrochromic materials
        </p>
        <br></br>
        <p className="square-detail ml-4">
          After graduating in chemistry, I continued looking to expand my knowledge and started studying technology. I took several programming courses with the aim of better understanding how it worked and whether I really wanted this career.
        </p>
        <p className="square-detail ml-4">
          During this first contact, I identified with the area and looked for a way in which I could become a professional. I completed Full-Stack development training at Trybe and am currently studying the MBA in Software Engineering at USP.
        </p>
        <br></br>
      </div>
    </section>
  );
};

export default About;
