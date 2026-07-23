import React from "react";
import { motion } from "framer-motion";
import { GitCommit, GitBranch, Terminal, Cpu, Trophy, Cloud, Wrench, Server, Database, Code2,GraduationCap} from "lucide-react";

const timelineData = [
  {
    year: "Dec 2025",
    hash: "sih25-final",
    title: "Smart India Hackathon Finalist",
    location: "National Level",
    desc: "Selected for the Final Round for Problem Statement SIH25033. Built an AI-Based Smart Allocation Engine for the PM Internship Scheme.",
    icon: <Trophy size={18} />,
    tag: "achievement: finalist"
  },
  {
    year: "Sep 2025",
    hash: "odoo-hack",
    title: "Odoo Hackathon Finalist",
    location: "NMIT, Bangalore",
    desc: "Selected for the Final Round. Developed 'StockMaster', a highly scalable, modular Inventory Management System.",
    icon: <Trophy size={18} />,
    tag: "achievement: finalist"
  },
  {
    year: "2024 - Present",
    hash: "aws-cloud",
    title: "Cloud & DevOps Transition",
    location: "Self-Taught / Projects",
    desc: "Mastered containerization (Docker) and AWS infrastructure. Built production-grade CI/CD pipelines and deployed ECS Fargate clusters.",
    icon: <Cloud size={18} />,
    tag: "learning: devops"
  },
  {
    year: "2022 - 2026",
    hash: "b-tech",
    title: "B.E. Computer Engineering",
    location: "Gujarat Technological University",
    desc: "Currently maintaining an 8.10 CGPA. Building a strong foundation in OS, Networking, and Data Structures.",
    icon: <GraduationCap size={18} />,
    tag: "education: ongoing"
  }
];

const Timeline = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-20 bg-white relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-gray-100 rounded text-xs font-mono text-gray-500 mb-2">
            git log --oneline --graph
          </div>
          <h2 className="text-4xl font-bold text-dark">
            Commit <span className="text-primary">History</span>
          </h2>
        </div>

        {/* The Git Graph Line */}
        <motion.div 
          className="relative border-l-2 border-dashed border-gray-300 ml-6 md:ml-10 space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3, // Delay between each card
              },
            },
          }}
        >
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
              }}
              className="relative pl-8 md:pl-12"
            >
              {/* Git Node Dot */}
              <div className="absolute -left-[9px] bg-white border-4 border-primary h-5 w-5 rounded-full z-10"></div>

              {/* The Card */}
              <div className="group relative bg-light p-6 rounded-lg border border-gray-200 hover:border-primary transition-colors">
                
                {/* Tech Header */}
                <div className="flex justify-between items-start mb-2 font-mono text-xs text-gray-500">
                  <span className="flex items-center gap-2">
                     <GitCommit size={14} className="text-primary"/> 
                     <span className="text-primary font-bold">commit {item.hash}</span>
                  </span>
                  <span>{item.year}</span>
                </div>

                <h3 className="text-xl font-bold text-dark flex items-center gap-2">
                  {item.title}
                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full font-mono font-normal">
                    {item.tag}
                  </span>
                </h3>
                
                <p className="text-gray-400 text-sm mb-3 font-mono">{item.location}</p>
                <p className="text-gray-600 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;