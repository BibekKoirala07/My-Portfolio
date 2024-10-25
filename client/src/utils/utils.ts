export const navLinks = [
  {
    href: "/#about-me",
    label: "About Me",
  },
  {
    href: "/#experience",
    label: "Experience",
  },
  {
    href: "/#projects",
    label: "Projects",
  },
  {
    href: "/#contact-me",
    label: "Contact",
  },
];

export interface Project {
  id: number;
  title: string;
  imageUrl: string;
  subdescription: string;
  githubUrl: string;
  liveDemoUrl?: string;
  description: string;
  isLiveDemoDisabled?: boolean;
  technologiesUsed: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Effix",
    subdescription: "",
    description: "",
    imageUrl: "Effix-pictureone.jpg",
    githubUrl: "https://github.com/BibekKoirala07/Effix",
    liveDemoUrl: "",
    isLiveDemoDisabled: false,
    technologiesUsed: [
      "HTML",
      "CSS",
      "JS",
      "React",
      "Node",
      "Express",
      "MongoDB",
    ],
  },
  {
    id: 2,
    title: "Blog App",
    imageUrl: "Blog-pictureone.jpg",
    subdescription: "",
    description: "",

    githubUrl: "https://github.com/BibekKoirala07/MERN-Blog",
    liveDemoUrl: "",
    isLiveDemoDisabled: false,
    technologiesUsed: [
      "HTML",
      "CSS",
      "JS",
      "React",
      "Node",
      "Express",
      "MongoDB",
    ],
  },
  {
    id: 3,
    title: "Chat App",
    subdescription: "",
    description: "",

    imageUrl: "Chat-pictureone.jpg",
    githubUrl: "https://github.com/BibekKoirala07/MERN-ChatApp-simple",
    isLiveDemoDisabled: true,
    liveDemoUrl: "",
    technologiesUsed: [
      "HTML",
      "CSS",
      "JS",
      "React",
      "Node",
      "Express",
      "MongoDB",
      "Socket",
    ],
  },
  {
    id: 4,
    title: "Movie App",
    subdescription: "",
    description: "",

    imageUrl: "Movie-With-Redux-pictureone.jpg",
    githubUrl: "https://github.com/BibekKoirala07/Movie-with-Redux",
    liveDemoUrl: "https://simple-movie-app-1.onrender.com",
    isLiveDemoDisabled: false,
    technologiesUsed: [
      "HTML",
      "CSS",
      "JS",
      "React",
      "Node",
      "Express",
      "MongoDB",
    ],
  },
];
