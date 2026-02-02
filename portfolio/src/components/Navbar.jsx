import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsCursor } from "react-icons/bs";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSec, setActiveSec] = useState("");
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSec(sectionId);
    setIsOpen(false);
  };

  const menuItems = [
    {
      id: "About",
      label: "About",
    },
    {
      id: "Skills",
      label: "Skills",
    },

    {
      id: "Education",
      label: "Education",
    },
    {
      id: "Project",
      label: "Project",
    },
  ];
  return (
    <nav
      className={` fixed top-5 left-0 w-full z-50 transition duration-300 px-[7vw] lg:px-[20vw] ${isScroll ? " bg-[#050414] bg-opacity-50 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="text-white py-2 flex justify-between items-centre">
        <div className=" text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Ankit</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Mahabharat</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>
        <ul className=" hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${activeSec === item.id ? " text-[#8245ec]" : ""}`}
            >
              <button>{item.label}</button>
            </li>
          ))}
        </ul>

        <div className=" hidden md:flex space-x4">
          <a
            href="https://github.com/ankitmahabharat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24}></FaGithub>
          </a>

          <a
            href="https://www.linkedin.com/in/ankit-mahabharat-7730b7134/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={24}></FaLinkedin>
          </a>
        </div>
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className=" text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>
      {isOpen && (
        <div className=" absolute  top-16 left-10 transform-translate-x-1/2 w-4/5 bg-transparent bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg">
          <ul className=" flex flex-col item-centre space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${activeSec === item.id ? "text-[#8245ec]" : ""}`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.id}
                </button>
              </li>
            ))}
            <div className=" flex space x-4">
              <a
                href="https://github.com/ankitmahabharat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec]"
              >
                <FaGithub size={24}></FaGithub>
              </a>

              <a
                href="https://www.linkedin.com/in/ankit-mahabharat-7730b7134/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec]"
              >
                <FaLinkedin size={24}></FaLinkedin>
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
