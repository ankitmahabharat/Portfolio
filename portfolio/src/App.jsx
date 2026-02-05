import "./App.css";
import Education from "./components/Education";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./components/Skills";
import { useState } from "react";
import About from "./components/About";
import Particles from "./Particles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
 
  return (
    <>
      <div className="w-full h-screen relative bg-[#13011e] flex justify-center items-center">
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <Particles className={`min-h-screen w-full`}
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
          <Skills></Skills>
          <Education></Education>
          <Contact></Contact>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
