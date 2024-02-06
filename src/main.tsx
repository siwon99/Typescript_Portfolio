import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar/Navbar.tsx";
import Home from "./Home/Home.tsx";
import About from "./About/About.tsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <About />
  </React.StrictMode>
);
