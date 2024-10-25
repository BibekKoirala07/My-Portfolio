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
    description: "",
    imageUrl: "Effix-pictureone.jpg",
    githubUrl: "https://github.com/BibekKoirala07/Effix",
    liveDemoUrl: "https://e-commerce-demo.com",
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
    description: "",

    githubUrl: "https://github.com/BibekKoirala07/MERN-Blog",
    liveDemoUrl: "https://weather-dashboard-demo.com",
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
    title: "Chat",
    description: "",

    imageUrl: "Chat-pictureone.jpg",
    githubUrl: "https://github.com/BibekKoirala07/MERN-ChatApp-simple",
    isLiveDemoDisabled: true,
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
    id: 4,
    title: "Movie App",
    description: "",

    imageUrl: "Movie-With-Redux-pictureone.jpg",
    githubUrl: "https://github.com/BibekKoirala07/Movie-with-Redux",
    liveDemoUrl: "https://simple-movie-app-0oiy.onrender.com",
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
