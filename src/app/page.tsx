"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassContainer } from "@/components/GlassContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCardPrismatic } from "@/components/ProjectCardPrismatic";
import {
  Terminal,
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Code,
  Zap,
  Globe,
} from "lucide-react";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground bg-mesh selection:bg-accent selection:text-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-sm tracking-tighter"
        >
          PRISMATIC_V1.0.4
        </motion.span>
        <div className="flex gap-8 font-mono text-[10px] tracking-widest uppercase opacity-50">
          <a href="#projects" className="hover:text-accent transition-colors">
            Projects
          </a>
          <a href="#about" className="hover:text-accent transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-accent transition-colors">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono text-accent text-sm mb-4 block tracking-[0.2em] uppercase">
            Junior Frontend Developer
          </span>
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.8] mb-8 uppercase italic gradient-text">
            Cristian <br /> Celis <br /> Moreno
          </h1>
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-end justify-between">
            <p className="max-w-md text-secondary text-lg leading-relaxed">
              Specializing in high-performance web interfaces that balance
              structural precision with fluid, cinematic motion.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                <ArrowUpRight className="text-accent group-hover:text-background transition-colors" />
              </div>
              <span className="font-mono text-xs tracking-widest uppercase">
                Explore Work
              </span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Projects Bento Grid */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
        <SectionHeader
          number="01"
          title="Curated Work"
          subtitle="A selection of laboratory projects focusing on scalability, accessibility, and high-end visual polish."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={
                project.size === "large" ? "md:col-span-2" : "md:col-span-1"
              }
            >
              <ProjectCardPrismatic
                title={project.title}
                description={project.description}
                tags={project.tags}
                github={project.github}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </section>

      {/* About & Skills */}
      <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeader number="02" title="The Profile" />
            <div className="space-y-6 text-secondary text-lg leading-relaxed">
              <p>
                My approach to frontend development is rooted in the belief that
                code should be as clean as the design it supports. I bridge the
                gap between complex backend data and intuitive user experiences.
              </p>
              <p>
                Currently focusing on the intersection of **performant React
                architecture** and **modern CSS**.
              </p>
              <div className="flex gap-6 pt-4">
                <a
                  href="#"
                  className="p-3 border border-pearl/10 rounded-full hover:border-accent hover:text-accent transition-all"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 border border-pearl/10 rounded-full hover:border-accent hover:text-accent transition-all"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <GlassContainer className="bg-white/2">
            <h3 className="font-mono text-xs tracking-widest uppercase mb-8 opacity-50 flex items-center gap-2">
              <Code size={14} className="text-accent" /> Technical Inventory
            </h3>
            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              {[
                {
                  label: "Core Layer",
                  skills: ["React", "Next.js", "TypeScript"],
                },
                { label: "Styling", skills: ["Tailwind", "Framer", "CSS4"] },
                {
                  label: "Engines",
                  skills: ["Three.js", "Node.js", "PostgreSQL"],
                },
                { label: "Workflow", skills: ["Git", "Figma", "Vercel"] },
              ].map((group) => (
                <div key={group.label}>
                  <h4 className="font-bold text-pearl text-sm mb-3 underline decoration-accent/30 decoration-2 underline-offset-4">
                    {group.label}
                  </h4>
                  <ul className="space-y-1">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-secondary text-xs font-mono"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </GlassContainer>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-20 px-6 border-t border-pearl/5">
        <div className="max-w-7xl mx-auto text-center">
          <span className="font-mono text-[10px] tracking-widest uppercase opacity-30 block mb-4">
            Transmission Ready
          </span>
          <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter uppercase italic leading-none">
            Let's <br />{" "}
            <span className="text-accent underline decoration-accent/20 underline-offset-8">
              Collaborate
            </span>
          </h2>
          <motion.a
            whileHover={{ y: -5 }}
            href="mailto:hello@dev.archive"
            className="inline-flex items-center gap-3 text-2xl font-mono hover:text-accent transition-colors"
          >
            <Mail className="text-accent" /> connect@prismatic.dev
          </motion.a>

          <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-4 opacity-40 font-mono text-[8px] uppercase tracking-widest">
            <p>© 2026 PRISMATIC ARCHIVE. ALL RIGHTS RESERVED.</p>
            <p>
              LOCAL TIME:{" "}
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}{" "}
              GMT-5
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
