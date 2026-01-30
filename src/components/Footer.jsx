import React from "react";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="glass border-t border-gray-800 bg-black/50 py-8 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <img src={logo} alt="Irsa Kanwal" className="h-24 object-contain mx-auto md:mx-0 mb-2" />
            <p className="text-gray-500 text-sm mt-1">Building digital experiences that matter.</p>
          </div>

          <div className="flex gap-6">
            <SocialLink href="mailto:irsa.kanwal5522@gmail.com" icon={<Mail size={20} />} />
            <SocialLink href="https://www.linkedin.com/in/irsa-kanwal-2939a1380/" icon={<Linkedin size={20} />} />
            <SocialLink href="https://github.com/irsa-kanwal552" icon={<Github size={20} />} />
          </div>

          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="p-2 bg-gray-800/50 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
  >
    {icon}
  </a>
);

export default Footer;
