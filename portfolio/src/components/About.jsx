import React from "react";
import Tilt from "react-parallax-tilt";
import ReactTypingEffect from "react-typing-effect";
import profileImage from "../assets/profileImage.png";


const About = () => {
  return (
    <section
      id="about"
      className="  py-4  px[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className=" flex flex-col-reverse md:flex-row justify-between items-center transform translate-x20rm">
        <div className="md:w-1/2 top-0  text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold-sans text-white mb-2 leading-tight">
            Hii, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold-sans text-white mb-4 leading-tight">
            Ankit Mahabharat
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold-sans text-white mb-4 leading-relaxed font-sans">
            I am a Full-Stack Developer and problem-solver who loves building
            clean, scalable, and user-friendly applications. 
            {/* <span className="text-white">I am a </span> */}
            {/* <ReactTypingEffect>
              text={["Fullstack Developer", "UI/UX Developer", "Coder"]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer=
              {(cursor) => <span className=" text-[#8245ec]">{cursor}</span>}
            </ReactTypingEffect> */}
          </p>
        </div>
        <div className="md:w1/2 flex justify-centre md:justify-end">
          <Tilt className=" border-4 border-purple-500 rounded-full">
            <img src={profileImage} alt="Ankit Mahabharat" className="w-71 h-71  rounded-full object-cover drop-shadow=[0_10px_20px_rgba(130,69,236,0.5)]" />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
