import React from "react";

import WithComponentHeader from "./WithComponentHeader";

interface Skill {
  name: string;
  color: string;
  imagePath?: string;
}

interface Experience {
  year: string;
  role: string;
  company: string;
  description?: string;
}

interface SkillCardProps {
  skill: Skill;
  isColorMode: boolean;
}

interface ExperienceCardProps {
  experience: Experience;
  isColorMode: boolean;
}

interface SkillsExperiencesProps {
  isColorMode?: boolean;
}

const skillsData: Skill[] = [
  // { name: "Flutter", color: "#54C5F8", imagePath: "/flutter.png" },
  { name: "HTML5", color: "#E34F26", imagePath: "html5.png" },
  { name: "CSS3", color: "#1572B6", imagePath: "css.png" },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    imagePath: "javascript.png",
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    imagePath: "typescript.png",
  },
  {
    name: "React JS",
    color: "#61DAFB",
    imagePath: "react.png",
  },
  { name: "Vue", color: "#4FC08D", imagePath: "/vue.png" },
  { name: "Node.js", color: "#339933", imagePath: "/node.png" },
  { name: "Express.js", color: "#339933", imagePath: "/express.png" },
  {
    name: "GraphQL",
    color: "#E10098",
    imagePath: "graphql.png",
  },
  { name: "Git", color: "#F05032", imagePath: "/git.png" },
];

const experienceData: Experience[] = [
  {
    year: "2023-2024",
    role: "Junior Developer",
    company: "BrandBuilder",
    description: "I worked on the existing node api.",
  },
];

const SkillCard: React.FC<SkillCardProps> = ({ skill, isColorMode }) => {
  console.log("colorMode", isColorMode);
  const frontendUrl =
    import.meta.env.VITE_NODE_ENV == "production"
      ? import.meta.env.VITE_PROD_FRONTEND_URL
      : import.meta.env.VITE_DEV_FRONTEND_URL;
  return (
    <div className="flex dark:bg-componentBackground-dark flex-col gap-1  pt-3 pb-4  rounded-xl bg-gray-50 items-center">
      <div
        className={`w-16 h-16  rounded-full flex items-center justify-center mb-2 transition-all duration-300 group-hover:shadow-lg
         `}
      >
        <img
          src={`${frontendUrl}/${skill.imagePath}`}
          alt={skill.name}
          className=" object-contain h-12 w-12 hover:w-14 hover:h-14 transition-all delay-150 ease-in "
          color={skill.color}
        />
      </div>
      <span className="text-sm dark:text-componentText-dark text-center">
        {skill.name}
      </span>
    </div>
  );
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => (
  <div
    className="grid gap-5  p-3 px-3 dark:bg-componentBackground-dark rounded-lg"
    style={{ gridTemplateColumns: "100px 1fr" }}
  >
    <div className="text-center pt-0.5">
      <span className={`font-semibold dark:text-primaryText-dark `}>
        {experience.year}
      </span>
    </div>
    <div className="">
      <h3 className="font-semibold dark:text-secondaryText-dark">
        <span className="text-lg">{experience.role}</span> -{" "}
        <span className=" dark:text-secondaryText-dark opacity-85 text-sm">
          {experience.company}
        </span>
      </h3>
      {experience.description && (
        <p className=" text-sm dark:text-secondaryText-dark ">
          {experience.description}
        </p>
      )}
    </div>
  </div>
);

const SkillsExperiences: React.FC<SkillsExperiencesProps> = ({
  isColorMode = true,
}) => {
  return (
    <WithComponentHeader id="experience" header="Skills & Experience">
      <div className=" grid grid-cols-1 gap-8 md:gap-0 lg:grid-cols-2">
        <div className="md:pr-2">
          <h2 className="text-2xl text-primaryText-light dark:text-primaryText-dark font-semibold mb-4 text-center">
            Skills
          </h2>
          <div className="  px-3 md:py-7 grid grid-cols-2 md:grid-cols-3 gap-9">
            {skillsData.map((skill, index) => (
              <SkillCard key={index} skill={skill} isColorMode={isColorMode} />
            ))}
          </div>
        </div>

        <div className="lg:border-l px-4">
          <h2 className="text-2xl text-primaryText-light dark:text-primaryText-dark font-semibold mb-10 text-center">
            Experience
          </h2>
          <div className="">
            {experienceData.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                isColorMode={isColorMode}
              />
            ))}
          </div>
        </div>
      </div>
    </WithComponentHeader>
  );
};

export default SkillsExperiences;
