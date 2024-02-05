import React from "react";
import HomeTyping from './HomeTyping'
import "./Home.css";
import "../main.css"

const Home: React.FC = () => {
  return (
    <section id="home">
      <div className="home__container">
        <img width="310px" height="380px" src="./portfolio_img.png" alt="시원 이미지" className="home__avatar" />
        <div className="text_box">
          <HomeTyping />
          <span className="blink">|</span>
        </div>
        <button className="home__contact">CONTACT ME</button>
      </div>
    </section>
  );
};

export default Home;
