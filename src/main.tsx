import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar/Navbar.tsx";
import Home from "./Home/Home.tsx";
import About from "./About/About.tsx";
import Skills from "./Skills/Skills.tsx";
import Work from "./Work/Work.tsx";
import Contact from "./Contact/Contact.tsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Work />
    <Contact />
  </React.StrictMode>
);
