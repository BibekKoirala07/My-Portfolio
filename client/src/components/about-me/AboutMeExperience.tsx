import {
  education,
  experiences,
  typeEducation,
  typeExperiences,
} from "../../utils/aboutme";
import EachAboutMeComponent from "./EachAboutMeComponent";

const EachModuleInsideExperience = ({
  children,
  eachModuleHeaderText,
}: {
  children: React.ReactNode;
  eachModuleHeaderText: string;
}) => {
  return (
    <div className="border-2 flex flex-col  h-full p-3 pb-5 rounded-xl border-gray-600">
      <h1 className="text-xl font-normal mb-3">{eachModuleHeaderText}</h1>
      <div className="flex-1">{children}</div>
    </div>
  );
};

const ExperiencesComponent = () => {
  return (
    <EachModuleInsideExperience eachModuleHeaderText="Work Experience">
      <div className=" h-full">
        {experiences.map((each: typeExperiences, index: number) => {
          return (
            <div className=" w-full pb-9 relative h-full" key={index}>
              <h1 className="text-lg dark:text-dark-textPrimary">
                {each.role}
              </h1>
              <p className="text-sm dark:text-dark-textSecondary">
                {each.period}
              </p>
              <p className="text-sm dark:text-dark-textSecondary">
                {each.description}
              </p>
              <div className=" mt-3 flex gap-2 flex-wrap">
                {each.technologies.map((each: any, index: number) => {
                  return (
                    <p
                      key={index}
                      className="p-1 text-gray-300 rounded-lg px-4 border-2 border-gray-500"
                    >
                      {each}
                    </p>
                  );
                })}
              </div>
              {/* <div className="border-b mb-auto border-gray-500" /> */}
              <div className="absolute bottom-0 left-0 right-0 border-b border-gray-500" />
            </div>
          );
        })}
      </div>
    </EachModuleInsideExperience>
  );
};

const EducationComponent = () => {
  return (
    <EachModuleInsideExperience eachModuleHeaderText="Education">
      <div>
        {education.map((each: typeEducation, index: number) => {
          return (
            <div className="w-full pb-9 relative h-full " key={index}>
              <h1 className="text-lg dark:text-dark-textPrimary">
                {each.degree}
              </h1>
              <p className="text-sm dark:text-dark-textSecondary">
                {each.period}
              </p>
              <p className="text-sm dark:text-dark-textSecondary">
                Relevant Courses : {each.relevantCourses.join(", ")}
              </p>

              {/* <div className="border-b mt-4 border-gray-500" /> */}
              <div className="absolute bottom-0 left-0 right-0 border-b border-gray-500" />
            </div>
          );
        })}
      </div>
    </EachModuleInsideExperience>
  );
};

const AboutMeExperience = () => {
  return (
    <EachAboutMeComponent headerText="My Experiences">
      <div className="grid gap-3 md:grid-cols-3">
        <div className="md:col-span-2 ">
          <ExperiencesComponent />
        </div>
        <div className="">
          <EducationComponent />
        </div>
      </div>
    </EachAboutMeComponent>
  );
};

export default AboutMeExperience;
