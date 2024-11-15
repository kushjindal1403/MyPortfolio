import React from "react";
import About from "./About/about";
import Carousel from "./Carousel/carousel";
import Project from "./Projects/projects.js";
import Experience from "./Experience/experience.js";
import Education from "./Education/education.js";
import Interest from "./intrests/intrest.js";
import Certifications from "./Certifications/certifications.js";
import ContactForm from "./Contact/contact.js";

const Main = () => {
  return (
    <div className="w-full rounded-[20px] bg-gray-500 bg-opacity-10">
      <Carousel />
      <div className="m-10">
        <About />
        <Project />
        <Experience />
        <Education />
        <Interest />
        <Certifications />
        <ContactForm />
      </div>
      <div className="hidden lg:block text-white pb-5 lg:flex justify-center space-x-5">
        <p>
          Mail Me{" "}
          <a href="Mailto:Kushjindal1403@outlook.com" className="underline">
            @Kushjindal1403@outlook.com
          </a>
        </p>
        <p>
          Contact:{" "}
          <a href="tel:+919591513388" className="underline">
            +91-9591513388
          </a>
        </p>
      </div>
    </div>
  );
};

export default Main;
