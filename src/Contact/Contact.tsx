import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <h1 className="contact__title">Let's talk</h1>
      <h2 className="contact__email">kimsiwon0707@naver.com</h2>
      <h2 className="contact__email">https://github.com/siwon99</h2>
      <h2 className="contact__email">https://blog.naver.com/kimsiwon0707</h2>

      <div className="contact__links">
        <a href="https://github.com/siwon99?tab=repositories" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://blog.naver.com/kimsiwon0707" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-blog"></i>
        </a>
      </div>
      <p className="contact__rights">2023 siwon Kim - All rights reserved</p>
    </section>
  );
};

export default Contact;