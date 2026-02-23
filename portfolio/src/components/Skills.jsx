import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Wrench, Terminal } from "lucide-react";

const skills = [
  {
    category: "Languages",
    icon: <Code2 size={20} className="text-blue-500" />,
    tools: ["JavaScript", "Python", "Java", "C++"],
  },
  {
    category: "Frontend & App",
    icon: <Layout size={20} className="text-purple-500" />,
    tools: ["React", "React Native", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend API",
    icon: <Server size={20} className="text-green-500" />,
    tools: ["Node.js", "Express", "Django", "Flask", "Redis"],
  },
  {
    category: "Databases",
    icon: <Database size={20} className="text-yellow-500" />,
    tools: ["MongoDB", "PostgreSQL", "MySQL", "Supabase", "SQLite"],
  },
  {
    category: "DevOps & Tools",
    icon: <Wrench size={20} className="text-orange-500" />,
    tools: ["Git", "GitHub", "Docker", "Postman", "Vercel", "VS Code", "Godot"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const Skills = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-light relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
        <Terminal size={400} />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-gray-200 rounded text-xs font-mono text-gray-600 mb-2">
            package.json
          </div>
          <h2 className="text-4xl font-extrabold text-dark">
            Tech <span className="text-primary">Stack</span>
          </h2>
          <p className="text-gray-500 font-mono mt-2 text-sm">dependencies {"{"} ... {"}"}</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Window Header */}
              <div className="bg-gray-50 px-4 py-2 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                   {skill.icon}
                   <span className="font-bold text-gray-700 text-sm font-mono">{skill.category}</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
              </div>

              {/* Tools Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {skill.tools.map((tool, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded border border-gray-200 text-sm font-mono hover:bg-green-50 hover:text-green-600 hover:border-green-200 transition-colors cursor-default flex items-center gap-1"
                    >
                      <span className="text-gray-400 opacity-50 text-xs">#</span>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;