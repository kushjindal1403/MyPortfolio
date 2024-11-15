import React from "react";
import ProjectCard from "./Card/card";
import rise from "../../../../images/Rise.png";
import bitcoin from "../../../../images/bitcoin.jpg";
import invoice from "../../../../images/invoice-management-monitor.jpg";
import launcher from "../../../../images/launcher.png";
import solanaaid from "../../../../images/solanaaid.png";
import todo from "../../../../images/TODO.png";
import Menu from "../../../../images/Menu.webp";

const MyProjects = [
  {
    link: "https://risecannabis.com/",
    title: "Rise Cannabis",
    techStack:
      "React Js, Mantine UI, Context API, Redux, Typescript, Jest, Tailwind CSS",
    desc: "Rise Cannabis is a modern eCommerce platform built with ReactJS and TypeScript. It uses Mantine UI to deliver a sleek, user-friendly interface, while Context API and Redux are employed for state management to handle user interactions seamlessly. Tailwind CSS ensures a responsive design, adapting perfectly to various screen sizes. Jest is utilized for comprehensive unit testing, guaranteeing a high-quality, bug-free user experience, which is crucial for an online business dealing with sensitive products.",
    image: rise, // Add your image path or URL here
    color: "#E5E483",
  },
  {
    link: "https://github.com/kushjindal14/Bitcoin",
    title: "BitCoin Price Prediction",
    techStack: "Machine Learning, Python",
    desc: "This project uses machine learning to predict the price of Bitcoin for the next 80 days based on historical price data from the previous 30 days. Built using Python, the application applies regression algorithms to provide users with predictive insights into the Bitcoin market. This tool allows users to analyze and make informed decisions on their investments by forecasting price trends and market behavior.",
    image: bitcoin, // Add your image path or URL here
    color: "#D2E0FB",
  },
  {
    link: "https://github.com/kushjindal14/Invoice-management-system",
    title: "Invoice Management System",
    techStack: "HTML5, CSS, PHP, SQL",
    desc: "The Invoice Management System is a dynamic web application designed to generate, track, and manage invoices for products or services. The front-end utilizes HTML5, CSS, and Bootstrap for a clean, responsive interface, while the back-end is powered by PHP and SQL for efficient data processing, storage, and retrieval. This system allows businesses to automate and streamline the invoice generation process, improving accuracy and saving time.",
    image: invoice, // Add your image path or URL here
    color: "#0FFFFF",
  },
  {
    link: "https://github.com/kushjindal14/KN-launcher",
    title: "KN App Launcher",
    techStack: "Java, Android",
    desc: "KN App Launcher is a Java-based mobile application that functions as a customizable home screen launcher for Android devices. This app allows users to easily navigate through their apps with a simple, intuitive interface. The launcher also provides custom widgets and themes, making it suitable for users of all ages. By focusing on user-friendly design and customization, the app enhances the Android user experience and provides a highly personalized mobile environment.",
    image: launcher, // Add your image path or URL here
    color: "#d5ebda",
  },
  {
    link: "https://github.com/kushjindal14/kn-media",
    title: "KN Media",
    techStack: "C++, File Structure",
    desc: "KN Media is a terminal-based messaging application built using C++ and file structures. Designed as a learning project, it mimics the core functionality of communication apps like WhatsApp by managing and storing messages using file structures. This project helps deepen understanding of low-level programming and data management, making it a great resource for developers looking to improve their skills in C++ and file handling.",
    image: solanaaid, // Add your image path or URL here
    color: "#f3e4f1",
  },
  {
    link: "https://github.com/kushjindal14/TODO-REACT-APP",
    title: "TO-DO List App",
    techStack: "React, Typescript, MERN",
    desc: "The TO-DO List App is a simple yet functional application built using React and TypeScript. It allows users to add, manage, and strike through tasks. The app follows the MERN stack architecture (MongoDB, Express, React, Node.js), with a modern, responsive design powered by Tailwind CSS. This project serves as an excellent introduction to full-stack development, showcasing how to combine front-end and back-end technologies to create interactive and practical applications.",
    image: todo, // Add your image path or URL here
    color: "#FEA1A1",
  },
  {
    link: "https://github.com/kushjindal14/Menu-app",
    title: "Menu Application",
    techStack: "React JS, Tailwind CSS, Node JS, MongoDB",
    desc: "The Menu Application is a dynamic web app built with ReactJS and TypeScript, designed for easy navigation and content management. It allows users to interact with a dynamic menu system that updates based on user input. Node.js and MongoDB are used for the backend, ensuring scalability and efficient data handling. This app is a great example of building modern, interactive web applications that offer users a seamless, engaging experience while maintaining a solid backend infrastructure for handling dynamic data.",
    image: Menu, // Add your image path or URL here
    color: "#C1A4AA",
  },
];

const Projects = () => {
  return (
    <div className="projects-div">
      <h3
        id="Projects"
        className="pt-5 text-white text-left text-base font-semibold"
      >
        Projects
      </h3>
      <h2 className="text-white text-left text-4xl font-thin pb-5">
        My Creations
      </h2>
      <div className="md:grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 pb-10">
        {MyProjects.map((items) => (
          <ProjectCard
            imageUrl={items.image}
            description={items.techStack}
            buttonText={items.title}
            buttonLink={items.link}
            desc={items.desc}
          />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Projects;
