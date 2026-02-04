import "./App.css";
import Education from "./components/Education";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Skill from "./components/Skill";
import { useState } from "react";
import About from "./components/About";
import Particles from "./Particles";
function App() {
 
  return (
    <>
      <div className="w-full h-screen relative bg-[#010f18] flex justify-center items-center">
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <Particles
            particleColors={["#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>
        <div className="  absolute top-0 left-0 w-full ">
          <Navbar></Navbar>
          <About></About>
          <Skill></Skill>
          <Education></Education>
        </div>
      </div>
    </>
  );
}

export default App;
