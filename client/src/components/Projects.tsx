import WithComponentHeader from "./WithComponentHeader";
import { Project, projectsData } from "../utils/utils";
import MyButton from "./MyButton";

const Projects = () => {
  const frontendUrl =
    import.meta.env.VITE_NODE_ENV == "production"
      ? import.meta.env.VITE_PROD_FRONTEND_URL
      : import.meta.env.VITE_DEV_FRONTEND_URL;
  return (
    <WithComponentHeader id="projects" header="Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsData.map((each: Project, index: number) => {
          return (
            <div
              key={index}
              className="   dark:bg-componentBackground-dark  space-y-5 p-6 rounded-3xl "
            >
              <img
                src={`${frontendUrl}/${each.imageUrl}`}
                alt=""
                className="transition-transform duration-1000 ease-in-out transform hover:scale-105 rounded-2xl block min-h-[220px] object-cover "
              />
              <div className="flex  justify-between items-center px-3">
                <h1 className="text-2xl font-semibold text-primaryText-light dark:text-primaryText-dark ">
                  {each.title}
                </h1>
                <MyButton href={"/project/" + each.id} className="py-2">
                  Explore
                </MyButton>
              </div>
            </div>
          );
        })}
      </div>
    </WithComponentHeader>
  );
};

export default Projects;
