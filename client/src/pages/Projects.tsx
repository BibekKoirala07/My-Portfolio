// import { useState } from "react";

// const GithubIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="20"
//     height="20"
//     fill="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
//   </svg>
// );

// const LinkIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="20"
//     height="20"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
//     />
//   </svg>
// );

// const ProjectCard = ({
//   title,
//   description,
//   image,
//   tags,
//   github,
//   demo,
//   progress,
// }) => (
//   <div className="bg-zinc-900 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-800/50">
//     <div className="relative aspect-video overflow-hidden">
//       <img
//         src={image}
//         alt={title}
//         className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
//       />
//       <div className="absolute top-3 right-3 bg-zinc-900/90 px-3 py-1 rounded-full text-xs text-white">
//         {progress}% Complete
//       </div>
//     </div>

//     <div className="p-6">
//       <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
//       <p className="text-zinc-300 text-sm mb-4">{description}</p>

//       <div className="flex flex-wrap gap-2 mb-6">
//         {tags.map((tag, index) => (
//           <span
//             key={index}
//             className="bg-zinc-800 text-zinc-300 text-xs px-3 py-1 rounded-full"
//           >
//             {tag}
//           </span>
//         ))}
//       </div>

//       <div className="flex gap-4">
//         <a
//           href={github}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center gap-2 text-white hover:text-zinc-300 transition-colors"
//         >
//           <GithubIcon /> Code
//         </a>
//         <a
//           href={demo}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center gap-2 text-white hover:text-zinc-300 transition-colors"
//         >
//           <LinkIcon /> Live Demo
//         </a>
//       </div>
//     </div>
//   </div>
// );

// const Projects = () => {
//   const [filter, setFilter] = useState("All");

//   const projectsData = [
//     {
//       title: "E-commerce Platform",
//       description:
//         "A full-stack e-commerce platform built with Next.js, featuring user authentication, product management, and secure payment integration.",
//       image: "/api/placeholder/800/400",
//       tags: ["Next.js", "MongoDB", "Stripe", "Tailwind"],
//       github: "https://github.com/username/project",
//       demo: "https://demo-link.com",
//       progress: 90,
//       category: "Full Stack",
//     },
//     {
//       title: "AI Image Generator",
//       description:
//         "An AI-powered image generation tool that creates unique artwork based on text descriptions using stable diffusion models.",
//       image: "/api/placeholder/800/400",
//       tags: ["React", "Python", "TensorFlow", "Flask"],
//       github: "https://github.com/username/project",
//       demo: "https://demo-link.com",
//       progress: 75,
//       category: "AI/ML",
//     },
//     {
//       title: "Task Management Dashboard",
//       description:
//         "A responsive task management system with real-time updates, team collaboration features, and performance analytics.",
//       image: "/api/placeholder/800/400",
//       tags: ["React", "Firebase", "Material-UI", "Chart.js"],
//       github: "https://github.com/username/project",
//       demo: "https://demo-link.com",
//       progress: 85,
//       category: "Frontend",
//     },
//   ];

//   const categories = ["All", "Frontend", "Full Stack", "AI/ML", "Mobile"];

//   const filteredProjects =
//     filter === "All"
//       ? projectsData
//       : projectsData.filter((project) => project.category === filter);

//   return (
//     <div className="min-h-screen text-white p-4 max-w-6xl mx-auto">
//       <div className="text-center mb-12">
//         <h1 className="text-3xl font-bold mb-4">My Projects</h1>
//         <p className="text-zinc-400 max-w-2xl mx-auto">
//           A showcase of my latest work, featuring web applications, mobile apps,
//           and innovative software solutions.
//         </p>
//       </div>

//       <div className="flex justify-center gap-2 mb-12 overflow-x-auto pb-2">
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => setFilter(category)}
//             className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
//               filter === category
//                 ? "bg-white text-black"
//                 : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredProjects.map((project, index) => (
//           <ProjectCard key={index} {...project} />
//         ))}
//       </div>

//       <div className="flex justify-center mt-12">
//         <button className=" bg-white px-8 py-2 rounded-lg  text-black font-medium transition-colors">
//           Show More Projects
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Projects;

import { useState } from "react";
import ComponentBox from "../components/ComponentBox";
import CollectionOfButton from "../components/CollectionOfButton";
import TrailingButton from "../components/TrailingButton";
import { Project, projectsData } from "../utils/projects";

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

const ProjectCard = ({
  title,
  shortDescription,
  expandedDescription,
  imageUrl,
  technologiesUsed,
  githubUrl,
  liveDemoUrl,
}: Project) => (
  <div className="rounded-lg p-3 bg-[#272729]">
    <div className="relative aspect-video overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="object-cover rounded-lg w-full h-full transition-transform duration-300 hover:scale-105"
      />
    </div>

    <div className="p-2 text-center">
      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      <p className="text-zinc-300 text-sm mb-4">{shortDescription}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {technologiesUsed.map((tag: any, index: number) => (
          <span
            className="bg-zinc-700 text-zinc-300 text-xs px-3 py-1 rounded-full"
            key={index}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white hover:text-zinc-300 transition-colors"
        >
          <GithubIcon /> Code
        </a>
        <a
          href={liveDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white hover:text-zinc-300 transition-colors"
        >
          <LinkIcon /> Live Demo
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [selected, setSelected] = useState("All");
  const handleSelect = (string: any) => {
    setSelected(string);
  };

  const categories = ["All", "Frontend", "Full Stack", "AI/ML", "Mobile"];

  const filteredProjects =
    selected === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selected);

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

      {/* <div>
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div> */}

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
