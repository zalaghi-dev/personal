interface Skill {
  title: string;
  rate: "pro" | "mid" | "base";
  img?: string;
}

export const mainSkills: Skill[] = [
  {
    title: "Nestjs",
    rate: "pro",
    img: "https://cdn.simpleicons.org/nestjs/E0234E",
  },
  {
    title: "PostgresSql",
    rate: "mid",
    img: "https://cdn.simpleicons.org/postgresql/4169E1",
  },
  {
    title: "SocketIo",
    rate: "pro",
    img: "https://cdn.simpleicons.org/socketdotio/E0234E",
  },
  {
    title: "MongoDb",
    rate: "mid",
    img: "https://cdn.simpleicons.org/mongodb/47A248",
  },
  {
    title: "ReactJs",
    rate: "pro",
    img: "https://cdn.simpleicons.org/react/61DAFB",
  },
  {
    title: "NextJs",
    rate: "mid",
    img: "https://cdn.simpleicons.org/nextdotjs/2496ED",
  },
  {
    title: "Shadcn",
    rate: "pro",
    img: "https://cdn.simpleicons.org/shadcnui/2496ED",
  },
  {
    title: "Docker",
    rate: "base",
    img: "https://cdn.simpleicons.org/docker/2496ED",
  },
  {
    title: "TypeScript",
    rate: "mid",
    img: "https://cdn.simpleicons.org/typescript/3178C6",
  },
  {
    title: "GraphQL",
    rate: "base",
    img: "https://cdn.simpleicons.org/graphql/E10098",
  },
  {
    title: "Redux",
    rate: "pro",
    img: "https://cdn.simpleicons.org/redux/764ABC",
  },
  {
    title: "ExpressJs",
    rate: "base",
    img: "https://cdn.simpleicons.org/express/E10098",
  },
  {
    title: "Material UI",
    rate: "mid",
    img: "https://cdn.simpleicons.org/mui/007FFF",
  },
  {
    title: "TailwindCSS",
    rate: "pro",
    img: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  },
  {
    title: "React Native",
    rate: "base",
    img: "https://cdn.simpleicons.org/react/61DAFB",
  },
  {
    title: "Git & Github",
    rate: "mid",
    img: "https://cdn.simpleicons.org/git/FB7E7E",
  },
];
