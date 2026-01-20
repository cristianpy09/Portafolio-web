"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  title,
  subtitle,
}) => {
  return (
    <div className="mb-12">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100px" }}
        viewport={{ once: true }}
        className="h-px bg-secondary mb-4 opacity-30"
      />
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-accent text-sm tracking-tighter">
          {number}
        </span>
        <h2 className="text-4xl md:text-6xl font-bold gradient-text uppercase tracking-tight">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-secondary mt-2 max-w-xl text-lg">{subtitle}</p>
      )}
    </div>
  );
};
