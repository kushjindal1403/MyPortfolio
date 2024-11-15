import Desktop from "./Desktop/Desktop";
import Mobile from "./Mobile/Mobile";
import { useState, useEffect } from "react";

const Portfolio = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (windowWidth < 960) {
    return <Mobile />;
  } else {
    return <Desktop />;
  }
};

export default Portfolio;
