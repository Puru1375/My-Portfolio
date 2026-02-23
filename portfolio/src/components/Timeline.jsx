import React from "react";
import { motion } from "framer-motion";
import { GitCommit, GitBranch, Terminal, Cpu } from "lucide-react";

const timelineData = [
  {
    year: "2024",
    hash: "a1b2c3d",
    title: "Final Year Capstone",
    location: "University",
    desc: "Optimized ML algorithms for predictive analytics. Integrated Python backend with React frontend.",
    icon: <Cpu size={18} />,
    tag: "feat(ml): deploy"
  },
  {
    year: "2023",
    hash: "f4e5d6c",
    title: "Full Stack Intern",
    location: "Tech Startup",
    desc: "Refactored legacy API endpoints. Reduced server response time by 30% using Redis caching.",
    icon: <Terminal size={18} />,
    tag: "fix(api): optimize"
  },
  {
    year: "2022",
    hash: "9g8h7i6",
    title: "Hackathon Win",
    location: "Smart India Hackathon",
    desc: "Built a Fintech solution in 24 hours. Led the frontend team using React & Tailwind.",
    icon: <GitBranch size={18} />,
    tag: "init: project"
  },
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