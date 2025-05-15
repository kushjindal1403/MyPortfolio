import React, { useState, useEffect } from "react";
import "./carousel.css";
import Carousel1 from "../../../../images/Carousel1.jpeg";
import Carousel2 from "../../../../images/Carousel2.jpg";
import Carousel3 from "../../../../images/Carousel3.jpeg";

const Carousel = ({ autoPlayInterval = 8000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      image: Carousel1,
      title: "WELCOME TO MY PORTFOLIO!",
      description: "",
      buttonLink: "",
      heading: "Hey! My name is KUSH ..",
    },
    {
      image: Carousel2,
      title: "Oh! You need my Resume? Sure.",
      description: "Download My CV",
      buttonLink:
        "https://drive.google.com/file/d/1Lb1_Q6Xt2it3eS8jhBIrEcM5wcrvE1tI/view?usp=sharing",
      heading: "I’m a Software Engineer and designer..",
    },
    {
      image: Carousel3,
      title: "Impressed ? Let's Connect!",
      description: "Contact ME",
      buttonLink: "",
      heading: "Let’s work together to create something amazing!!",
    },
  ];

  // Typing Effect Hook
  const useTypingEffect = (text, speed = 200) => {
    const [displayedText, setDisplayedText] = useState("");
    

    useEffect(() => {
      setDisplayedText(""); // Reset displayedText on new text
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + text[index]);
        index++;
        if (index === text.length - 1) clearInterval(interval);
      }, speed);

      return () => clearInterval(interval);
    }, [text, speed]);

    return displayedText;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [items.length, autoPlayInterval]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const headingText = useTypingEffect(items[currentIndex].heading || "", 150);

  // Scroll to Contact section
  const handleContactClick = () => {
    const contactSection = document.getElementById("Contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-content">
        <img src={items[currentIndex].image} alt={items[currentIndex].title} />
      </div>
      <div className="absolute text-white">
        <h2 className="text-[32px] md:text-[45px] lg:text-[50px] font-bold">
          {items[currentIndex].title}
        </h2>
        {items[currentIndex].description && (
          <button
            onClick={
              items[currentIndex].description === "Contact ME"
                ? handleContactClick
                : () => window.open(items[currentIndex].buttonLink)
            }
            className="p-3 md:p-5 lg:p-8 bg-black text-white rounded-md font-bold"
          >
            {items[currentIndex].description}
          </button>
        )}
        {items[currentIndex].heading && (
          <h3
            key={currentIndex}
            className="text-[24px] md:text-[32px] lg:text-[40px] font-medium"
          >
            {headingText}
          </h3>
        )}
      </div>
      <div className="carousel-pagination">
        {items.map((_, index) => (
          <button
            key={index}
            className={`pagination-button !w-2 !h-2 ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
