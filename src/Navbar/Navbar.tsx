import React, { useState } from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import NavbarBackground from './NavbarBackground'
import '../main.css'

interface NavbarProps {
  to: string;
  label: string;
  className: string;
  onClick?: () => void;
}

const NavbarItem: React.FC<NavbarProps> = ({ to, label, className, onClick }) => (
  <li>
    <Link to={to} smooth={true} duration={500} className={className} onClick={onClick}>
      {label}
    </Link>
  </li>
);

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <nav id="navbar">
        <div className="navbar__log">
          <Link to="/" onClick={scrollToTop}>
            <img src="./home__logo.png" alt="로고" className="name__logo" />
          </Link>
        </div>
        <ul className="navbar__menu">
          <NavbarItem to="home" label="Home" className={activeItem === "home" ? "navbar__menu__item active" : "navbar__menu__item"} onClick={() => handleItemClick("home")} />
          <NavbarItem to="about" label="About" className={activeItem === "about" ? "navbar__menu__item active" : "navbar__menu__item"} onClick={() => handleItemClick("about")} />
          <NavbarItem to="skills" label="Skills" className={activeItem === "skills" ? "navbar__menu__item active" : "navbar__menu__item"} onClick={() => handleItemClick("skills")} />
          <NavbarItem to="work" label="My Projects" className={activeItem === "work" ? "navbar__menu__item active" : "navbar__menu__item"} onClick={() => handleItemClick("work")} />
          <NavbarItem to="contact" label="Contact" className={activeItem === "contact" ? "navbar__menu__item active" : "navbar__menu__item"} onClick={() => handleItemClick("contact")} />
        </ul>

        <button className="navbar__toggle-btn">
          <i className="fa-solid fa-bars"></i>
        </button>
      </nav>
      <NavbarBackground />
    </>
  );
};

export default Navbar;
