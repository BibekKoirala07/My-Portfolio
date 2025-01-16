export type typeTechStack = {
  name: string;
  img: string;
};

export const techStack: typeTechStack[] = [
  { name: "React", img: "react.png" },
  { name: "Next.js", img: "next.png" },
  { name: "TypeScript", img: "typescript.png" },
  { name: "Node.js", img: "node.png" },
  { name: "Python", img: "python.png" },
  { name: "MongoDB", img: "mongo.png" },
  { name: "PostgreSQL", img: "postgres.png" },
  { name: "AWS", img: "aws.png" },
  { name: "Docker", img: "docker.png" },
  { name: "Kubernetes", img: "kubernetes.jpg" },
  { name: "GraphQL", img: "graphql.png" },
  { name: "TailwindCSS", img: "aws.png" },
  { name: "Git", img: "git.png" },
  { name: "Nestjs", img: "nestjs.png" },
];

export type typeExperiences = {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
};

export const experiences: typeExperiences[] = [
  {
    role: "Junior Backend  Developer",
    company: "BrandBuilder Pvt. Ltd",
    period: "2024 - 2024",
    description:
      "During my time at BranBuilder, I contributed to the development of microservices for the customer-facing side of the Point of Sale (POS) system. My work focused on ensuring seamless customer interactions by building scalable, efficient, and reliable backend services tailored to POS functionality",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker",
      "Microservices",
    ],
  },
];

export type typeEducation = {
  degree: string;
  school: string;
  period: string;
  relevantCourses: string[];
};

export const education: typeEducation[] = [
  {
    degree: "Bachelor's in Computer Engineering",
    school: "Pokhara University",
    period: "2019 - 2024",
    relevantCourses: [
      "Data Structures and Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Web Development",
      "Software Engineering",
      "Artificial Intelligence",
      "Cloud Computing",
      "Distributed Systems",
      "Compiler Design",
      "Programming Paradigms",
      "Computer Architecture",
    ],
  },
];
