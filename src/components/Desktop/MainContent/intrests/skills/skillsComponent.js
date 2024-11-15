import React, { useState } from "react";
import { SimplePagination } from "./singlepagination";

const SkillCard = ({ title, skills }) => {
  return (
    <div className="flex shadow-lg rounded-lg  mt-5 lg:mt-10  p-2 lg:p-6 m-1 lg:m-4 flex-shrink-0 overflow-hidden w-[200px] md:w-[450px] lg:w-[580px] xl:w-[700px] 2xl:w-[800px] pt-20">
      <div className="flex-1">
        <h2 className="lg:text-xl font-semibold mb-10 text-white">{title}</h2>
        <ul className="space-y-4">
          {skills.map((skill, index) => (
            <li key={index}>
              <div className="flex justify-between">
                <span className="text-gray-700 !text-xl">{skill.name}</span>
                <span className="text-sm text-gray-600">{skill.progress}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: `${skill.progress}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillData = [
    {
      title: "Frontend Development",
      skills: [
        { name: "ReactJS", progress: 75 },
        { name: "JavaScript", progress: 70 },
        { name: "Next.js", progress: 60 },
        { name: "TypeScript", progress: 65 },
        { name: "TailwindCSS", progress: 80 },
        { name: "HTML", progress: 85 },
        { name: "CSS", progress: 80 },
        { name: "SASS", progress: 70 },
        { name: "Redux", progress: 65 },
        { name: "Bootstrap", progress: 60 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", progress: 50 },
        { name: "GraphQL", progress: 60 },
        { name: "Java", progress: 60 },
        { name: "Python", progress: 65 },
        { name: "SQL", progress: 65 },
        { name: "SQL", progress: 50 },
      ],
    },
    {
      title: "Content Management",
      skills: [
        { name: "PHP/WordPress", progress: 55 },
        { name: "Contentful", progress: 70 },
        { name: "Chart.js", progress: 50 },
      ],
    },
    {
      title: "Testing & Programming",
      skills: [
        { name: "Jest Unit Testing", progress: 65 },
        { name: "Storybook", progress: 65 },
        { name: "C/C++", progress: 50 },
        { name: "Integration Testing", progress: 60 },
      ],
    },
    {
      title: "Design Tools",
      skills: [
        { name: "Figma", progress: 75 },
        { name: "Adobe", progress: 60 },
        { name: "Canva", progress: 70 },
      ],
    },
    {
      title: "Project Management",
      skills: [
        { name: "JIRA", progress: 80 },
        { name: "Monday", progress: 60 },
        { name: "Azure Boards", progress: 60 },
        { name: "Agile", progress: 75 },
        { name: "Scrum", progress: 65 },
      ],
    },
    {
      title: "Operating Systems",
      skills: [
        { name: "Windows", progress: 65 },
        { name: "macOS", progress: 60 },
        { name: "Ubuntu", progress: 55 },
      ],
    },
    {
      title: "DevOps Tools",
      skills: [
        { name: "GitHub", progress: 70 },
        { name: "GitLab", progress: 65 },
        { name: "Netlify", progress: 60 },
        { name: "Render", progress: 65 },
        { name: "ESLint", progress: 65 },
        { name: "Husky", progress: 65 },
        { name: "Prettier", progress: 70 },
        { name: "Jenkins", progress: 65 },
        { name: "Docker", progress: 60 },
      ],
    },
    {
      title: "Others",
      skills: [
        { name: "Amazon AWS", progress: 55 },
        { name: "AI/ML", progress: 50 },
        { name: "Google Search", progress: 70 },
        { name: "RESTful APIs", progress: 65 },
        { name: "Microservices Architecture", progress: 60 },
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1);

  const handlePaginationChange = (page) => {
    setActiveIndex(page);
  };

  const getActiveCardIndex = (index) => {
    if (index > skillData.length) {
      return 1;
    } else if (index < 1) {
      return skillData.length;
    }
    return index;
  };

  const currentCards = skillData
    .concat(skillData)
    .slice(activeIndex - 1, activeIndex + 4);

  return (
    <div className="flex justify-center h-auto overflow-hidden">
      <div className="relative max-w-screen-sm lg:max-w-screen-xs xl:max-w-screen-sm 2xl:max-w-screen-md 3xl:max-w-screen-xl">
        <div
          className="flex transition-all duration-500 ease-in-out"
          style={{ transform: `translateX-2%)` }}
        >
          {currentCards.map((data, index) => (
            <SkillCard key={index} title={data.title} skills={data.skills} />
          ))}
        </div>
      </div>
      <div className="absolute">
        <SimplePagination
          active={activeIndex}
          onPageChange={(page) =>
            handlePaginationChange(getActiveCardIndex(page))
          }
          totalPages={skillData.length}
        />
      </div>
    </div>
  );
};

export default Skills;
