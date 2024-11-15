import React, { useEffect, useState } from "react";
import Skills from "./skills/skillsComponent";

const Interest = () => {
  const data = [
    {
      imgelink:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Front End Development",
      description:
        "As a frontend developer, I build responsive, high-performance web interfaces using React and Next.js, with TypeScript for clean, type-safe code. I create visually appealing, functional designs with Tailwind CSS and ensure cross-browser compatibility using HTML and CSS fundamentals. Skilled in Jest unit testing, I prioritize code quality and reliability. Additionally, I incorporate accessibility and SEO best practices to enhance usability and search visibility, delivering polished, user-centric web applications.",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "Full Stack Development",
      description:
        "As a full-stack developer, I design and build both frontend and backend components, using React and Next.js for responsive, dynamic user interfaces, and Node.js for scalable backend services. I create and manage data with SQL and GraphQL, ensuring efficient querying and robust data handling. With expertise in Java, I develop backend logic and integrate APIs to deliver high-performance applications. I prioritize clean, maintainable code and focus on optimizing performance, security, and scalability across both frontend and backend layers, providing a seamless end-to-end experience.",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      title: "Freelancing",
      description:
        "As a freelance developer, I offer end-to-end solutions across frontend, backend, and SEO. I build responsive, dynamic user interfaces using React, Next.js, and Tailwind CSS, ensuring seamless user experiences. On the backend, I develop scalable services with Node.js, SQL, and GraphQL, integrating APIs and optimizing data management. My expertise also extends to Java, where I implement robust server-side logic. Additionally, I improve site visibility and user engagement through effective SEO strategies, ensuring optimal search engine performance. Whether it’s web development, backend architecture, or boosting your site’s SEO, I provide comprehensive, tailored solutions to meet your needs.",
    },
  ];

  const [active, setActive] = useState(data[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [data.length]);

  useEffect(() => {
    setActive(data[index]);
  }, [index, data]);

  return (
    <div className="projects-div">
      <h3
        id="Interests"
        className="pt-5 text-white text-left text-base font-semibold"
      >
        Interest
      </h3>
      <h2 className="text-white text-left text-4xl font-thin pb-5">
        What I DO ?
      </h2>
      <div className="grid gap-4">
        <div className="relative">
          <img
            className="h-[450px] !lg:h-auto w-full max-w-full rounded-lg object-cover object-center opacity-30 transition-opacity duration-500 md:h-[480px]"
            src={active.imgelink}
            alt=""
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-5">
            <p className="text-[20px] lg:text-[50px] font-bold pb-2 lg:pb-5">
              {active.title}
            </p>
            <p className="lg:mt-2 lg:font-bold text-sm lg:text-lg">
              {active.description}
            </p>
          </div>
        </div>
        <div className="flex mx-auto gap-4">
          {data.map(({ imgelink }, idx) => (
            <div key={idx}>
              <img
                onClick={() => {
                  setActive(data[idx]);
                  setIndex(idx);
                }}
                src={imgelink}
                className={`h-20 cursor-pointer rounded-lg object-cover object-center transition-opacity duration-300 ${
                  active.imgelink === imgelink
                    ? "ring-4 ring-blue-500 opacity-100"
                    : "opacity-30"
                }`}
                alt="gallery-thumbnail"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="pt-10">
        <h2 className="text-white text-left text-4xl font-thin pb-5">Skills</h2>
        <Skills />
      </div>
    </div>
  );
};

export default Interest;
