import React, { useEffect } from 'react';
import "../main.css";

const Navbar: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (!navbar) return;

      const navbarHeight = navbar.getBoundingClientRect().height;

      if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
      } else {
        navbar.classList.remove('navbar--dark');
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav id="navbar">
      {/* Navbar 내용 */}
    </nav>
  );
};

export default Navbar;
