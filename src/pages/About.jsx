import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id="about"
      className="w-full min-h-screen flex items-center justify-center pt-24 pb-10 px-6"
    >
      <div className="w-full px-6 md:px-12 max-w-5xl flex flex-col items-center text-center">

        {/* Heading */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Me
          </span>
        </motion.h1>

        {/* Intro */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 text-lg md:text-xl text-gray-400 max-w-4xl space-y-6 leading-relaxed text-left md:text-center"
        >
          <p>
            I’m a passionate <span className="text-purple-400 font-medium">MERN Stack Developer</span> based
            in Lahore, Pakistan. My journey in tech is driven by a curiosity to understand how things work
            and a desire to build solutions that make a difference.
          </p>
          <p>
            With hands-on experience at <span className="text-cyan-400 font-medium">Intelligentsia Software House</span>,
            I've honed my skills in building robust, scalable web applications. I don't just write code;
            I design experiences. From crafting pixel-perfect frontends with
            <span className="text-cyan-400 font-medium"> React & Tailwind</span> to architecting efficient backends
            with <span className="text-cyan-400 font-medium">Node & MongoDB</span>.
          </p>
          <p>
            Beyond traditional development, I specialize in <span className="text-purple-400 font-medium">Prompt Engineering</span>,
            leveraging the power of AI to optimize workflows, generate creative content, and solve complex problems faster.
          </p>
        </motion.div>

        {/* Random decorative element or quote */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 p-6 glass border border-white/10 rounded-xl"
        >
          <p className="text-gray-500 italic">"Innovation is seeing what everybody has seen and thinking what nobody has thought."</p>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default About;
