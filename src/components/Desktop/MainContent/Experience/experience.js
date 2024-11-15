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
  BuildingOfficeIcon,
  BuildingOffice2Icon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";

const Experience = () => {
  return (
    <div className="projects-div">
      <h3
        id="Experience"
        className="pt-5 pb-5 text-white text-left text-base font-semibold"
      >
        Experience
      </h3>
      <h2 className="text-white text-left text-4xl font-thin pb-5">My Works</h2>
      <div className="w-full pb-10">
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2">
                <BriefcaseIcon className="h-8 w-8" />
              </TimelineIcon>
              <Typography
                variant="h5"
                color="lime"
                className="text-start text-[16px] md:text-lg g:text-xl"
              >
                Software Engineer, Photon Interactive (Jan 2024 - Present)
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
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2">
                <BuildingOffice2Icon className="h-8 w-8" />
              </TimelineIcon>
              <Typography
                variant="h5"
                color="lime"
                className="text-start text-[16px] md:text-lg g:text-xl"
              >
                Frontend Software Developer, LeavesTech Private Limited (Oct
                2022 - Dec 2023)
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
          <TimelineItem>
            <TimelineHeader>
              <TimelineIcon className="p-2">
                <BuildingOfficeIcon className="h-8 w-8" />
              </TimelineIcon>
              <Typography
                variant="h5"
                color="lime"
                className="text-start text-[16px] md:text-lg g:text-xl"
              >
                Full Stack Web Developer, DigiAdd Technologies (Sep 2021 - Oct
                2021)
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography
                color="gary"
                className="font-normal text-gray-600 text-start text-[12px] md:text-md lg:text-lg"
              >
                Developed a Hospital Management System, reducing patient wait
                times by 20% and increasing operational efficiency by 30%.
                Collaborated on responsive layouts with UX/UI designers,
                boosting patient portal engagement by 25%. Conducted code
                reviews and mentored junior developers, reducing error rates by
                15%. Optimized data retrieval with SQL and PHP, improving mobile
                compatibility by 35%.
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
      <hr />
    </div>
  );
};

export default Experience;
