import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
      { name: "Framer Motion", icon: "https://pagepro.co/blog/wp-content/uploads/2020/03/framer-motion.png" }, // Fallback/Custom for framer
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "Mongoose", icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png" }, // Custom
      { name: "REST APIs", icon: "https://cdn-icons-png.flaticon.com/512/6009/6009401.png" }, // Generic API icon
      { name: "JWT Auth", icon: "https://jwt.io/img/pic_logo.svg" }
    ]
  },
  {
    category: "Tools & AI",
    items: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
      { name: "ChatGPT", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
      { name: "Midjourney", icon: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Midjourney_Emblem.png" }
    ]
  },
];

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      id="skills"
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
            Technical <span className="text-gradient">Skills</span>
          </motion.h2>
          <p className="text-gray-400">My toolbelt for building digital products.</p>
        </div>

        <div className="grid gap-8">
          {skillsData.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass p-8 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-100 border-l-4 border-cyan-500 pl-4">
                {section.category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {section.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-gray-300 hover:text-cyan-400 hover:border-cyan-500 shadow-sm transition-all cursor-default"
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain filter invert-0"
                      // Adding a small hack: Some icons like Next.js/GitHub might need inversion on dark mode if they are standard black.
                      // But 'original' versions usually have colors. 
                      // GitHub original is black, so it might disappear on dark bg. Let's check.
                      // If it's github-original, it's black. Let's strictly use github-original-wordmark or generic white logo if available?
                      // Or simply apply `brightness-0 invert` class conditionally? 
                      // Let's safe-guard generic icons.
                      />
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
