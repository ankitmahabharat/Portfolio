import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsCursor } from "react-icons/bs";
const Navbar = () => {
  const [activeSec, setActiveSec] = useState("");

  const menuItems = [
    {
      id: "about",
      label: "About",
    },
    {
      id: "skills",
      label: "Skills",
    },
    {
      id: "work",
      label: "Work",
    },
    {
      id: "education",
      label: "Education",
    },
    {
      id: "about",
      label: "About",
    },
  ];
  return (
    <nav className=" bg-transparent">
      <div className="text-white py-5 flex justify-between items-centre">
        <div className=" text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Ankit</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Mahabharat</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>
        <ul className=" md-flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li key={item.id} className={ `cursor-pointer hover:text-[#8245ec] ${activeSec === item.id? " text-[#8245ec]":""}`}>
              <button>{item.label}</button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
