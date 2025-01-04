import React from "react";
import { projectsData } from "../utils/utils";

const Projects = () => {
  const projectStats = {
    total: projectsData.length,
    completed: projectsData.filter((project) => !project.isLiveDemoDisabled)
      .length,
    inProgress: projectsData.filter((project) => project.isLiveDemoDisabled)
      .length,
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 scrollbar-hide text-white rounded-xl space-y-8 md:space-y-10">
      {/* Original Header Section */}
      <div className="">
        <h2 className="text-2xl font-semibold">Projects</h2>
      </div>

      {/* Stats Section */}
      <div className="bg-[#272729] rounded-2xl p-4 md:p-6 shadow-lg border border-gray-800">
        <div className="flex flex-col sm:flex-row flex-wrap justify-between items-center gap-4 md:gap-6">
          <div className="text-center w-full sm:w-auto">
            <p className="text-gray-400 text-sm font-medium mb-1">
              Total Projects
            </p>
            <p className="text-2xl font-bold">{projectStats.total}</p>
          </div>
          <div className="text-center w-full sm:w-auto">
            <p className="text-gray-400 text-sm font-medium mb-1">Completed</p>
            <p className="text-2xl font-bold text-green-400">
              {projectStats.completed}
            </p>
          </div>
          <div className="text-center w-full sm:w-auto">
            <p className="text-gray-400 text-sm font-medium mb-1">
              In Progress
            </p>
            <p className="text-2xl font-bold text-blue-400">
              {projectStats.inProgress}
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full sm:w-auto">
            <p className="text-gray-400 text-sm font-medium text-center sm:text-left">
              Progress
            </p>
            <div className="w-full sm:w-32 bg-[#272729] border border-gray-700 rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-400 to-green-400 transition-all duration-500"
                style={{
                  width: `${
                    (projectStats.completed / projectStats.total) * 100
                  }%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-[#272729] rounded-xl overflow-hidden transform transition-all duration-300 {hover:scale-[1.02]} hover:shadow-2xl border border-gray-800 group"
          >
            {/* Project Image */}
            <div className="relative h-40 sm:h-48 overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transform {group-hover:scale-110 }transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#272729] to-transparent opacity-90"></div>
            </div>

            {/* Project Content */}
            <div className="p-4 md:p-6 space-y-3 md:space-y-4">
              <h3 className="text-lg md:text-xl font-bold">{project.title}</h3>
              <p className="text-gray-400 text-xs md:text-sm">
                {project.shortDescription || "No description available"}
              </p>

              {/* Technologies */}
              <div>
                <p className="text-xs md:text-sm text-gray-400 mb-2 font-medium">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologiesUsed.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 md:px-3 py-1 text-xs rounded-full border border-gray-700 bg-[#272729] text-gray-300 hover:border-gray-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3 md:gap-4 pt-2 md:pt-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-xs md:text-sm px-3 md:px-4 py-2 rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
                >
                  View Code
                </a>
                {!project.isLiveDemoDisabled && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-xs md:text-sm px-3 md:px-4 py-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border border-blue-500/30 transition-all duration-300"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
