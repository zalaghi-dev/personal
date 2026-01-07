export interface Technology {
  name: string;
  category: "frontend" | "backend";
  logo: string;
}

export const technologies: Technology[] = [
  // Frontend
  {
    name: "React.js",
    category: "frontend",
    logo: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
  },
  {
    name: "Next.js",
    category: "frontend",
    logo: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white",
  },
  {
    name: "Redux",
    category: "frontend",
    logo: "https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white",
  },
  {
    name: "TailwindCSS",
    category: "frontend",
    logo: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
  },
  {
    name: "Material UI",
    category: "frontend",
    logo: "https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=mui&logoColor=white",
  },
  {
    name: "React Native",
    category: "frontend",
    logo: "https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
  },
  {
    name: "Sass",
    category: "frontend",
    logo: "https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white",
  },
  {
    name: "HTML5",
    category: "frontend",
    logo: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
  },
  {
    name: "CSS3",
    category: "frontend",
    logo: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
  },
  // Backend
  {
    name: "NestJS",
    category: "backend",
    logo: "https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white",
  },
  {
    name: "Express.js",
    category: "backend",
    logo: "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white",
  },
  {
    name: "JWT",
    category: "backend",
    logo: "https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white",
  },
  {
    name: "Socket.IO",
    category: "backend",
    logo: "https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white",
  },
  {
    name: "GraphQL",
    category: "backend",
    logo: "https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white",
  },
  {
    name: "PostgreSQL",
    category: "backend",
    logo: "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white",
  },
  {
    name: "MongoDB",
    category: "backend",
    logo: "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
  },
  {
    name: "TypeScript",
    category: "frontend",
    logo: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
  },
];
