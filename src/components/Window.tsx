"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, Minus, Square } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface WindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  defaultPosition?: { x: number; y: number };
  onClose?: () => void;
  color?: string;
}

export const Window: React.FC<WindowProps> = ({
  title,
  children,
  className,
  defaultPosition = { x: 50, y: 50 },
  onClose,
  color = "bg-white",
}) => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={defaultPosition}
      className={cn(
        "brutal-window absolute w-[400px] z-10",
        isMinimized && "w-[200px]",
        className,
      )}
    >
      <div className="window-header cursor-grab active:cursor-grabbing">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 border-2 border-white bg-white" />
          <span className="font-bold">{title}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="hover:bg-white hover:text-black p-0.5 transition-colors"
          >
            <Minus size={14} />
          </button>
          <button className="hover:bg-white hover:text-black p-0.5 transition-colors">
            <Square size={14} />
          </button>
          <button
            onClick={onClose}
            className="hover:bg-accent p-0.5 transition-colors"
          >
            <X size={14} />
          </button>
        </div>
      </div>
      {!isMinimized && (
        <div className={cn("p-6 font-sans", color)}>{children}</div>
      )}
    </motion.div>
  );
};
