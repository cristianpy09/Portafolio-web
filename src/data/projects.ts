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
    id: "Crisdrip-shop",
    title: "Crisdrip-shop",
    description: "Responsive online store built with Next.js and Tailwind CSS, featuring a product catalog, size and quantity selectors, and a functional shopping cart.",
    tags: ["Next.js", "react","tailwind CSS"],
    github: "https://github.com/cristianpy09/Crisdrip-shop",
    link: "https://crisdrip-shop.vercel.app/",
    size: "small",
  },
  {
    id: "NextCommerce",
    title: "NextCommerce",
    description: "E-commerce in NEXT.js and TypeScript with user management, strict typing and reusable UI components, designed to be modular and scalable.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/cristianpy09/NextCommerce_TS",
    link: "https://next-commerce-ts-two.vercel.app/",
    size: "small",
  },
  {
    id: "salesscope",
    title: "Salesscope",
    description: "A state-of-the-art cinematic dashboard designed for luminous clarity. Experience fluid animations and high-performance data visualization built with Framer Motion and Next.js.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/cristianpy09/salesscope-frontend",
    link: "https://salesscopeproject-frontend.vercel.app/",
    size: "large",
  },
  {
    id: "snacks-del-mar",
    title: "Snacks del mar",
    description: "Este proyecto es una aplicación web de alto rendimiento diseñada para un negocio familiar de gastronomía caribeña.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/cristianpy09/snacks-del-mar",
    link: "https://snacks-del-mar.vercel.app/",
    size: "small",
  },
];
