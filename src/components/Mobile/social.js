import React from "react";
import LinkedIn from "../../images/linkedin.png";
import Github from "../../images/github.png";
import Twitter from "../../images/twitterx.png";
import Instagram from "../../images/instagram.png";

const SocialIcons = () => {
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
    <div>
      <div className="flex justify-center space-x-5 pb-10">
        {SocialLinks.map((social, index) => {
          return (
            <a
              key={index}
              href={social.src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.Linkname}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <img className="h-8 w-8" src={social.link} alt={social.alt} />
            </a>
          );
        })}
      </div>
      <div className="text-white pb-5">
        <p>
          Mail Me{" "}
          <a className="underline" href="Mailto:Kushjindal1403@outlook.com">
            @Kushjindal1403@outlook.com
          </a>
        </p>
        <p>
          Contact:{" "}
          <a className="underline" href="tel:+919591513388">
            +91-9591513388
          </a>
        </p>
      </div>
    </div>
  );
};

export default SocialIcons;
