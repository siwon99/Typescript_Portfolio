import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar/Navbar.tsx";
import Home from "./Home/Home.tsx";
import About from "./About/About.tsx";
import Skills from "./Skills/Skills.tsx";
import Work from "./Work/Work.tsx";
import Contact from "./Contact/Contact.tsx";
import ArrowUp from "./Arrow Up/ArrowUp.tsx";
import "./main.css";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <ArrowUp />
    <Home />
    <About />
    <Skills />
    <Work />
    <Contact />
  </React.StrictMode>,
  document.getElementById("root")
);
