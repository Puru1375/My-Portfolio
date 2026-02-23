import React from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";
// IMPORT YOUR PHOTO HERE
import profileImg from "../assets/profile.png";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* LEFT: Your Photo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Green decoration behind image */}
          <div className="absolute -inset-4 bg-primary/20 rounded-xl -z-10 blur-lg"></div>

          <img
            src={profileImg} // REPLACE THIS with {profileImg}
            alt="Profile"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
          />
        </motion.div>

        {/* RIGHT: The Detail Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          {/* The Code Block Decoration */}
          <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-xl mb-8 font-mono text-sm border-l-4 border-primary relative overflow-hidden">
            {/* Fake Menu Bar */}
            <div className="flex gap-2 mb-4 border-b border-gray-700 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-500 ml-2">config.json</span>
            </div>

            {/* The Code */}
            <div className="text-gray-300">
              <p>
                <span className="text-pink-500">const</span>{" "}
                <span className="text-blue-400">developer</span> = {"{"}
              </p>
              <p className="pl-4">
                name: <span className="text-green-400">"Purvanshu Machhi"</span>,
              </p>
              <p className="pl-4">
                role: <span className="text-green-400">"Full Stack Dev"</span>,
              </p>
              <p className="pl-4">
                Bio: <span className="text-green-400">"Computer Engineering student with strong hands-on experience in web & app development, backend systems, and 
automation projects."</span>,
              </p>
              <p className="pl-4">
                CGPA: <span className="text-blue-400">7.77/10</span>,
              </p>
              <p className="pl-4">
                coffee: <span className="text-blue-400">true</span>
              </p>
              <p>{"};"}</p>
            </div>

            {/* Background Logo Watermark */}
            <Code className="absolute bottom-[-20px] right-[-20px] text-white opacity-5 w-32 h-32" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
