import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import {
  PlusIcon,
  HomeIcon,
  CogIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import Kush from "../../images/KUSH.jpg";

const SpeedDialComponent = () => {
  const labelProps = {
    variant: "small",
    color: "blue-gray",
    className:
      "absolute w-[150px] top-2/4 -left-[50px] -translate-y-2/4 -translate-x-3/4 font-normal",
  };

  const handleClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      {/* Positioning the SpeedDial fixed to bottom-right */}
      <div className="fixed bottom-4 right-4 z-50">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full !bg-white">
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45 !text-black" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <SpeedDialAction className="relative [&_p]:text-white [&_p]:bg-black [&_p]:p-2 [&_p]:text-md [&_p]:font-extrabold">
              <Avatar src={Kush} variant="rounded" />
            </SpeedDialAction>
            <SpeedDialAction
              onClick={() => handleClick("#About")}
              className="relative [&_p]:text-white [&_p]:bg-black [&_p]:p-2 [&_p]:text-md [&_p]:font-extrabold"
            >
              <HomeIcon className="h-5 w-5" />
              <Typography {...labelProps}>About Me</Typography>
            </SpeedDialAction>
            <SpeedDialAction
              onClick={() => handleClick("#Projects")}
              className="relative [&_p]:text-white [&_p]:bg-black [&_p]:p-2 [&_p]:text-md [&_p]:font-extrabold"
            >
              <CogIcon className="h-5 w-5" />
              <Typography {...labelProps}>Projects</Typography>
            </SpeedDialAction>
            <SpeedDialAction
              onClick={() => handleClick("#Experience")}
              className="relative [&_p]:text-white [&_p]:bg-black [&_p]:p-2 [&_p]:text-md [&_p]:font-extrabold"
            >
              <Square3Stack3DIcon className="h-5 w-5" />
              <Typography {...labelProps}>Experience</Typography>
            </SpeedDialAction>
            <SpeedDialAction
              onClick={() => handleClick("#Education")}
              className="relative [&_p]:text-white [&_p]:bg-black [&_p]:p-2 [&_p]:text-md [&_p]:font-extrabold"
            >
              <HomeIcon className="h-5 w-5" />
              <Typography {...labelProps}>Education</Typography>
            </SpeedDialAction>
            <SpeedDialAction
              onClick={() => handleClick("#Interests")}
              className="relative [&_p]:text-white [&_p]:bg-black [&_p]:p-2 [&_p]:text-md [&_p]:font-extrabold"
            >
              <CogIcon className="h-5 w-5" />
              <Typography {...labelProps}>What I Do ?</Typography>
            </SpeedDialAction>
            <SpeedDialAction
              onClick={() => handleClick("#Certification")}
              className="relative [&_p]:text-white [&_p]:bg-black [&_p]:p-2 [&_p]:text-md [&_p]:font-extrabold"
            >
              <Square3Stack3DIcon className="h-5 w-5" />
              <Typography {...labelProps}>Certifications</Typography>
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
};

export default SpeedDialComponent;
