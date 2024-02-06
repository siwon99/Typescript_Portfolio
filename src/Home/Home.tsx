import React from "react";
import "../main.css"
import HomeTyping from './HomeTyping'

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
