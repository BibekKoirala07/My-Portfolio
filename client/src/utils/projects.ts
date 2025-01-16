export interface Project {
  id: number;
  title: string;
  imageUrl: string;
  shortDescription: string;
  githubUrl: string;
  liveDemoUrl?: string;
  expandedDescription: string;
  isLiveDemoDisabled?: boolean;
  featuresAvailable: string[];
  technologiesUsed: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Effix",
    shortDescription: "",
    expandedDescription: "",
    imageUrl: "Effix-pictureone.jpg",
    githubUrl: "https://github.com/BibekKoirala07/Effix",
    liveDemoUrl: "",
    isLiveDemoDisabled: true,
    featuresAvailable: [],
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
    shortDescription:
      "Welcome to my blog app, where you can explore engaging content designed just for you! With role-based authentication, you’ll enjoy a personalized experience—whether you’re reading, contributing, or managing content. Dive in and start your blogging journey today",
    expandedDescription: "real",
    featuresAvailable: ["role bases Authentication"],

    githubUrl: "https://github.com/BibekKoirala07/MERN-Blog",
    liveDemoUrl: "",
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
    id: 3,
    title: "Chat App",
    shortDescription:
      "Hey there! Welcome to my chat app, where chatting with friends is super easy and fun. Whether you want to catch up in a private one-on-one conversation or jump into a lively group chat, this app has you covered. Stay connected, share laughs, and make every conversation memorable!",
    expandedDescription: "real",
    featuresAvailable: ["Single and Group Chat"],

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
    githubUrl: "https://github.com/BibekKoirala07/Simple-Movie-App",
    liveDemoUrl: "https://simple-movie-app-1.onrender.com",
    isLiveDemoDisabled: false,
    featuresAvailable: ["Google OAuth Authentication"],
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
