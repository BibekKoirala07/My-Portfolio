import { Project } from "../../utils/projects";

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

export default ProjectCard;