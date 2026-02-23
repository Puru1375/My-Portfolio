import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Server, Cpu, Globe, Terminal } from "lucide-react";

const icons = [
  { Icon: Code, top: "10%", left: "5%" },
  { Icon: Database, top: "20%", left: "85%" },
  { Icon: Server, top: "60%", left: "10%" },
  { Icon: Cpu, top: "80%", left: "80%" },
  { Icon: Globe, top: "40%", left: "90%" },
  { Icon: Terminal, top: "15%", left: "50%" },
  { text: "</>", top: "70%", left: "50%", isText: true },
  { text: "{ }", top: "30%", left: "20%", isText: true },
  { text: "npm", top: "85%", left: "25%", isText: true },
];

const BackgroundParticles = () => {
  return (
    // Changed z-[-1] to z-0 and added before pseudo element logic via wrapper
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-gray-400 opacity-30"
          style={{ top: item.top, left: item.left }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.isText ? (
            <span className="text-4xl font-mono font-bold">{item.text}</span>
          ) : (
            <item.Icon size={48} />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default BackgroundParticles;