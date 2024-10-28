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
  shortDescription: string;
  githubUrl: string;
  liveDemoUrl?: string;
  expandedDescription: string;
  isLiveDemoDisabled?: boolean;
  technologiesUsed: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Effix",
    shortDescription: "real",
    expandedDescription: "not real",
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
    shortDescription: "real",
    expandedDescription: "real",

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
    shortDescription: "real",
    expandedDescription: "real",

    imageUrl: "Chat-pictureone.jpg",
    githubUrl: "https://github.com/BibekKoirala07/Chat-App",
    isLiveDemoDisabled: true,
    liveDemoUrl: "https://chat-app-frontend-fs89.onrender.com",
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
    shortDescription:
      " With the Simple Movie-app, you can easily browse and discover a wide variety of movies with an intuitive interface designed for seamless navigation. Whether you're searching for your favorite film or exploring new releases, this app makes finding the perfect movie quick and enjoyable.",
    expandedDescription: "real",

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
