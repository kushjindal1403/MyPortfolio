import React from "react";
import Kush from "../../../images/KUSH.jpg";
import Twitter from "../../../images/twitterx.png";
import Github from "../../../images/github.png";
import LinkedIn from "../../../images/linkedin.png";
import Instagram from "../../../images/instagram.png";
import "./SideBar.css";

const Sidebar = () => {
  const sidebarElements = [
    { title: "About Me", id: "About" },
    { title: "Projects", id: "Projects" },
    { title: "Experience", id: "Experience" },
    { title: "Education", id: "Education" },
    { title: "What I Do ?", id: "Interests" },
    { title: "Certifications", id: "Certification" },
  ];

  const SocialLinks = [
    {
      Linkname: "LinkedIn",
      link: LinkedIn,
      src: "https://www.linkedin.com/in/kush-jindal",
      alt: "LinkedIn",
    },
    {
      Linkname: "Github",
      link: Github,
      src: "https://github.com/kushjindal14",
      alt: "Github",
    },
    {
      Linkname: "Twitter",
      link: Twitter,
      src: "https://twitter.com/kushjindalka11",
      alt: "Twitter",
    },
    {
      Linkname: "Instagram",
      link: Instagram,
      src: "https://instagram.com/kushjindal_?igshid=NTc4MTIwNjQ2YQ==",
      alt: "Instagram",
    },
  ];

  return (
    <div className="sticky top-0 rounded-3xl overflow-hidden z-10 text-white bg-gray-500 bg-opacity-10 items-center align-middle hidden lg:block h-screen min-h-[850px] max-h-[900px]">
      <h1 className="text-aliceblue italic !mt-10 text-3xl font-medium">
        Kush Jindal
      </h1>
      <img
        src={Kush}
        alt="Kush's Image"
        className="mt-4 mb-4 lg:w-20 xl:w-48 rounded-full mx-auto !mb-8"
      />
      <div className="mt-10">
        {sidebarElements.map((item) => (
          <div key={item.id} className="pb-4">
            <a
              href={`#${item.id}`}
              className="text-aliceblue text-lg no-underline transition-all duration-300 ease-in-out hover:text-blue-500 hover:scale-110"
            >
              {item.title}
            </a>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center mt-5">
        {SocialLinks.map((items) => (
          <a key={items.Linkname} href={items.src}>
            <img
              src={items.link}
              alt={items.alt}
              className="w-9 transition-all duration-300 ease-in-out hover:rotate-360 hover:brightness-125 w-8 h-8 mt-6"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
