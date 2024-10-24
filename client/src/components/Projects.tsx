import { HashLink } from "react-router-hash-link";
import WithComponentHeader from "./WithComponentHeader";
import { Project, projectsData } from "../utils/utils";

const Projects = () => {
  const frontendUrl =
    import.meta.env.NODE_ENV == "production"
      ? import.meta.env.VITE_PROD_FRONTEND_URL
      : import.meta.env.VITE_DEV_FRONTEND_URL;
  return (
    <WithComponentHeader id="projects" header="Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsData.map((each: Project, index: number) => {
          return (
            <div
              key={index}
              className="boder-primary-borderLight dark:borer-primary-borderDark border-2 bg-gray-100  space-y-5 p-6 rounded-3xl "
            >
              <img
                src={`${frontendUrl}/${each.imageUrl}`}
                alt=""
                className="transition-transform duration-1000 ease-in-out transform hover:scale-105 rounded-3xl block min-h-[220px] object-cover "
              />
              <div className="flex  justify-between items-center px-3">
                <h1 className="text-2xl font-semibold ">{each.title}</h1>
                <HashLink
                  to={"/project/" + each.id}
                  className="px-6 p-2 rounded-lg bg-black text-white"
                >
                  Explore
                </HashLink>
              </div>
            </div>
          );
        })}
      </div>
    </WithComponentHeader>
  );
};

export default Projects;
