import React, { useState, useEffect } from "react";

const ArrowUp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isVisible = scrollTop > 200;
      setIsVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button className={`arrow-up ${isVisible ? "visible" : ""}`} onClick={scrollToTop}>
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

export default ArrowUp;
