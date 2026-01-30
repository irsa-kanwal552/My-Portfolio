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
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "glass-nav py-3" : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-9 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold tracking-tighter hover:scale-105 transition-transform">
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
          className="md:hidden text-gray-200 cursor-pointer hover:text-cyan-400 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-b border-gray-800 overflow-hidden"
          >
            <ul className="flex flex-col gap-6 text-center py-8">
              {links.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="text-lg font-medium text-gray-300 hover:text-cyan-400 transition"
                  >
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
