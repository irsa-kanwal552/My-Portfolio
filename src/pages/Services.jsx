import React from "react";
import { motion } from "framer-motion";
import serviceWeb from "../assets/service_web.png";
import serviceAi from "../assets/service_ai.png";
import serviceDesign from "../assets/service_design.png";

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Enterprise Web Architecture",
            img: serviceWeb,
            desc: "Architecting high-performance, cloud-native applications designed for scale. I specialize in building fault-tolerant microservices and secure, resilient backend infrastructure.",
            skills: ["React Architectures", "Cloud Native", "System Design", "Microservices"],
            highlightColor: "group-hover:text-cyan-400",
            borderColor: "group-hover:border-cyan-500/50"
        },
        {
            id: 2,
            title: "Generative AI Solutions",
            img: serviceAi,
            desc: "Unlocking business value through custom LLM integration. I engineer sophisticated RAG pipelines and autonomous agentic workflows that automate complex decision-making processes.",
            skills: ["Custom RAG", "Agentic Workflows", "Model Fine-tuning", "Automation"],
            highlightColor: "group-hover:text-purple-400",
            borderColor: "group-hover:border-purple-500/50"
        },
        {
            id: 3,
            title: "Strategic Product Design",
            img: serviceDesign,
            desc: "Converting complex requirements into intuitive, engaging digital experiences. I implement comprehensive design systems that ensure brand consistency and drive user retention.",
            skills: ["Design Systems", "User Journey Mapping", "Interactive Prototyping", "UX Strategy"],
            highlightColor: "group-hover:text-emerald-400",
            borderColor: "group-hover:border-emerald-500/50"
        }
    ];

    return (
        <div className="w-full py-32 relative z-10" id="services">
            {/* Background Gradient Spotlights */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 mt-10">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Expertise</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl text-lg leading-relaxed mx-auto">
                        Delivering high-performance solutions at the intersection of complex engineering and elegant design.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className={`group relative p-8 rounded-3xl bg-zinc-950/50 border border-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/20 hover:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.2)]`}
                        >
                            {/* Shine Effect */}
                            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 transition-all duration-1000 group-hover:left-[100%] pointer-events-none" />

                            {/* Inner Glow Mesh */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* 3D Glass Icon */}
                            <div className="mb-6 relative z-10 w-24 h-24">
                                <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-full object-contain mix-blend-screen filter brightness-125 group-hover:scale-110 transition-transform duration-500"
                                    style={{
                                        maskImage: 'radial-gradient(circle, black 50%, transparent 70%)',
                                        WebkitMaskImage: 'radial-gradient(circle, black 50%, transparent 70%)'
                                    }}
                                />
                            </div>

                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors tracking-wide relative z-10">
                                {service.title}
                            </h3>

                            <p className="text-zinc-400 leading-relaxed mb-8 min-h-[80px] font-light relative z-10">
                                {service.desc}
                            </p>

                            {/* Skill Tags */}
                            <div className="flex flex-wrap gap-2 relative z-10">
                                {service.skills.map(skill => (
                                    <span key={skill} className="px-3 py-1 text-xs font-semibold tracking-wide rounded-full bg-white/5 text-zinc-300 border border-white/5 transition-all duration-300 hover:bg-cyan-500/20 hover:text-cyan-200 hover:border-cyan-500/30">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
