export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  size?: "small" | "large"; // Useful for the bento grid layout
}

export const projects: Project[] = [
  {
    id: "cineapp",
    title: "CineApp",
    description: "Guía definitiva de entretenimiento desarrollada con Next.js 16 y Tailwind CSS. Explora películas, series y anime con una interfaz premium y modo oscuro..",
    tags: ["React", "Next.js", "Tailwind CSS"],
    github: "https://github.com/cristianpy09/CineApp", 
    link: "https://cine-app-dovl.vercel.app/", 
    size: "large",
  },
  {
    id: "lexikon",
    title: "Lexikon",
    description: "Minimalist reading experience for technical content.",
    tags: ["Next.js", "i11n"],
    github: "https://github.com/cristiancelis/lexikon",
    size: "small",
  },
  {
    id: "synthesis",
    title: "Synthesis",
    description: "Audio visualizer built with WebGL and React Three Fiber.",
    tags: ["Three.js", "GLSL"],
    github: "https://github.com/cristiancelis/synthesis",
    size: "small",
  },
  {
    id: "prismatic-ui",
    title: "Prismatic UI",
    description: "Design system library for professional web archives and internal tools.",
    tags: ["Radix", "Stitches", "TS"],
    github: "https://github.com/cristiancelis/prismatic-ui",
    size: "large",
  },
];
