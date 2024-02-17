import React from "react";
import "../main.css";
import HomeTyping from './HomeTyping';
import HomeBlur from './HomeBlur';
import { Link } from 'react-scroll';
import homeImage from '/home.png';

const Home: React.FC = () => {
    HomeBlur('.home__container');

  return (
    <section id="home" style={{ 
      backgroundImage: `url(${homeImage})`, 
      backgroundPosition: 'center', 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat',
      padding: '40px',
      paddingTop: '120px',
      textAlign: 'center'
    }}>
      <div className="home__container">
        <img width="310px" height="380px" src="./portfolio_img.png" alt="시원 이미지" className="home__avatar" />
        <div className="text_box">
          <HomeTyping />
          <span className="blink">|</span>
        </div>
        <button className="home__contact">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="home__contact-link"
            activeClass="active"
            spy={true}
            offset={-70}
          >
            CONTACT ME
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Home;
