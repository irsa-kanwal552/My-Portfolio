import React from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        role: "MERN Stack Developer",
        company: "Software House",
        period: "2024 - Present",
        description: "Developing scalable full-stack applications using the MERN stack. key responsibilities include designing RESTful APIs, optimizing database queries, and creating responsive UI with React and Tailwind CSS."
    },
    {
        role: "Frontend Developer",
        company: "Freelance",
        period: "2023 - 2024",
        description: "Built modern, responsive websites for various clients using React and Next.js. Focused on performance optimization, SEO best practices, and delivering pixel-perfect designs."
    },
    {
        role: "Web Development Intern",
        company: "Tech Startup",
        period: "2023 - 2023",
        description: "Assisted the development team in building and maintaining web applications. Gained hands-on experience with JavaScript, HTML5, CSS3, and version control with Git."
    }
];

const Experience = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            id="experience"
            className="w-full min-h-screen flex items-center justify-center pt-24 pb-10 px-6"
        >
            <div className="max-w-4xl w-full mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-extrabold mb-4"
                    >
                        My <span className="text-gradient">Experience</span>
                    </motion.h2>
                    <p className="text-gray-400">A timeline of my professional journey.</p>
                </div>

                <div className="relative border-l-2 border-white/10 ml-4 md:ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-black border-2 border-cyan-500 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>

                            <div className="glass p-8 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all hover:translate-x-2">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                                        <h4 className="text-lg text-cyan-400">{exp.company}</h4>
                                    </div>
                                    <span className="mt-2 md:mt-0 px-4 py-1 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-gray-300 w-fit">
                                        {exp.period}
                                    </span>
                                </div>
                                <p className="text-gray-300 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Experience;
