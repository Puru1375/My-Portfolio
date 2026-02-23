import React from "react";

const techs = [
  "REACT_V18", "NODE_JS", "MONGO_DB", "EXPRESS", "NEXT_JS", "TYPESCRIPT", 
  "TAILWIND_CSS", "DOCKER", "AWS_EC2", "GIT_BASH", "REDUX_TK", "FIGMA"
];

const TechMarquee = () => {
  return (
    // Changed bg-primary to bg-black, added borders
    <div className="bg-black py-4 border-y border-green-900 overflow-hidden relative">
      
      {/* Scanline effect overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 pointer-events-none bg-[length:100%_4px,3px_100%]"></div>

      <div className="flex whitespace-nowrap animate-marquee relative z-0">
        {[...techs, ...techs, ...techs].map((tech, index) => (
          <div key={index} className="flex items-center mx-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
            <span className="text-green-500 font-mono text-lg font-bold tracking-widest opacity-90">
              {tech}
            </span>
            <span className="text-gray-700 ml-6 text-sm">||</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;