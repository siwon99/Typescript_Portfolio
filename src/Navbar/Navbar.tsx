import React from "react";
import { Link, animateScroll as scroll } from 'react-scroll';

interface NavbarProps {
  to: string;
  label: string;
}

const NavbarItem: React.FC<NavbarProps> = ({ to, label }) => (
  <li className="navbar__menu__item" data-link={to}>
    <Link to={to} smooth={true} duration={500}>
      {label}
    </Link>
  </li>
);

const Navbar: React.FC = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav id="navbar">
      <div className="navbar__log">
        <Link to="/" onClick={scrollToTop}>
          <img src="./home__logo.png" alt="로고" className="name__logo" />
        </Link>
      </div>
      <ul className="navbar__menu">
        <NavbarItem to="home" label="Home" />
        <NavbarItem to="about" label="About" />
        <NavbarItem to="skills" label="Skills" />
        <NavbarItem to="work" label="My Projects" />
        <NavbarItem to="contact" label="Contact" />
      </ul>

      {/* Toggle button */}
      <button className="navbar__toggle-btn">
        <i className="fa-solid fa-bars"></i>
      </button>
    </nav>
  );
};

export default Navbar;