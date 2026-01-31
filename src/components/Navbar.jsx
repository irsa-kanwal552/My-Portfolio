import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
// import { NavLink } from "react-router-dom"; // Switched to anchor tags for one-page scroll
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active section detection based on scroll position
      const sections = ["home", "about", "services", "skills", "experience", "projects", "contact"];
      const currentScroll = window.scrollY + 100; // Offset

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (currentScroll >= offsetTop && currentScroll < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hash Links
  const links = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Skills", path: "#skills" },
    { name: "Experience", path: "#experience" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${menuOpen
        ? "bg-black py-0" // Force solid black when menu is open
        : scrolled
          ? "glass-nav py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-9 flex justify-between items-center relative ">
        <a href="#home" className="text-2xl font-bold tracking-tighter hover:scale-105 transition-transform z-50">
          <img src={logo} alt="Irsa Kanwal" className="h-24 object-contain" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map((link) => {
            const isActive = activeSection === link.path.replace("#", "");
            return (
              <li key={link.path}>
                <a
                  href={link.path}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${isActive ? "text-cyan-400" : "text-gray-300 hover:text-white"
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Button */}
        <div
          className="md:hidden text-gray-200 cursor-pointer hover:text-cyan-400 transition z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu Overlay - Premium Half-Sheet */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="fixed inset-0 bg-zinc-350/20 backdrop-blur-3xl backdrop-saturate-150 z-40 md:hidden flex flex-col justify-center items-center gap-3  border-b border-white/10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] overflow-hidden"
            style={{ top: 42, height: "50vh" }}
          >
            {/* Top Shine/Highlight */}
            <div className="absolute top-0 w-1/2 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm" />

            <ul className="flex flex-col gap-5 text-center p-4">
              {links.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      setMenuOpen(false);
                      setTimeout(() => {
                        const section = document.querySelector(link.path);
                        if (section) {
                          section.scrollIntoView({ behavior: "smooth" });
                        }
                      }, 300);
                    }}
                    className="text-xl font-medium text-gray-200 hover:text-cyan-400 transition-colors tracking-wide flex items-center justify-center gap-2 group"
                  >
                    {/* Subtle dot indicator on hover */}
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
