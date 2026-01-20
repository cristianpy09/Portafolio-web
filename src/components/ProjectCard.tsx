"use client";

import React from "react";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  link,
  github,
}) => {
  return (
    <div className="brutal-card p-4 flex flex-col gap-4 bg-white">
      <div className="h-40 bg-secondary border-4 border-black flex items-center justify-center font-black text-4xl uppercase tracking-tighter">
        {title.slice(0, 2)}
      </div>
      <div>
        <h3 className="text-2xl font-black uppercase mb-1">{title}</h3>
        <p className="text-sm font-medium mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 border-2 border-black text-xs font-bold uppercase bg-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-bold text-sm hover:underline"
            >
              <ExternalLink size={16} /> LIVE
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-bold text-sm hover:underline"
            >
              <Github size={16} /> REPO
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
