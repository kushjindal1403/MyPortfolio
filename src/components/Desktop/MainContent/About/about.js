import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-me" id="About">
      <h3>About me</h3>
      <h2>Who AM I ?</h2>
      <div className="pb-5">
        <p className="text-[12px] md:text-md lg:text-lg">
          Hi! I’m <b>Kush Jindal</b>, your friendly neighborhood code ninja with
          a flair for all things web! When I'm not transforming caffeine into
          code, I’m crafting apps that are fast, functional, and fun. From
          making eCommerce sites load like a dream to boosting conversion rates
          by 20%, I’m all about creating digital experiences that users{" "}
          <b>actually</b> enjoy.
        </p>
        <p className="text-[12px] md:text-md lg:text-lg">
          My tech stack includes some of my favorite sidekicks—ReactJS, Next.js,
          JavaScript, and GraphQL. Together, we’ve tackled everything from
          headless architecture transformations to automating workflows that
          make developers’ lives easier. Think of me as your go-to for quirky,
          smooth, and efficient web magic. Beyond the code, I’m obsessed with
          optimizing and experimenting—whether it’s ramping up accessibility,
          turning up the SEO, or getting creative with design tools like Figma
          and Adobe.
        </p>
        <p className="pb-10 text-[12px] md:text-md lg:text-lg">
          So, if you’re ready to add some sparkle to your next project, dive
          into my portfolio and let’s get building something unforgettable! ✨
        </p>
      </div>
      <hr className="pb-5" />
    </div>
  );
};

export default About;
