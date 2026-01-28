import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar}></Navbar>
      <Sidebar isOpen={isOpen}></Sidebar>
      <Footer></Footer>
    </>
  );
}

export default App;
