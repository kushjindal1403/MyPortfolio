import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import {
  BuildingLibraryIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const Education = () => {
  return (
    <div className="projects-div">
      <h3
        id="Education"
        className="pt-5 text-white text-left text-base font-semibold"
      >
        Education
      </h3>
      <h2 className="text-white text-left text-4xl font-thin pb-5">
        My Learning
      </h2>
      <div className="w-full pb-10">
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2">
                <AcademicCapIcon className="h-8 w-8" />
              </TimelineIcon>
              <Typography
                variant="h5"
                color="lime"
                className="text-start text-[16px] md:text-lg g:text-xl"
              >
                Bachelor of Engineering in Information Science and Engineering,
                Acharya Institute of Technology (2018 - 2022)
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                color="gary"
                className="font-normal text-gray-600 text-start text-[12px] md:text-md lg:text-lg"
              >
                At Photon Interactive, led a transition to a headless eCommerce
                system, resulting in a 30% improvement in page load times and a
                20% increase in conversion rates, generating $200,000 in
                revenue. Developed full-stack features with ReactJS and GraphQL,
                cutting maintenance costs by 15%. Collaborated with testing and
                DevOps teams to optimize deployment times by 25% using tools
                like Netlify and ESLint. Also enhanced accessibility, achieving
                a 40% increase in accessibility scores.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader>
              <TimelineIcon className="p-2">
                <BuildingLibraryIcon className="h-8 w-8" />
              </TimelineIcon>
              <Typography
                variant="h5"
                color="lime"
                className="text-start text-[16px] md:text-lg g:text-xl"
              >
                Higher Education Major in Computer Science, SCPUC (2016 - 2018)
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                color="gary"
                className="font-normal text-gray-600 text-start text-[12px] md:text-md lg:text-lg"
              >
                Engineered a responsive e-commerce interface with React.js and
                Redux, improving user engagement by 60% and reducing drop-offs
                by 25%. Migrated the platform from WordPress/PHP to a modern
                frontend setup, achieving a 40% performance boost and 20% cost
                savings. Integrated Contentful CMS, cutting content update time
                by 50%, and improved SEO, resulting in a 25% rise in organic
                traffic. Maintained high project efficiency, achieving a 95%
                on-time delivery rate.
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
      <hr />
    </div>
  );
};

export default Education;
