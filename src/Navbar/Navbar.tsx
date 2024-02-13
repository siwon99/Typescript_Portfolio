import React from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import NavbarBackground from './NavbarBackground'
import '../main.css'

interface NavbarProps {
  to: string;
  label: string;
  className: string;
}

const NavbarItem: React.FC<NavbarProps> = ({ to, label, className }) => (
  <li>
    <Link to={to} smooth={true} duration={500} className={className}>
      {label}
    </Link>
  </li>
);

const Navbar: React.FC = () => {
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
          <NavbarItem to="home" label="Home" className="navbar__menu__item" />
          <NavbarItem to="about" label="About" className="navbar__menu__item" />
          <NavbarItem to="skills" label="Skills" className="navbar__menu__item" />
          <NavbarItem to="work" label="My Projects" className="navbar__menu__item" />
          <NavbarItem to="contact" label="Contact" className="navbar__menu__item" />
        </ul>

        {/* Toggle button */}
        <button className="navbar__toggle-btn">
          <i className="fa-solid fa-bars"></i>
        </button>
      </nav>
      <NavbarBackground />
    </>
  );
};

export default Navbar;
