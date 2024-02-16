import React, { useEffect } from 'react';

const Home: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const home = document.querySelector<HTMLDivElement>('.home__container');
      if (!home) return;

      const homeHeight = home.getBoundingClientRect().height;
      const opacity = 1 - window.scrollY / homeHeight;

      home.style.opacity = opacity.toString();
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home__container">
    </div>
  );
};

export default Home;
