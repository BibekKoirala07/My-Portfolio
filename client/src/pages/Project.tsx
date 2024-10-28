import { useParams } from "react-router-dom";
import { projectsData } from "../utils/utils";
import MyButton from "../components/MyButton";

const Project = () => {
  const { id } = useParams();
  const project = projectsData.filter(
    (each) => each.id.toString() == id?.toString()
  )[0];
  const frontendUrl =
    import.meta.env.VITE_NODE_ENV == "production"
      ? import.meta.env.VITE_PROD_FRONTEND_URL
      : import.meta.env.VITE_DEV_FRONTEND_URL;
  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4">
      <div className="text-center mb-12 space-y-14 mt-12">
        <h1 className="text-5xl dark:text-primaryText-dark font-bold mb-4 dark:text-theme-light">
          {project.title}
        </h1>
        <p
          className="text-lg text-balance dark:text-secondaryText-dark
           max-w-[700px]"
          style={{ lineHeight: "1.5" }}
        >
          {project.shortDescription}
        </p>
        <div className="space-x-4">
          <MyButton href={project.githubUrl}>
            <a target="_blank" href={project.githubUrl} className=" ">
              Github
            </a>
          </MyButton>
          <MyButton
            href={project.liveDemoUrl?.length ? project.liveDemoUrl : "/"}
          >
            <a
              target="_blank"
              href={project.liveDemoUrl?.length ? project.liveDemoUrl : "/"}
              className=" "
            >
              See Live
            </a>
          </MyButton>
        </div>
      </div>

      <div className="mb-16">
        <img
          src={`${frontendUrl}/${project.imageUrl}`}
          alt="Dopefolio Project"
          className="w-full max-w-4xl rounded-xl shadow-lg"
        />
      </div>

      {/* Project Overview Section */}
      <div className="w-full max-w-4xl text-left mb-16">
        <h2 className="text-3xl font-bold mb-6 dark:text-primaryText-dark">
          Project Overview
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {project.expandedDescription}
        </p>
        <p className="text-gray-600 leading-relaxed">
          Feel free to check out the Project by visiting the Project Link.
        </p>
      </div>

      <div className="w-full max-w-4xl text-left mb-16">
        <h2 className="text-2xl font-bold mb-6 dark:text-primaryText-dark">
          Tools Used
        </h2>
        <div className="flex flex-wrap gap-4">
          {project.technologiesUsed.map((each) => {
            return (
              <span
                key={each}
                className="px-4 py-2 dark:bg-componentBackground-dark dark:text-primaryText-dark  rounded-md"
              >
                {each}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
