import React from "react";
import Tilt from "react-parallax-tilt";
import ReactTypingEffect from "react-typing-effect";
import profileImage from "../assets/profileImage.png";


const About = () => {
  const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
  return (
    <section
      id="about"
      className="  py-4  px[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className=" flex flex-col-reverse md:flex-row justify-between items-center transform translate-x20rm">
        <div className="md:w-1/2 top-0  text-center md:text-left mt-8 md:mt-0">
        
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold-sans-serif text-white mb-2  leading-tight">
            Hii, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-sans-serif font-bold-sans text-white mb-4 leading-tight">
            Ankit Mahabharat
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold-sans-serif text-white mb-4 leading-relaxed ">
            I am a Full-Stack Developer and problem-solver. Who loves building
            clean, scalable, and user-friendly applications. 
            
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
