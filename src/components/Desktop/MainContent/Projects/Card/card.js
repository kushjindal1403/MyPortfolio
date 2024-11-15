import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import React from "react";
import CardOpen from "./Cardopen";

const ProjectCard = ({
  imageUrl,
  buttonText,
  buttonLink,
  description,
  desc,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <Card
      shadow={false}
      onClick={handleOpen}
      className="relative w-full md:max-w-md lg:max-w-lg xl:max-w-xl mt-5 lg:mt-0 mx-auto grid items-end justify-center overflow-hidden text-center"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/90 via-black/70 opacity-[1.5]" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12 text-center">
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          {buttonText}
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400">
          {description}
        </Typography>
        <Button href={buttonLink} className="bg-white text-black">
          Know More
        </Button>
      </CardBody>
      <CardOpen
        open={open}
        handleOpen={handleOpen}
        title={buttonText}
        description={desc}
      />
    </Card>
  );
};

export default ProjectCard;
