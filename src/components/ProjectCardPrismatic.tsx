"use client";

import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

export const ProjectCardPrismatic: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  link,
  github,
}) => {
  return (
    <div className="bento-card flex flex-col h-full group">
      <div className="mb-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold tracking-tight text-pearl group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <div className="flex gap-3 items-center">
            {github && (
              <a
                href={github}
                className="text-secondary hover:text-pearl transition-colors"
              >
                <Github size={18} />
              </a>
            )}
            {link && (
              <a
                href={link}
                className="text-secondary hover:text-accent transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
        <p className="text-sm text-secondary leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>

      <div className="mt-auto flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] uppercase tracking-widest font-mono font-bold text-accent/70 border border-accent/20 px-2 py-0.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
