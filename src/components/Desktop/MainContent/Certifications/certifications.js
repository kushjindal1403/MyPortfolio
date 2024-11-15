import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";
import Google from "../../../../images/google.png";
import Automation from "../../../../images/automationany.jpeg";
import Udemy from "../../../../images/Udemy.png";
import AWS from "../../../../images/AWS.png";

const certificationsData = [
  {
    name: "Responsive Web Design",
    description:
      "A certification from FreeCodeCamp covering the fundamentals of responsive web design using HTML, CSS, and JavaScript.",
    image: Udemy,
    alt: "FreeCodeCamp",
  },
  {
    name: "Robotics Process Automation",
    description:
      "Automation Anywhere's certification in Robotics Process Automation (RPA), focusing on automating repetitive tasks using bots.",
    image: Automation,
    alt: "Automation Anywhere",
  },
  {
    name: "Google Technical Support Professional",
    description:
      "A Google certification that covers essential technical support skills, including troubleshooting and system management.",
    image: Google,
    alt: "Google",
  },
  {
    name: "Getting Started with AWS",
    description:
      "Amazon's introductory certification for cloud computing, focusing on AWS services and basic cloud architecture.",
    image: AWS,
    alt: "AWS",
  },
  {
    name: "Python & Java Programming",
    description:
      "Certifications from Udemy in Python and Java programming, covering the basics of object-oriented programming and software development.",
    image: Udemy,
    alt: "Udemy",
  },
  {
    name: "Complete Graphics Designing",
    description:
      "A comprehensive graphics design certification from Udemy, covering design principles, tools, and software like Photoshop and Illustrator.",
    image: Udemy,
    alt: "Udemy",
  },
  {
    name: "Complete Web Development Bootcamp",
    description:
      "Udemy's Full Stack Web Development Bootcamp certification, covering front-end and back-end technologies like HTML, CSS, JavaScript, and Node.js.",
    image: Udemy,
    alt: "Udemy",
  },
];

const Certifications = () => {
  return (
    <div className="projects-div">
      <hr className="my-10" />
      <h3
        id="Certification"
        className="pt-5 pb-5 text-white text-left text-base font-semibold"
      >
        Certifications
      </h3>
      <h2 className="text-white text-left text-4xl font-thin pb-5">
        My Earnings
      </h2>
      <Card className="w-full bg-opacity-0">
        <List>
          {certificationsData.map((cert, index) => (
            <ListItem key={index}>
              <ListItemPrefix>
                <Avatar
                  variant="circular"
                  className="h-auto w-20"
                  alt={cert.alt}
                  src={cert.image}
                />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="white">
                  {cert.name}
                </Typography>
                <Typography
                  variant="small"
                  color="cyan"
                  className="font-normal"
                >
                  {cert.description}
                </Typography>
              </div>
            </ListItem>
          ))}
        </List>
      </Card>
      <hr className="my-10" />
    </div>
  );
};

export default Certifications;
