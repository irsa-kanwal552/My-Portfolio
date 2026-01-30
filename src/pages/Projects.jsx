import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern personal portfolio built with React, Vite, and Tailwind CSS.",
    githubUrl: "https://github.com/irsa-kanwal552/Portfolio",
    liveUrl: "https://portfolio-topaz-psi-50.vercel.app/",
    tech: ["React", "Vite", "Tailwind"],
    image: "https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Watch Shop",
    description: "Full-stack MERN application with authentication and CRUD operations.",
    liveUrl: "https://watch-website-phi.vercel.app/",
    githubUrl: "https://github.com/irsa-kanwal552/watch-website",
    tech: ["MongoDB", "Express", "React", "Node"],
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Furniture E-Commerce",
    description: "Designed optimized prompts for AI tools to generate websites and content.",
    liveUrl: "https://royal-furniture-zeta.vercel.app/",
    githubUrl: "https://github.com/irsa-kanwal552/royal-furniture",
    tech: ["Prompt Engineering", "AI", "UX"],
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1000&auto=format&fit=crop"
  },
];

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      id="projects"
      className="w-full min-h-screen flex items-center justify-center pt-24 pb-10 px-6"
    >
      <div className="w-full px-6 md:px-12 max-w-6xl">

        {/* Header */}
        <div className="text-center">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-extrabold"
          >
            My{" "}
            <span className="text-gradient">
              Projects
            </span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-400 max-w-3xl mx-auto"
          >
            A selection of my work showcasing MERN stack development and
            Prompt Engineering expertise.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="glass p-0 border border-white/10 rounded-2xl hover:border-cyan-500 transition-colors overflow-hidden group"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="mt-3 text-gray-400 text-sm">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 border border-white/10 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <button className="px-4 py-2 border border-white/20 hover:border-blue-500 hover:text-white transition rounded-lg text-sm text-gray-300">
                    Live Preview
                  </button>
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 py-2 border border-white/20 hover:border-blue-500 hover:text-white transition rounded-lg text-sm text-gray-300">
                    GitHub
                  </button>
                </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section >
  );
};

export default Projects;
