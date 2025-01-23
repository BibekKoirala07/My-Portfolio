import { useState } from "react";
import ComponentBox from "../components/ComponentBox";
import CollectionOfButton from "../components/CollectionOfButton";
import TrailingButton from "../components/TrailingButton";
import { projectsData } from "../utils/projects";
import ProjectCard from "../components/projects/Project";

const Projects = () => {
  const [selected, setSelected] = useState("All");
  const handleSelect = (string: any) => {
    setSelected(string);
  };

  const categories = ["All", "Frontend", "Full Stack", "AI/ML", "Mobile"];

  // console.log("selected", selected);

  const filteredProjects =
    selected === "All"
      ? projectsData
      : projectsData.filter((project: any) =>
          project.category.includes(selected)
        );

  // console.log("filtered Projects", filteredProjects);

  return (
    <ComponentBox
      header="My Projects"
      description="    A showcase of my latest work, featuring web applications, mobile apps,
          and innovative software solutions."
    >
      <div className="my-6">
        <CollectionOfButton
          buttons={categories}
          selected={selected}
          onClick={handleSelect}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <TrailingButton text="Show More..." onClick={() => {}} />
    </ComponentBox>
  );
};

export default Projects;
