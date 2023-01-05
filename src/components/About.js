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
          src={photoAbout}
          alt="foto da tamires sousa"
        />
      </div>
      <div className="max-w-3xl text-light-rose text-sm mb-4">
        <img className="mb-8" src={about} alt="foto da tamires sousa" />
        <p className="square-detail ml-4">
          I started my academic studies in chemistry. During this journey I
          developed research in Physical Chemistry with emphasis on
          electrochemistry and electrochromic materials
        </p>
        <br></br>
        <p className="square-detail ml-4">
          After graduating, I continued to expand my knowledge and started
          pursuing a career in technology. I took several courses about
          programming for understand how it worked and if I really wanted this
          career. During that first contact, I identified myself with the area,
          and I looked for a way that I could become professional. Then I
          discovered Trybe. A technology school that offers complete training
          focused on the market.
        </p>
      </div>
    </section>
  );
};

export default About;
