import React from "react";
import { Github, Linkedin, Twitter, Download } from "lucide-react";
import resume from "../assets/PurvanshuMachhi_Resume.pdf";

const Footer = () => {
  return (
    <footer className="bg-dark py-8 text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Copyright */}
        <p className="text-gray-400 text-sm mb-4 md:mb-0">
          © 2026 Purvanshu Machhi. All rights reserved. Built with React & Tailwind.
        </p>

        {/* Resume Download */}
        <a 
          href={resume} 
          download="PurvanshuMachhi_Resume.pdf"
          className="flex items-center gap-2 bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-lg transition-colors mb-4 md:mb-0"
        >
          <Download size={18} />
          <span>Download Resume</span>
        </a>

        {/* Social Icons */}
        <div className="flex gap-6">
          <a href="https://github.com/Puru1375" className="text-gray-400 hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/purvanshu-machhi-77622532a/" className="text-gray-400 hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          {/* <a href="#" className="text-gray-400 hover:text-primary transition-colors">
            <Twitter size={20} />
          </a> */}
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;  