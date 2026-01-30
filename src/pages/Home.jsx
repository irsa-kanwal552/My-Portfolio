import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Mail, Linkedin, Github } from "lucide-react";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Experience from "./Experience.jsx";
import Contact from "./Contact.jsx";
import heroAbstract from "../assets/hero_abstract.png";

const Home = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full">
      <motion.section
        initial={{ opacity: 80 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        id="home"
        className="w-full min-h-screen flex items-center justify-center relative overflow-hidden text-white"
      >
        {/* Background Glows can be subtle or removed to match 'previous' strictly. 
            Keeping them extremely subtle or removing them if they clash. 
            User asked for 'background design color', likely referring to the main page bg.
            Let's reduce their intensity or remove them to be safe. 
            Removing for now to ensure strict adherence to 'previous background'.
        */}

        {/* Background removed to use global body background */}

        {/* Content container - Split Layout */}
        <div className="w-full max-w-7xl px-6 md:px-12 flex flex-col md:flex-row items-center justify-between z-10 text-white relative h-full">

          {/* Left Column: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-2 pt-10 md:pt-0">
            {/* Badge */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 text-sm font-medium tracking-wide rounded-full bg-white/5 border border-white/10 text-cyan-300 backdrop-blur-md"
            >
              🚀 Available for Hire
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-2">
                Hi, I’m <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Irsa Kanwal</span>
              </h1>
            </motion.div>

            {/* Typewriter Subtitle */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-300 font-light h-16 md:h-20"
            >
              I am a{" "}
              <span className="text-cyan-400 font-semibold block md:inline mt-1 md:mt-0">
                <Typewriter
                  words={['MERN Stack Developer', 'Prompt Engineer', 'UI/UX Enthusiast', 'AI Specialist']}
                  loop={0}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </motion.div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-slate-400 max-w-lg leading-relaxed"
            >
              Crafting robust web applications and intelligent AI solutions with precision and passion.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
            >
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-white text-black hover:bg-slate-200 transition-all rounded-full font-bold text-lg"
              >
                Contact Me
              </button>
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 border border-white/20 text-white hover:bg-white/10 transition-all rounded-full font-bold text-lg backdrop-blur-sm"
              >
                View Work
              </button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-8 flex gap-4"
            >
              <SocialHeroLink
                href="https://www.linkedin.com/in/irsa-kanwal-2939a1380/"
                icon={<Linkedin size={24} />}
                color="#0077b5"
              />
              <SocialHeroLink
                href="https://github.com/irsa-kanwal552"
                icon={<Github size={24} />}
                color="#171515"
              />
              <SocialHeroLink
                href="mailto:irsa.kanwal5522@gmail.com"
                icon={<Mail size={24} />}
                color="#EA4335"
              />
            </motion.div>
          </div>

          {/* Right Column: Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full md:w-1/2 flex justify-center md:justify-end relative mt-12 md:mt-0"
          >
            <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center">
              {/* Abstract Glass Tech Art with Screen Blend and Radial Mask to remove box */}
              <img
                src={heroAbstract}
                alt="Abstract Tech Architecture"
                className="w-full h-full object-contain mix-blend-screen animate-float-slow"
                style={{
                  maskImage: 'radial-gradient(circle, black 40%, transparent 70%)',
                  WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 70%)'
                }}
              />
            </div>
          </motion.div>

        </div>

      </motion.section>

      {/* Other Sections Stacked Below */}
      <About />
      <Services />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;

const SocialHeroLink = ({ href, icon, color }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-full text-white shadow-lg transition-all"
    style={{ backgroundColor: color }}
    whileHover={{ scale: 1.1, translateY: -5 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
  </motion.a>
);
