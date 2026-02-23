import React from "react";
import { motion } from "framer-motion";

const stats = [
  { id: 1, value: "1200+", label: "GitHub Commits" },
  { id: 2, value: "15+", label: "Projects Built" },
  { id: 3, value: "300+", label: "DSA Problems Solved" },
  { id: 4, value: "3.8", label: "Current GPA" }, // Or remove if you prefer
];

const Stats = () => {
  return (
    <div className="bg-dark w-full py-10 border-t-4 border-primary/20">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around gap-8 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }} // Animates only once
            className="flex flex-col items-center"
          >
            {/* The Number */}
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
              {stat.value}
            </h3>
            
            {/* The Label */}
            <p className="text-primary font-medium tracking-widest uppercase text-sm">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;