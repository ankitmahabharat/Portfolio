import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
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
        <div className=" absolute pt-20">
          <Navbar></Navbar>
          <About></About>
        </div>
      </div>
    </>
  );
}

export default App;
